import React from "react";
import "./SoldPetDetails.css";

export default function SoldPetDetails(props) {
    return (
        <tr className="SoldPetDetails">
            <td>{props.content.pet_name}</td>
            <td>{props.content.pet_breed}</td>
            <td>{props.content.first_name + " " + props.content.last_name}</td>
            <td>{props.content.phone}</td>
            <td>{props.content.email}</td>
            <td>{props.content.purchase_date}</td>
        </tr>
    );
}
