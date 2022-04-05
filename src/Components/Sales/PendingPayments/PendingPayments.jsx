import React, { useState, useEffect } from "react";
import PendingPaymentInfo from "./PendingPaymentInfo/PendingPaymentInfo";
import PendingPaymentEditor from "./PendingPaymentEditor/PendingPaymentEditor";
import "./PendingPayments.css";
import "../../CommonElements.css";

export default function PendingPayments(props) {
    // Define states
    const [employee_pending_payments, setEmployeePendingPayments] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [shouldRenderPendingPaymentEditor, setShouldRenderPendingPaymentEditor] = useState(false);
    const [refresh, setRefresh] = useState(true); // This is a state for the refresh-button to change state, and therefore triger useEffect
    const [pendingPaymentId, setPendingPaymentId] = useState(0);

    console.log("=====================");
    console.log("employee_pending_payments: ", employee_pending_payments);

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

    // When user want to pay employees, do the following:
    // 1. For each employee id, find all pending payments that contains this employee id
    var employee_payment_reports = [];
    if (employees !== [] && employees) {
        for (let i = 0; i < employees.length; i++) {
            // This employee's full name
            let employee_full_name = employees[i].employee_first_name + employees[i].employee_last_name;
            // All the pending payments which contain this employee's full name
            let pending_payment_info_for_this_employee = employee_pending_payments.filter(
                (pending_payment) =>
                    pending_payment.employeeID1 === employee_full_name ||
                    pending_payment.employeeID2 === employee_full_name ||
                    pending_payment.employeeID3 === employee_full_name ||
                    pending_payment.employeeID4 === employee_full_name
            );
            // Add the data above to employee_payment_reports
            employee_payment_reports.push({
                employee_full_name: employee_full_name,
                pending_payment_info_for_this_employee: pending_payment_info_for_this_employee,
            });
        }
    }
    console.log("employee_payment_reports: ", employee_payment_reports);
    // 2. Sum all pending payments, save it as "employee_name_payment_total"
    // 2a. Define a function to find object key by value
    const getKeyByValue = (object, value) => {
        return Object.keys(object).find((key) => object[key] === value);
    };
    // 2b. Find which employeeID is the id of interest
    // if (employee_payment_reports !== [] && employee_payment_reports !== undefined) {
    //     for (let i = 0; i < employee_payment_reports.length; i++) {
    //         // find which employee is the employee we want to calculate total payment for
    //         console.log(employee_payment_reports[i].pending_payment_info_for_this_employee);
    //         if (employee_payment_reports[i].pending_payment_info_for_this_employee[0]) {
    //             for (let i = 0; i < employee_payment_reports[i].pending_payment_info_for_this_employee.length; i++) {
    //                 let employeeID_of_interest = getKeyByValue(
    //                     employee_payment_reports.pending_payment_info_for_this_employee[i],
    //                     employee_payment_reports.employee_full_name
    //                 );
    //                 console.log("employeeID_of_interest: ", employeeID_of_interest);
    //             }
    //         }
    //         let employee_name_of_interest = employee_payment_reports[i].employee_full_name;

    //         // employee_payment_reports[i].total_pending_pay =
    //     }
    // }
    // 3. Post all employee_name_payment_total to each employee account
    // 4. Loop delete all entries
    // 4a. find the minimum id
    var minId = employee_pending_payments[0] ? employee_pending_payments[0].id : undefined;
    // console.log(minId);
    // 4b. find the maximum id
    var maxId = employee_pending_payments[0] ? employee_pending_payments[employee_pending_payments.length - 1].id : undefined;
    // console.log("maxId: " + maxId);
    // console.log(maxId + 1);
    // 4c. loop through the array, delete all items with id from minId to maxId
    const deleteMultiple = async () => {
        if (props.url) {
            for (let i = minId; i < maxId + 1; i++) {
                const response = await fetch(`${props.url}employee-pending-payments/${i}`, {
                    method: "DELETE",
                });
                const content = await response.json();
                console.log(content);
            }
        }
    };

    // If shouldRenderPendingPaymentEditor, then render <PendingPaymentEditor />
    var pendingPaymentEditor = shouldRenderPendingPaymentEditor ? (
        <PendingPaymentEditor
            url={props.url}
            pendingPaymentId={pendingPaymentId}
            employee_pending_payments={employee_pending_payments}
            setShouldRenderPendingPaymentEditor={setShouldRenderPendingPaymentEditor}
        />
    ) : null;

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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
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
                            <th>Services</th>
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
                                        setShouldRenderPendingPaymentEditor={setShouldRenderPendingPaymentEditor}
                                        setPendingPaymentId={setPendingPaymentId}
                                    />
                                );
                            })}
                    </tbody>
                </table>
            </div>
            {/* <button
                onClick={(e) => {
                    e.preventDefault();
                    deleteMultiple();
                }}
            >
                Confirm and Pay Employees
            </button> */}
            {pendingPaymentEditor}
        </section>
    );
}
