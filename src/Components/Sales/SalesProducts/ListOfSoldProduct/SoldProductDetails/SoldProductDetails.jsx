import React from "react";
import "./SoldProductDetails.css";

export default function SoldProductDetails(props) {
    return (
        <tr className="SoldProductDetails">
            <td>{props.content.product_name}</td>
            <td>{props.content.product_sell_amount}</td>
            <td>{props.content.purchase_date}</td>
        </tr>
    );
}
