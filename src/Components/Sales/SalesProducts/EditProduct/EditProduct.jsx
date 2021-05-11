import React, { useState, useEffect } from "react";
import "./EditProduct.css";
import "../../../CommonElements.css";

export default function EditProduct(props) {
    // Define states
    const [product_name, setProductName] = useState("");
    const [product_amount, setProductAmount] = useState(0);
    const [product_price, setProductPrice] = useState(0);

    // Define onChange event handler
    const changeProductName = (event) => setProductName(event.target.value);
    const changeProductAmount = (event) => setProductAmount(event.target.value);
    const changeProductPrice = (event) => setProductPrice(event.target.value);

    // When <EditProduct> becomes visible, set input values to the current account information
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

    // Define a function to update account information
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(
            `${props.url}items-for-sales/${props.productId}`,
            {
                method: "PUT",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    product_name: `${product_name}`,
                    product_amount: product_amount,
                    product_price: product_price,
                }),
            }
        );
        const content = await response.json();
        console.log(content);
        // Tell user the data above is successfully submitted
        if (response.status === 200) {
            alert(`${product_name}'s profile has been modified!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    return (
        <div className="edit_product_for_sale window">
            <h1>Edit Product Profile</h1>
            <button
                className="button_esc"
                onClick={() => props.setVisibilityEdit(false)}
            >
                X
            </button>
            <form
                className="product_for_sale_registrition"
                onSubmit={handleSubmit}
            >
                <label for="product_name">Product Name:</label>
                <input
                    type="text"
                    name="product_name"
                    id="product_name"
                    value={product_name}
                    onChange={changeProductName}
                />
                <label for="product_amount">Product Amount:</label>
                <input
                    type="text"
                    name="product_amount"
                    id="product_amount"
                    value={product_amount}
                    onChange={changeProductAmount}
                />
                <label for="product_price">Product Price:</label>
                <input
                    type="text"
                    name="product_price"
                    id="product_price"
                    value={product_price}
                    onChange={changeProductPrice}
                />
                <input type="submit" />
            </form>
        </div>
    );
}
