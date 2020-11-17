import React, { useState } from "react";
import "./CreateEmployeeAccount.css";

export default function CreateEmployeeAccount(props) {
    // Define states
    const [employee_first_name, setEmployeeFirstName] = useState("");
    const [employee_last_name, setEmployeeLastName] = useState("");
    const [employee_phone, setEmployeePhone] = useState("");
    const [employee_email, setEmployeeEmail] = useState("");
    const [employee_title, setEmployeeTitle] = useState("groomer");
    const [employee_birthday, setEmployeeBirthday] = useState("");
    const [employee_note, setEmployeeNote] = useState("");

    // Define onChange event handler
    const changeFirstName = (event) => setEmployeeFirstName(event.target.value);
    const changeLastName = (event) => setEmployeeLastName(event.target.value);
    const changePhone = (event) => setEmployeePhone(event.target.value);
    const changeEmail = (event) => setEmployeeEmail(event.target.value);
    const changeTitle = (event) => {
        setEmployeeTitle(event.target.value);
    };
    const changeBirthday = (event) => setEmployeeBirthday(event.target.value);
    const changeNote = (event) => setEmployeeNote(event.target.value);

    // Define a function to update account information
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${props.url}employees`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                employee_first_name: `${employee_first_name}`,
                employee_last_name: `${employee_last_name}`,
                employee_phone: `${employee_phone}`,
                employee_email: `${employee_email}`,
                employee_title: `${employee_title}`,
                employee_birthday: `${employee_birthday}`,
                employee_note: `${employee_note}`,
            }),
        });
        const content = await response.json();
        console.log(response);
        // Tell user the data above is successfully submitted
        if (response.status === 200) {
            alert("Employee Account Created!");
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    return (
        <div className="create_account">
            <h1>Create New Employee Account</h1>
            <form className="employee_registrition" onSubmit={handleSubmit}>
                <label for="employee_first_name"> First Name:</label>
                <input
                    type="text"
                    name="employee_first_name"
                    id="employee_first_name"
                    value={employee_first_name}
                    onChange={changeFirstName}
                />
                <label for="employee_last_name"> Last Name:</label>
                <input
                    type="text"
                    name="employee_last_name"
                    id="employee_last_name"
                    value={employee_last_name}
                    onChange={changeLastName}
                />
                <label for="employee_phone"> Phone Number:</label>
                <input
                    type="text"
                    name="employee_phone"
                    id="employee_phone"
                    value={employee_phone}
                    onChange={changePhone}
                />
                <label for="employee_email"> Email:</label>
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
                <label for="employee_note">Note (optional):</label>
                <textarea
                    type="text"
                    name="employee_note"
                    id="employee_note"
                    value={employee_note}
                    onChange={changeNote}
                />
                <input type="submit" id="employee_submit" />
            </form>
        </div>
    );
}
