import React, { useState, useEffect } from "react";
import "./SellProduct.css";
import "../../../CommonElements.css";

export default function SellProduct(props) {
    // Define states
    const [product_name, setProductName] = useState("");
    const [product_amount, setProductAmount] = useState(0);
    const [product_price, setProductPrice] = useState(0);
    const [product_sell_amount, setProductSellAmount] = useState(0);
    const [
        product_amount_after_selling,
        setProductAmountAfterSelling,
    ] = useState(0);
    const [
        income_from_this_transaction,
        setIncomeFromThisTransaction,
    ] = useState(0);
    const [originalMonthlyIncome, setOriginalMonthlyIncome] = useState(0);
    const [updatedMonthlyIncome, setUpdatedMonthlyIncome] = useState(0);
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    console.log("product_amount: " + product_amount);
    console.log("product_sell_amount: " + product_sell_amount);
    console.log(
        "product_amount_after_selling: " + product_amount_after_selling
    );
    console.log(
        "income_from_this_transaction: " + income_from_this_transaction
    );
    console.log("originalMonthlyIncome:" + originalMonthlyIncome);
    console.log("updatedMonthlyIncome:" + updatedMonthlyIncome);
    console.log(
        Number(
            parseFloat(
                originalMonthlyIncome + income_from_this_transaction
            ).toFixed(2)
        )
    );

    // Define the date of today as purchase_date
    var purchase_date = new Date();
    var dd = String(purchase_date.getDate()).padStart(2, "0");
    var mm = String(purchase_date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = purchase_date.getFullYear();
    purchase_date = mm + "/" + dd + "/" + yyyy;
    // console.log("purchase_date: " + purchase_date);

    // Define onChange event handler
    const changeProductSellAmount = (event) => {
        setProductSellAmount(event.target.value);
    };

    // Update product_amount_after_selling and income_from_this_transaction when product_amount changes
    useEffect(() => {
        const abortController = new AbortController();
        // 1. calculate remaining item quantity
        setProductAmountAfterSelling(product_amount - product_sell_amount);
        // 2. calculate income from this transaction
        setIncomeFromThisTransaction(product_sell_amount * product_price);
        return () => {
            abortController.abort();
        };
    }, [product_sell_amount]);

    // Update updatedMonthlyIncome when income_from_this_transaction changes
    useEffect(() => {
        const abortController = new AbortController();
        setUpdatedMonthlyIncome(
            Number(
                parseFloat(
                    originalMonthlyIncome + income_from_this_transaction
                ).toFixed(2)
            ) // Limit to 2 decimal places
        );
        return () => {
            abortController.abort();
        };
    }, [income_from_this_transaction]);

    // When <SellProduct> becomes visible, set input values to the current account information
    // 1. Define the current account
    const current_product =
        props.products &&
        props.products.find((product) => product.id === props.productId);

    // 2. Assign data from current_account to states when productId changes
    useEffect(() => {
        if (current_product) {
            setProductName(current_product.product_name);
            setProductAmount(current_product.product_amount);
            setProductPrice(current_product.product_price);
        }
    }, [props.productId]);

    // When <SellProduct> becomes visible, fetch value from income-months and assign it to originalMonthlyIncome
    useEffect(() => {
        fetch(`${props.url}income-months`)
            .then((response) => response.json())
            .then((response) => {
                setOriginalMonthlyIncome(response[0].value);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Define a function to post data to income-histories
    const handlePostToIncomeHistory = async () => {
        if (props.url && props.productId) {
            const response = await fetch(`${props.url}income-histories`, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    date: `${purchase_date}`,
                    income: income_from_this_transaction,
                    type: "sales",
                    description: `${product_sell_amount} ${product_name} (price: $${product_price}/item)`,
                }),
            });
        }
    };

    const handleUpdateMonthlyIncome = async () => {
        const response = await fetch(`${props.url}income-months/1`, {
            method: "PUT",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                value: updatedMonthlyIncome,
            }),
        });
    };

    // Define a function to post data to items-solds
    const handleTransferToSold = async () => {
        if (props.url && props.productId) {
            const response = await fetch(`${props.url}items-solds`, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    product_name: `${product_name}`,
                    product_sell_amount: product_sell_amount,
                    purchase_date: `${purchase_date}`,
                }),
            });
        }
    };

    // Define a function to reduce the amount of this product in store
    const handleReduceProductQuantity = async () => {
        if (props.url && props.productId) {
            const response = await fetch(
                `${props.url}items-for-sales/${props.productId}`,
                {
                    method: "PUT",
                    headers: {
                        accept: "application/json",
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        product_amount: product_amount_after_selling,
                    }),
                }
            );
            const content = await response.json();
            console.log(content);
        }
    };

    return (
        <div id="SellProduct__Customer-Info-Form" className="window">
            <div>
                <button
                    className="button_esc"
                    onClick={(e) => {
                        e.preventDefault();
                        props.setVisibilitySell(false);
                        setProductSellAmount(0);
                    }}
                >
                    X
                </button>
                <div id="SellProduct__Customer-Info-Form__form">
                    <div className="input-and-label">
                        <label htmlFor="firstname">
                            Please enter item quantity
                        </label>
                        <input
                            type="number"
                            name="product_sell_amount"
                            id="product_sell_amount"
                            onChange={changeProductSellAmount}
                        />
                    </div>
                </div>
            </div>
            <button
                onClick={() => {
                    if (
                        window.confirm(
                            `Are you sure to sell ${product_sell_amount} ${product_name}?. It CANNOT be undone.`
                        )
                    ) {
                        props.setVisibilitySell(false);
                        handlePostToIncomeHistory();
                        handleUpdateMonthlyIncome();
                        handleTransferToSold();
                        handleReduceProductQuantity();
                    }
                }}
            >
                Confirm
            </button>
        </div>
    );
}
