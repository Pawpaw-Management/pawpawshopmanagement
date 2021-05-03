import React, { useState, useEffect } from "react";
import "./InfoEditor.css"
import "../../../CommonElements.css"

export default function InfoEditor(props) {
    // Define states
    const [employee_first_name, setEmployeeFirstName] = useState("");
    const [employee_last_name, setEmployeeLastName] = useState("");
    const [employee_phone, setEmployeePhone] = useState("");
    const [employee_email, setEmployeeEmail] = useState("");
    const [employee_note, setEmployeeNote] = useState("");
    const [employee_title, setEmployeeTitle] = useState("");
    const [employee_hourly_wage, setEmployeeWage] = useState("");
    const [employee_birthday, setEmployeeBirthday] = useState("");

    // Define onChange event handler
    const changeFirstName = (event) => setEmployeeFirstName(event.target.value);
    const changeLastName = (event) => setEmployeeLastName(event.target.value);
    const changePhone = (event) => setEmployeePhone(event.target.value);
    const changeEmail = (event) => setEmployeeEmail(event.target.value);
    const changeNote = (event) => setEmployeeNote(event.target.value);
    const changeTitle = (event) => setEmployeeTitle(event.target.value);
    const changeHourlyWage = (event) =>
        setEmployeeWage(event.target.value);
    const changeBirthday = (event) => setEmployeeBirthday(event.target.value);

    // When <InfoEditor> becomes visible, set input values to the current account information
    // 1. Define the current account
    const current_account =
        props.employees.employees &&
        props.employees.employees.find(
            (account) => account.id === props.accountId
        );

    // 2. Assign data from current_account to states when accountId changes
    useEffect(() => {
        if (current_account) {
            setEmployeeFirstName(current_account.employee_first_name);
            setEmployeeLastName(current_account.employee_last_name);
            setEmployeePhone(current_account.employee_phone);
            setEmployeeEmail(current_account.employee_email);
            setEmployeeNote(current_account.employee_note);
            setEmployeeTitle(current_account.employee_title);
            setEmployeeWage(current_account.employee_hourly_wage);
            setEmployeeBirthday(current_account.employee_birthday);
        }
    }, [props.accountId]);

    // Define a function to update account information
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (props.url && props.accountId) {
            const response = await fetch(
                `${props.url}employees/${props.accountId}`,
                {
                    method: "PUT",
                    headers: {
                        accept: "application/json",
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        employee_first_name: `${employee_first_name}`,
                        employee_last_name: `${employee_last_name}`,
                        employee_phone: `${employee_phone}`,
                        employee_email: `${employee_email}`,
                        employee_note: `${employee_note}`,
                        employee_title: `${employee_title}`,
                        employee_hourly_wage: `${employee_hourly_wage}`,
                        employee_birthday: `${employee_birthday}`,
                    }),
                }
            );
            const content = await response.json();
            console.log(response);
            // Tell user the data above is successfully submitted
            if (response.status === 200) {
                alert("Account Information Updated!");
            } else {
                alert("Error! Please make sure database is running properly.")
            }
        }
    };

    return (
        <div className="infoEditor" style={{ visibility: props.visibility }}>
            <button
                className="button_esc"
                onClick={() => props.setVisibility("hidden")}
            >
                X
            </button>
            <form
                className="infoEditor_employee_registrition"
                onSubmit={handleSubmit}
            >
                <label for="employee_first_name">First Name:</label>
                <input
                    type="text"
                    name="employee_first_name"
                    id="employee_first_name"
                    value={employee_first_name}
                    onChange={changeFirstName}
                />
                <label for="employee_last_name">Last Name:</label>
                <input
                    type="text"
                    name="employee_last_name"
                    id="employee_last_name"
                    value={employee_last_name}
                    onChange={changeLastName}
                />
                <label for="employee_phone">Phone Number:</label>
                <input
                    type="text"
                    name="employee_phone"
                    id="employee_phone"
                    value={employee_phone}
                    onChange={changePhone}
                />
                <label for="employee_email">Email:</label>
                <input
                    type="email"
                    name="employee_email"
                    id="infoEditor_employee_email"
                    value={employee_email}
                    onChange={changeEmail}
                />
                <label for="employee_title">Job Title:</label>
                <select
                    name="employee_title"
                    onChange={changeTitle}
                    value={employee_title}
                >
                    <option value="frontdesk">Front Desk</option>
                    <option value="groomer">Groomer</option>
                </select>
                <label for="employee_birthday">Birthday:</label>
                <input
                    type="date"
                    name="employee_birthday"
                    id="employee_birthday"
                    value={employee_birthday}
                    onChange={changeBirthday}
                />
                <label for="employee_hourly_wage">Hourly Wage:</label>
                <input
                    type="text"
                    name="employee_hourly_wage"
                    id="employee_hourly_wage"
                    value={employee_hourly_wage}
                    onChange={changeHourlyWage}
                />
                <label for="employee_note">Note:</label>
                <textarea
                    type="text"
                    name="employee_note"
                    id="infoEditor_employee_note"
                    value={employee_note}
                    onChange={changeNote}
                />
                <input type="submit" id="infoEditor_submit" />
            </form>
        </div>
    );
}
