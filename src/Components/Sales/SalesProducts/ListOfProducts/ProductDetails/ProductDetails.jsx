import React from "react";
import "./ProductDetails.css";

export default function ProductDetails(props) {
    return (
        <tr className="ProductDetails">
            <td>{`id: ${props.index + 1}`}</td>
            <td>{props.content.product_name}</td>
            <td>{props.content.product_amount}</td>
            <td>{props.content.product_price}</td>
            <td>
                <button
                    onClick={() => {
                        props.setVisibilityEdit(true);
                        props.setProductId(props.content.id);
                    }}
                >
                    Edit
                </button>
            </td>
            <td>
                <button
                    onClick={() => {
                        props.setVisibilitySell(true);
                        props.setProductId(props.content.id);
                    }}
                >
                    Sell
                </button>
            </td>
        </tr>
    );
}
