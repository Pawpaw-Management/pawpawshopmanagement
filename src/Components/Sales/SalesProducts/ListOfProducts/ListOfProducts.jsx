import React, { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails/ProductDetails";
import EditProduct from "../EditProduct/EditProduct";
import SellProduct from "../SellProduct/SellProduct";
import "./ListOfProducts.css";
import "../../../CommonElements.css";

export default function ListOfProducts(props) {
    // Define useState to update state here
    const [products, setProducts] = useState([]);

    // Define useState for <EditProduct> to popup and disappear
    const [visibility_edit, setVisibilityEdit] = useState(false);

    // Define useState for <SellProduct> to popup and disappear
    const [visibility_sell, setVisibilitySell] = useState(false);

    // Define useState for <EditProduct> to edit the account clicked by user
    const [productId, setProductId] = useState(0);

    // When component mount, fetch latest data through API, and assign to "products"
    useEffect(() => {
        fetch(`${props.url}items-for-sales`)
            .then((response) => response.json())
            .then((response) => {
                setProducts(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [visibility_edit, visibility_sell]); // When user finish editting/selling, refresh the product list.

    // console.log(products[0]);

    return (
        <section className="ListOfProducts">
            <h1>All Products In Store</h1>
            <table className="productList">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products &&
                        products.map((content, index) => {
                            return (
                                <ProductDetails
                                    content={content}
                                    key={index}
                                    index={index}
                                    setVisibilityEdit={setVisibilityEdit}
                                    setVisibilitySell={setVisibilitySell}
                                    setProductId={setProductId}
                                />
                            );
                        })}
                </tbody>
            </table>

            {visibility_edit ? (
                <EditProduct
                    productId={productId}
                    url={props.url}
                    products={products}
                    setVisibilityEdit={setVisibilityEdit}
                />
            ) : (
                <div></div>
            )}

            {visibility_sell ? (
                <SellProduct
                    productId={productId}
                    url={props.url}
                    products={products}
                    setVisibilitySell={setVisibilitySell}
                />
            ) : (
                <div></div>
            )}
        </section>
    );
}
