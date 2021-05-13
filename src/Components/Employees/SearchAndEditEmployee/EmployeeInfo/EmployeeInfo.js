import React, { useState } from "react";
import "./EmployeeInfo.css";

export default function EmployeeInfo(props) {
    // Define state
    // const [employee_is_chosen, setEmployeeIsChosen] = useState(false);
    // console.log("===========");
    // console.log(employee_is_chosen);
    // console.log(props.content.id)
    
    // // Define event handler
    // const changeEmployeeIsChosen = (event) =>
    //     setEmployeeIsChosen(event.target.checked);

    // // Varify if the checkbox is checked.
    // if (employee_is_chosen) {
    //     props.arrayAddItem(props.content.id)
    // } else {
    //     props.arrayDeleteItem(props.content.id)
    // }

    if (props.scenario === "AddAppointment") {
        return (
            <tr className="eachEmployeeInfo">
                <td>{`id: ${props.content.id}`}</td>
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
                {/* <td>
                    <input
                        type="checkbox"
                        value={employee_is_chosen}
                        onChange={changeEmployeeIsChosen}
                    ></input>
                </td> */}
            </tr>
        );
    } else {
        return (
            <tr className="eachEmployeeInfo">
                <td>{`id: ${props.content.id}`}</td>
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
