import React, { useState } from "react";
import "./AddProduct.css";

export default function AddProduct(props) {
    // Define states
    const [product_name, setProductName] = useState("");
    const [product_amount, setProductAmount] = useState(0);
    const [product_price, setProductPrice] = useState(0);

    // Define onChange event handler
    const changeProductName = (event) => setProductName(event.target.value);
    const changeProductAmount = (event) => setProductAmount(event.target.value);
    const changeProductPrice = (event) => setProductPrice(event.target.value);

    // Define a function to update account information
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${props.url}items-for-sales`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                product_name: `${product_name}`,
                product_amount: product_amount,
                product_price: product_price,
            }),
        });
        const content = await response.json();
        console.log(content);
        // Tell user the data above is successfully submitted
        if (response.status === 200) {
            alert(`${product_name} has been added!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    return (
        <div className="create_product_for_sale">
            <h1>Add New Product to Store</h1>
            <form
                className="product_for_sale_registrition"
                onSubmit={handleSubmit}
            >
                <label htmlFor="product_name">Product Name:</label>
                <input
                    type="text"
                    name="product_name"
                    id="product_name"
                    value={product_name}
                    onChange={changeProductName}
                />
                <label htmlFor="product_amount">Product Amount:</label>
                <input
                    type="text"
                    name="product_amount"
                    id="product_amount"
                    value={product_amount}
                    onChange={changeProductAmount}
                />
                <label htmlFor="product_price">Product Price:</label>
                <input
                    type="text"
                    id="product_price"
                    name="product_price"
                    value={product_price}
                    onChange={changeProductPrice}
                />
                <input type="submit" />
            </form>
        </div>
    );
}
