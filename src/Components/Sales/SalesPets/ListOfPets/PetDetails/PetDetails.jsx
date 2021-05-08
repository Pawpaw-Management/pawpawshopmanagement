import React from "react";
import "./PetDetails.css";

export default function PetDetails(props) {
    // Props.url has a "/" at the end, need to remove it before using it in next step
    const processed_url = props.url.slice(0, -1);
    console.log(processed_url);
    
    // If an account has pet_photo, then display it; if not, display "no photo provided"
    let pet_photo;
    if (props.content.pet_photo !== null) {
        pet_photo = (
            <img
                className={"eachCustomerAndPetInfo-photo"}
                src={processed_url + props.content.pet_photo.url}
                alt="customer's pet"
            />
        );
    } else {
        pet_photo = <span>no photo provided</span>;
    }

    return (
        <tr className="PetDetails">
            <td>{`id: ${props.index + 1}`}</td>
            <td>{props.content.pet_name}</td>
            <td>{pet_photo}</td>
            <td>{props.content.pet_breed}</td>
            <td>{props.content.pet_price}</td>
            <td>
                <button
                    onClick={() => {
                        props.setVisibilityEdit(true);
                        props.setPetId(props.content.id);
                    }}
                >
                    Edit
                </button>
            </td>
            <td>
                <button
                    onClick={() => {
                        props.setVisibilitySell(true);
                        props.setPetId(props.content.id);
                    }}
                >
                    Sell
                </button>
            </td>
        </tr>
    );
}
