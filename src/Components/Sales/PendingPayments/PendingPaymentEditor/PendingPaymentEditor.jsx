import React, { useState, useEffect } from "react";
import "./PendingPaymentEditor.css";
import "../../../CommonElements.css";

export default function PendingPaymentEditor(props) {
    // Define states
    const [employees, setEmployees] = useState();
    const [tipsTotalShare, setTipsTotalShare] = useState();
    const [serviceIncomeTotalShare, setServiceIncomeTotalShare] = useState();
    const [employeeID1, setEmployeeID1] = useState("");
    const [employeeID2, setEmployeeID2] = useState("");
    const [employeeID3, setEmployeeID3] = useState("");
    const [employeeID4, setEmployeeID4] = useState("");
    const [employeePayPercentage1, setEmployeePayPercentage1] = useState(0);
    const [employeePayPercentage2, setEmployeePayPercentage2] = useState(0);
    const [employeePayPercentage3, setEmployeePayPercentage3] = useState(0);
    const [employeePayPercentage4, setEmployeePayPercentage4] = useState(0);
    const [serviceDescription, setServiceDescription] = useState("");
    const [purchase_date, setPurchaseDate] = useState();

    // Define non-state variables
    var employeeTotal1 = Number(
        (((Number(tipsTotalShare) + Number(serviceIncomeTotalShare)) * Number(employeePayPercentage1)) / 100).toFixed(2)
    );
    var employeeTotal2 = Number(
        (((Number(tipsTotalShare) + Number(serviceIncomeTotalShare)) * Number(employeePayPercentage2)) / 100).toFixed(2)
    );
    var employeeTotal3 = Number(
        (((Number(tipsTotalShare) + Number(serviceIncomeTotalShare)) * Number(employeePayPercentage3)) / 100).toFixed(2)
    );
    var employeeTotal4 = Number(
        (((Number(tipsTotalShare) + Number(serviceIncomeTotalShare)) * Number(employeePayPercentage4)) / 100).toFixed(2)
    );

    // Define onChange handlers
    const changeTipsTotalShare = (event) => setTipsTotalShare(event.target.value);
    const changeEmployeeID1 = (event) => setEmployeeID1(event.target.value);
    const changeEmployeeID2 = (event) => setEmployeeID2(event.target.value);
    const changeEmployeeID3 = (event) => setEmployeeID3(event.target.value);
    const changeEmployeeID4 = (event) => setEmployeeID4(event.target.value);
    const changeEmployeePayPercentage1 = (event) => setEmployeePayPercentage1(event.target.value);
    const changeEmployeePayPercentage2 = (event) => setEmployeePayPercentage2(event.target.value);
    const changeEmployeePayPercentage3 = (event) => setEmployeePayPercentage3(event.target.value);
    const changeEmployeePayPercentage4 = (event) => setEmployeePayPercentage4(event.target.value);
    const changeServiceDescription = (event) => setServiceDescription(event.target.value);

    // When component mounts, fetch data and assign to states
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
    console.log("--------------------------");

    // When component mounts, set input values to the current pending payments information
    // 1. Define the current pending payment
    var current_payment =
        props.employee_pending_payments &&
        props.employee_pending_payments.find((payment) => payment.id === props.pendingPaymentId);
    // 2. Assign data from current_payment to states when pendingPaymentId changes
    useEffect(() => {
        if (current_payment) {
            setEmployeeID1(current_payment.employeeID1);
            setEmployeeID2(current_payment.employeeID2);
            setEmployeeID3(current_payment.employeeID3);
            setEmployeeID4(current_payment.employeeID4);
            setEmployeePayPercentage1(current_payment.employeePayPercentage1);
            setEmployeePayPercentage2(current_payment.employeePayPercentage2);
            setEmployeePayPercentage3(current_payment.employeePayPercentage3);
            setEmployeePayPercentage4(current_payment.employeePayPercentage4);
            setPurchaseDate(current_payment.purchase_date);
            setServiceDescription(current_payment.service_description);
            setTipsTotalShare(current_payment.tips_total_share);
            setServiceIncomeTotalShare(current_payment.service_income_total_share);
        }
    }, [props.pendingPaymentId]);

    // Put data on DB
    var formdata = new FormData();
    formdata.append(
        "data",
        JSON.stringify({
            employeeID1: `${employeeID1}`,
            employeeID2: `${employeeID2}`,
            employeeID3: `${employeeID3}`,
            employeeID4: `${employeeID4}`,
            employeePayPercentage1: `${employeePayPercentage1}`,
            employeePayPercentage2: `${employeePayPercentage2}`,
            employeePayPercentage3: `${employeePayPercentage3}`,
            employeePayPercentage4: `${employeePayPercentage4}`,
            tips_total_share: `${tipsTotalShare}`,
            service_income_total_share: `${serviceIncomeTotalShare}`,
            employee_pending_pay1: `${employeeTotal1}`,
            employee_pending_pay2: `${employeeTotal2}`,
            employee_pending_pay3: `${employeeTotal3}`,
            employee_pending_pay4: `${employeeTotal4}`,
            service_description: `${serviceDescription}`,
        })
    );
    var requestOptions = {
        method: "PUT",
        body: formdata,
        redirect: "follow",
    };
    const handleSubmit = async () => {
        const response = await fetch(`${props.url}employee-pending-payments/${props.pendingPaymentId}`, requestOptions);
        if (response.status === 200) {
            alert(`Employees payment information updated successfully!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    return (
        <div className="window" id="pending-payment-editor">
            <button className="button_esc" onClick={() => props.setShouldRenderPendingPaymentEditor(false)}>
                X
            </button>
            <div className="label-and-input">
                <span id="shareable-service-income">Shareable service income: ${`${serviceIncomeTotalShare}`}</span>
                <label htmlFor="tips">Tips (please enter the amount for employees to share):</label>
                <input type="number" name="tips" value={tipsTotalShare} onChange={changeTipsTotalShare} />
            </div>
            {/* Employee #1 */}
            <div className="label-and-select">
                <label htmlFor="employeeID1">Groomer #1:</label>
                <select name="employeeID1" value={employeeID1} onChange={changeEmployeeID1}>
                    <option value={employeeID1}>{employeeID1}</option>
                    <option value="Nobody">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option value={content.employee_first_name + content.employee_last_name} key={index}>
                                    {content.employee_first_name + content.employee_last_name}
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
                <span className="employee-pay-total">Total: ${employeeTotal1}</span>
            </div>
            {/* Employee #2 */}
            <div className="label-and-select">
                <label htmlFor="employeeID2">Groomer #2:</label>
                <select name="employeeID2" value={employeeID2} onChange={changeEmployeeID2}>
                    <option value={employeeID2}>{employeeID2}</option>
                    <option value="Nobody">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option value={content.employee_first_name + content.employee_last_name} key={index}>
                                    {content.employee_first_name + content.employee_last_name}
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
                <span className="employee-pay-total">Total: ${employeeTotal2}</span>
            </div>
            {/* Employee #3 */}
            <div className="label-and-select">
                <label htmlFor="employeeID3">Groomer #3:</label>
                <select name="employeeID3" value={employeeID3} onChange={changeEmployeeID3}>
                    <option value={employeeID3}>{employeeID3}</option>
                    <option value="Nobody">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option value={content.employee_first_name + content.employee_last_name} key={index}>
                                    {content.employee_first_name + content.employee_last_name}
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
                <span className="employee-pay-total">Total: ${employeeTotal3}</span>
            </div>
            {/* Employee #4 */}
            <div className="label-and-select">
                <label htmlFor="employeeID4">Groomer #4:</label>
                <select name="employeeID4" value={employeeID4} onChange={changeEmployeeID4}>
                    <option value={employeeID4}>{employeeID4}</option>
                    <option value="Nobody">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option value={content.employee_first_name + content.employee_last_name} key={index}>
                                    {content.employee_first_name + content.employee_last_name}
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
                <span className="employee-pay-total">Total: ${employeeTotal4}</span>
            </div>
            <div className="label-and-input">
                <label htmlFor="service-description">Services</label>
                <textarea
                    name="service-description"
                    id="service-description-textarea"
                    cols="60"
                    rows="18"
                    value={serviceDescription}
                    onChange={changeServiceDescription}
                ></textarea>
            </div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                Confirm
            </button>
        </div>
    );
}
