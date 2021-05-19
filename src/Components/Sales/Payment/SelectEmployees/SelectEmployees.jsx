import React, { useState, useEffect } from "react";
import "./SelectEmployees.css";
import "../../../CommonElements.css";

export default function SelectEmployeeIDs(props) {
    // Define states
    const [employees, setEmployees] = useState();
    const [employeeID1, setEmployeeID1] = useState(0);
    const [employeeID2, setEmployeeID2] = useState(0);
    const [employeeID3, setEmployeeID3] = useState(0);
    const [employeeID4, setEmployeeID4] = useState(0);
    const [employeePayPercentage1, setEmployeePayPercentage1] = useState(0);
    const [employeePayPercentage2, setEmployeePayPercentage2] = useState(0);
    const [employeePayPercentage3, setEmployeePayPercentage3] = useState(0);
    const [employeePayPercentage4, setEmployeePayPercentage4] = useState(0);

    // Define onChange handlers
    const changeEmployeeID1 = (event) => setEmployeeID1(event.target.value);
    const changeEmployeeID2 = (event) => setEmployeeID2(event.target.value);
    const changeEmployeeID3 = (event) => setEmployeeID3(event.target.value);
    const changeEmployeeID4 = (event) => setEmployeeID4(event.target.value);
    const changeEmployeePayPercentage1 = (event) =>
        setEmployeePayPercentage1(event.target.value);
    const changeEmployeePayPercentage2 = (event) =>
        setEmployeePayPercentage2(event.target.value);
    const changeEmployeePayPercentage3 = (event) =>
        setEmployeePayPercentage3(event.target.value);
    const changeEmployeePayPercentage4 = (event) =>
        setEmployeePayPercentage4(event.target.value);

    // When component mount, pull data and assign employee names to the <option>s below
    useEffect(() => {
        fetch(`${props.url}employees`)
            .then((response) => response.json())
            .then((response) => {
                setEmployees(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div id="employee-payment-distribution" className="window">
            <button
                className="button_esc"
                onClick={() => props.setVisibilityEmployees(false)}
            >
                X
            </button>
            <div className="label-and-select">
                <label htmlFor="employeeID1">Select Groomer #1</label>
                <select
                    name="employeeID1"
                    value={employeeID1}
                    onChange={changeEmployeeID1}
                >
                    <option value="0">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option value={content.id} key={index}>
                                    {content.employee_first_name +
                                        content.employee_last_name}
                                </option>
                            );
                        })}
                </select>
                <input
                    type="number"
                    name="employeePayPercentage1"
                    value={employeePayPercentage1}
                    onChange={changeEmployeePayPercentage1}
                />
                <label htmlFor="employeePayPercentage1">%</label>
            </div>
            <div className="label-and-select">
                <label htmlFor="employeeID2">Select Groomer #2</label>
                <select
                    name="employeeID2"
                    value={employeeID2}
                    onChange={changeEmployeeID2}
                >
                    <option value="0">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option value={content.id} key={index}>
                                    {content.employee_first_name +
                                        content.employee_last_name}
                                </option>
                            );
                        })}
                </select>
                <input
                    type="number"
                    name="employeePayPercentage2"
                    value={employeePayPercentage2}
                    onChange={changeEmployeePayPercentage2}
                />
                <label htmlFor="employeePayPercentage2">%</label>
            </div>
            <div className="label-and-select">
                <label htmlFor="employeeID3">Select Groomer #3</label>
                <select
                    name="employeeID3"
                    value={employeeID3}
                    onChange={changeEmployeeID3}
                >
                    <option value="0">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option value={content.id} key={index}>
                                    {content.employee_first_name +
                                        content.employee_last_name}
                                </option>
                            );
                        })}
                </select>
                <input
                    type="number"
                    name="employeePayPercentage3"
                    value={employeePayPercentage3}
                    onChange={changeEmployeePayPercentage3}
                />
                <label htmlFor="employeePayPercentage3">%</label>
            </div>
            <div className="label-and-select">
                <label htmlFor="employeeID4">Select Groomer #4</label>
                <select
                    name="employeeID4"
                    value={employeeID4}
                    onChange={changeEmployeeID4}
                >
                    <option value="0">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option value={content.id} key={index}>
                                    {content.employee_first_name +
                                        content.employee_last_name}
                                </option>
                            );
                        })}
                </select>
                <input
                    type="number"
                    name="employeePayPercentage4"
                    value={employeePayPercentage4}
                    onChange={changeEmployeePayPercentage4}
                />
                <label htmlFor="employeePayPercentage4">%</label>
            </div>
        </div>
    );
}
