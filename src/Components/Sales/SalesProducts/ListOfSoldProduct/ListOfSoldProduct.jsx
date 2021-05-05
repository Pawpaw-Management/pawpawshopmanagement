import React, { useState, useEffect } from "react";
import SoldProductDetails from "./SoldProductDetails/SoldProductDetails";
import "./ListOfSoldProduct.css";
import "../../../CommonElements.css";

export default function ListOfSoldProduct(props) {
    // Define useState to update state here
    const [sold_products, setSoldProducts] = useState([]);

    // When component mount, fetch latest data through API, and assign to "sold_products"
    useEffect(() => {
        fetch(`${props.url}items-solds`)
            .then((response) => response.json())
            .then((response) => {
                setSoldProducts(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(sold_products)

    return (
        <section className="ListOfSoldProducts">
            <h1>Products Sales History</h1>
            <table className="ProductList">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity Sold</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sold_products &&
                        sold_products.map((content, index) => {
                            return (
                                <SoldProductDetails
                                    content={content}
                                    key={index}
                                    index={index}
                                />
                            );
                        })}
                </tbody>
            </table>
        </section>
    );
}
