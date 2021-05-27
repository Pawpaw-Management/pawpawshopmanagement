import React, { useState, useEffect } from "react";
import PendingPaymentInfo from "./PendingPaymentInfo/PendingPaymentInfo";
import "./PendingPayments.css";
import "../../CommonElements.css";

export default function PendingPayments(props) {
    // Define states
    const [employee_pending_payments, setEmployeePendingPayments] = useState(
        []
    );
    const [employees, setEmployees] = useState([]);
    const [visibilityPendingPaymentInfo, setVisibilityPendingPaymentInfo] =
        useState(false);
    const [refresh, setRefresh] = useState(true); // This is a state for the refresh-button to change state, and therefore triger useEffect
    const [pendingPaymentId, setPendingPaymentId] = useState(0);

    // Define non-state variables
    var pending_payment_for_each_employee = {};

    // Fetch data when component mount and user clicks refresh-button
    useEffect(() => {
        fetch(`${props.url}employee-pending-payments`)
            .then((response) => response.json())
            .then((response) => {
                setEmployeePendingPayments(response);
            })
            .catch((error) => {
                console.log(error);
            });

        fetch(`${props.url}employees`)
            .then((response) => response.json())
            .then((response) => {
                setEmployees(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [refresh]);
    console.log(employees)

    // When user want to pay employees, do the following:
    // 1. For each employee id, find all pending payments that contains this id
    // employees.forEach((employee) => {
    //     employee_pending_payments.filter(pending_payment => {
    //         pending_payment.employeeId ===
    //             employee.employee_first_name + employee.employee_last_name;
    //     });
    // });
    // 2. Sum all pending payments, save it as "employee_name_payment_total"
    // 3. Post all employee_name_payment_total to each employee account
    // 4. Loop delete all entries
    // 4a. find the minimum id
    var minId = employee_pending_payments[0]
        ? employee_pending_payments[0].id
        : undefined;
    console.log(minId);
    // 4b. find the maximum id
    var maxId = employee_pending_payments[0]
        ? employee_pending_payments[employee_pending_payments.length - 1].id
        : undefined;
    console.log("maxId: " + maxId);
    console.log(maxId + 1);
    // 4c. loop through the array, delete all items with id from minId to maxId
    const deleteMultiple = async () => {
        if (props.url) {
            for (let i = minId; i < maxId + 1; i++) {
                const response = await fetch(
                    `${props.url}employee-pending-payments/${i}`,
                    {
                        method: "DELETE",
                    }
                );
                const content = await response.json();
                console.log(content);
            }
        }
    };

    return (
        <section id="pending-payments">
            <div className="title-and-refresh-button">
                <h1>All Pending Payments</h1>
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
            <div id="table__pending-payments">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Groomer #1</th>
                            <th>Groomer #2</th>
                            <th>Groomer #3</th>
                            <th>Groomer #4</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee_pending_payments &&
                            employee_pending_payments.map((content, index) => {
                                return (
                                    <PendingPaymentInfo
                                        content={content}
                                        key={index}
                                        index={index}
                                        url={props.url}
                                        setVisibilityPendingPaymentInfo={
                                            setVisibilityPendingPaymentInfo
                                        }
                                        setPendingPaymentId={
                                            setPendingPaymentId
                                        }
                                    />
                                );
                            })}
                    </tbody>
                </table>
            </div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    deleteMultiple();
                }}
            >
                Confirm and Pay Employees
            </button>
        </section>
    );
}
