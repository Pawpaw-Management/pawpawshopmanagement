import React, { useState, useEffect } from "react";
import EmployeeInfo from "./EmployeeInfo/EmployeeInfo";
import InfoEditor from "./InfoEditor/InfoEditor";
import "./SearchAndEditEmployee.css";
import "../../CommonElements.css";

const SearchAndEditEmployee = (props) => {
    // Define useState for <Refresh> to update state here
    const [employees, setEmployees] = useState([]);

    // Define useState for <InfoEditor> to popup and disappear
    const [visibility, setVisibility] = useState(false);

    // Define useState for <InfoEditor> to edit the account clicked by user
    const [accountId, setAccountId] = useState(0);
    console.log("accountId: " + accountId)

    const [refresh, setRefresh] = useState(true);

    // When component mount, fetch latest data through API, and assign to "customers_and_pets"
    useEffect(() => {
        fetch(`${props.url}employees`)
            .then((response) => response.json())
            .then((response) => {
                setEmployees(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [visibility, refresh]);

    // Render elements according to scenario:
    // if "AddAppointment", show "choose" button, cannot edit data
    // if "Customers", show "edit" button, can edit data
    if (props.scenario === "AddAppointment") {
        return (
            <section className="searchAndEditEmployee appointmentWindow">
                <h1>All Employee Accounts</h1>
                <button
                    className="button_esc"
                    onClick={() => {
                        props.setVisibility(props.num);
                    }}
                >
                    X
                </button>
                <table className="employeeList">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Employee Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees &&
                            employees.map((content, index) => {
                                return (
                                    <EmployeeInfo
                                        scenario={props.scenario}
                                        content={content}
                                        key={index}
                                        index={index}
                                        setProviderId={props.setProviderId}
                                        setVisibility={props.setVisibility}
                                        num={props.num}
                                        // arrayToggleCheckbox={props.arrayToggleCheckbox}
                                        // arrayAddItem={props.arrayAddItem}
                                        // arrayDeleteItem={props.arrayDeleteItem}
                                    />
                                );
                            })}
                    </tbody>
                </table>
            </section>
        );
    } else if (props.scenario === "Employees") {
        return (
            <section className="searchAndEditEmployee">
                <div className="title-and-refresh-button">
                    <h1>All Employee Accounts</h1>
                    <button
                        className="refresh-button"
                        onClick={(e) => {
                            e.preventDefault();
                            setRefresh(!refresh);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z" />
                        </svg>
                    </button>
                </div>
                <table className="employeeList">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Employee Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees &&
                            employees.map((content, index) => {
                                return (
                                    <EmployeeInfo
                                        content={content}
                                        key={index}
                                        index={index}
                                        setVisibility={setVisibility}
                                        setAccountId={setAccountId}
                                    />
                                );
                            })}
                    </tbody>
                </table>
                {visibility ? (
                    <InfoEditor
                        visibility={visibility}
                        accountId={accountId}
                        url={props.url}
                        employees={employees}
                        setVisibility={setVisibility}
                    />
                ) : null}
            </section>
        );
    }
};

export default SearchAndEditEmployee;
