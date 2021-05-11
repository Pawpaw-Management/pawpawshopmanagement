import React from "react";
import "./SoldPetDetails.css";

export default function SoldPetDetails(props) {
    // Props.url has a "/" at the end, need to remove it before using it in next step
    const processed_url = props.url.slice(0, -1);
    console.log(processed_url);

    // If an account has pet_photo, then display it; if not, display "no photo provided"
    let pet_photo;
    if (props.content.pet_photo_url !== "none") {
        pet_photo = (
            <img
                className={"eachCustomerAndPetInfo-photo"}
                src={processed_url + props.content.pet_photo_url}
                alt="customer's pet"
            />
        );
    } else {
        pet_photo = <span>no photo provided</span>;
    }

    return (
        <tr className="SoldPetDetails">
            <td>{props.content.pet_name}</td>
            <td>{pet_photo}</td>
            <td>{props.content.first_name + " " + props.content.last_name}</td>
            <td>{props.content.phone}</td>
            <td>{props.content.email}</td>
            <td>{props.content.purchase_date}</td>
        </tr>
    );
}
