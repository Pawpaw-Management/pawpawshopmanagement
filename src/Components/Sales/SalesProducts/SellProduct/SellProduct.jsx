import React, { useState, useEffect } from "react";
import moment from "moment";
import "./SellProduct.css";
import "../../../CommonElements.css";

export default function SellProduct(props) {
    // Define states
    const [product_name, setProductName] = useState("");
    const [product_amount, setProductAmount] = useState(0);
    const [product_price, setProductPrice] = useState(0);
    const [product_sell_amount, setProductSellAmount] = useState(1);
    const [
        product_amount_after_selling,
        setProductAmountAfterSelling,
    ] = useState(0);

    // Define the date of today as purchase_date
    var purchase_date = new Date();
    var dd = String(purchase_date.getDate()).padStart(2, "0");
    var mm = String(purchase_date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = purchase_date.getFullYear();
    purchase_date = mm + "/" + dd + "/" + yyyy;
    console.log("purchase_date: " + purchase_date);

    // Define onChange event handler
    const changeProductSellAmount = (event) => {
        setProductSellAmount(event.target.value);
        setProductAmountAfterSelling(product_amount - product_sell_amount);
    };

    // When <SellProduct> becomes visible, set input values to the current account information
    // 1. Define the current account
    const current_product =
        props.products &&
        props.products.find((product) => product.id === props.productId);

    // 2. Assign data from current_account to states when accountId changes
    useEffect(() => {
        if (current_product) {
            setProductName(current_product.product_name);
            setProductAmount(current_product.product_amount);
            setProductPrice(current_product.product_price);
        }
    }, [props.productId]);

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
    const handleDelete = async () => {
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
                <p>Please enter customer information</p>
                <button
                    className="button_esc"
                    onClick={() => props.setVisibilitySell(false)}
                >
                    X
                </button>
                <div id="SellProduct__Customer-Info-Form__form">
                    <div className="input-and-label">
                        <label htmlFor="firstname">
                            Please enter the quantity
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
                        handleTransferToSold();
                        handleDelete();
                    }
                }}
            >
                Confirm
            </button>
        </div>
    );
}
