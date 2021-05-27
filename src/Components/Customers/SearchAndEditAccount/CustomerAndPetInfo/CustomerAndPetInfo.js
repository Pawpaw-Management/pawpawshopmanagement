import React from "react";
import "./CustomerAndPetInfo.css";

export default function CustomerAndPetInfo(props) {
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

    // Conditional rendering based on props.scenario
    if (props.scenario === "AddAppointment") {
        return (
            <tr className="eachCustomerAndPetInfo">
                <td>{`id: ${props.index + 1}`}</td>
                <td>
                    {props.content.customer_first_name +
                        " " +
                        props.content.customer_last_name}
                </td>
                <td>
                    {props.content.customer_phone
                        ? props.content.customer_phone
                        : "no info provided"}
                </td>
                <td>
                    {props.content.customer_email
                        ? props.content.customer_email
                        : "no info provided"}
                </td>
                <td>
                    <button
                        onClick={() => {
                            props.setVisibilityCustomer(false);
                            props.setCustomerId(props.content.id);
                        }}
                    >
                        Choose
                    </button>
                </td>
            </tr>
        );
    } else {
        return (
            <tr className="eachCustomerAndPetInfo">
                <td>{`id: ${props.index + 1}`}</td>
                <td>
                    {props.content.customer_first_name +
                        " " +
                        props.content.customer_last_name}
                </td>
                <td>{pet_photo}</td>
                <td>
                    {props.content.customer_phone
                        ? props.content.customer_phone
                        : "no info provided"}
                </td>
                <td>
                    {props.content.customer_email
                        ? props.content.customer_email
                        : "no info provided"}
                </td>
                <td>
                    <button
                        onClick={() => {
                            props.setVisibility(true);
                            props.setAccountId(props.content.id);
                        }}
                    >
                        Edit
                    </button>
                </td>
            </tr>
        );
    }
}
