import React from "react";
import "./EmployeeInfo.css";

export default function EmployeeInfo(props) {
    if (props.scenario === "AddAppointment") {
        return (
            <tr className="eachEmployeeInfo">
                <td>{`id: ${props.index + 1}`}</td>
                <td>
                    {props.content.employee_first_name +
                        " " +
                        props.content.employee_last_name}
                </td>
                <td>
                    {props.content.employee_phone
                        ? props.content.employee_phone
                        : "no info provided"}
                </td>
                <td>
                    {props.content.employee_email
                        ? props.content.employee_email
                        : "no info provided"}
                </td>
                <td>
                    <button
                        onClick={() => {
                            props.setVisibilityProvider(false);
                            props.setProviderId(props.content.id);
                        }}
                    >
                        Choose
                    </button>
                </td>
            </tr>
        );
    } else {
        return (
            <tr className="eachEmployeeInfo">
                <td>{`id: ${props.index + 1}`}</td>
                <td>
                    {props.content.employee_first_name +
                        " " +
                        props.content.employee_last_name}
                </td>
                <td>
                    {props.content.employee_phone
                        ? props.content.employee_phone
                        : "no info provided"}
                </td>
                <td>
                    {props.content.employee_email
                        ? props.content.employee_email
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
