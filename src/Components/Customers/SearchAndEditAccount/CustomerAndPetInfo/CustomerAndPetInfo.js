import React, { useState, useEffect } from "react";
import "./CustomerAndPetInfo.css";

export default function CustomerAndPetInfo(props) {
    // Props.url has a "/" at the end, need to remove it before using it in next step
    const processed_url = props.url.slice(0, -1);

    // If an account has pet_photo, then display it; if not, display "no photo provided"
    let pet_photo = <span>no photo provided</span>;
    // Disabled photo display to fix fetch issue: 500 error - SQLite too many variables
    // if (props.content.pet_photo !== null) {
    //     pet_photo = (
    //         <img
    //             className={"eachCustomerAndPetInfo-photo"}
    //             src={processed_url + props.content.pet_photo.url}
    //             alt="customer's pet"
    //         />
    //     );
    // } else {
    //     pet_photo = <span>no photo provided</span>;
    // }

    // Define a function to format phone numbers into (xxx) xxx - xxxx
    const formatToPhone = (phoneNumber) => {
        const input = phoneNumber.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
        const areaCode = input.substring(0, 3);
        const middle = input.substring(3, 6);
        const last = input.substring(6, 10);

        if (input.length > 6) {
            phoneNumber = `(${areaCode}) ${middle} - ${last}`;
        } else if (input.length > 3) {
            phoneNumber = `(${areaCode}) ${middle}`;
        } else if (input.length > 0) {
            phoneNumber = `(${areaCode}`;
        }

        return phoneNumber;
    };

    // Define state
    const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
    const [formattedAlternatePhoneNumber, setFormattedAlternatePhoneNumber] = useState("");

    // Update formattedPhoneNumber when props.content.customer_phone changes
    useEffect(() => {
        if (props.content.customer_phone) {
            setFormattedPhoneNumber(formatToPhone(props.content.customer_phone));
        }
        if (props.content.customer_alternate_phone) {
            setFormattedAlternatePhoneNumber(formatToPhone(props.content.customer_alternate_phone));
        }
    }, [props.content.customer_phone]);

    // Conditional rendering based on props.scenario
    if (props.scenario === "AddAppointment") {
        return (
            <tr className="eachCustomerAndPetInfo">
                <td>{`id: ${props.index + 1}`}</td>
                <td>
                    {props.content.customer_first_name + " " + props.content.customer_last_name}
                </td>
                <td>{props.content.customer_phone ? formattedPhoneNumber : "no info provided"}</td>
                <td>
                    {props.content.customer_phone
                        ? formattedAlternatePhoneNumber
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
                    {props.content.customer_first_name + " " + props.content.customer_last_name}
                </td>
                <td>{pet_photo}</td>
                <td>{props.content.customer_phone ? formattedPhoneNumber : "no info provided"}</td>
                <td>
                    {props.content.customer_alternate_phone
                        ? formattedAlternatePhoneNumber
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
