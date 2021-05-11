import React, { useState, useEffect } from "react";
import EmployeeInfo from "./EmployeeInfo/EmployeeInfo";
import InfoEditor from "./InfoEditor/InfoEditor";
import "./SearchAndEditEmployee.css";
import "../../CommonElements.css";

const SearchAndEditEmployee = (props) => {
    // Define useState for <Refresh> to update state here
    const [employees, setEmployees] = useState([]);

    // Define useState for <InfoEditor> to popup and disappear
    const [visibility, setVisibility] = useState("hidden");

    // Define useState for <InfoEditor> to edit the account clicked by user
    const [accountId, setAccountId] = useState(9);

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
    }, [visibility]);

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
                        props.setVisibilityProvider(false);
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
                                        setVisibilityProvider={
                                            props.setVisibilityProvider
                                        }
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
                <h1>All Employee Accounts</h1>
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
                <InfoEditor
                    visibility={visibility}
                    accountId={accountId}
                    url={props.url}
                    employees={employees}
                    setVisibility={setVisibility}
                />
            </section>
        );
    }
};

export default SearchAndEditEmployee;
