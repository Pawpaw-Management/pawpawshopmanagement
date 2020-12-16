import React from "react";
import "./CustomerAndPetInfo.css";

export default function CustomerAndPetInfo(props) {
    if (props.scenario == "AddAppointment") {
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
                            props.setVisibilityCustomer("hidden");
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
                            props.setVisibility("visible");
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
