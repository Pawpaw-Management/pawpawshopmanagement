import React, { useState, useEffect } from "react";
import "./SelectEmployees.css";
import "../../../CommonElements.css";

export default function SelectEmployeeIDs(props) {
    // Define states
    const [employees, setEmployees] = useState();
    const [tips, setTips] = useState();
    const [employeeID1, setEmployeeID1] = useState("Nobody");
    const [employeeID2, setEmployeeID2] = useState("Nobody");
    const [employeeID3, setEmployeeID3] = useState("Nobody");
    const [employeeID4, setEmployeeID4] = useState("Nobody");
    const [employeePayPercentage1, setEmployeePayPercentage1] = useState(0);
    const [employeePayPercentage2, setEmployeePayPercentage2] = useState(0);
    const [employeePayPercentage3, setEmployeePayPercentage3] = useState(0);
    const [employeePayPercentage4, setEmployeePayPercentage4] = useState(0);

    // Define non-state variables
    var purchase_date = new Date();
    var dd = String(purchase_date.getDate()).padStart(2, "0");
    var mm = String(purchase_date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = purchase_date.getFullYear();
    purchase_date = mm + "/" + dd + "/" + yyyy;

    var serviceTotalAfterDiscount =
        props.serviceTotalAfterDiscount === undefined
            ? 0
            : props.serviceTotalAfterDiscount * 0.5; // Employees can share 50% of the total service income
    var tips90percent = tips ? Number(tips) * 0.9 : 0;
    var employeeTotal1 = Number(
        (
            ((Number(tips90percent) + Number(serviceTotalAfterDiscount)) *
                Number(employeePayPercentage1)) /
            100
        ).toFixed(2)
    );
    var employeeTotal2 = Number(
        (
            ((Number(tips90percent) + Number(serviceTotalAfterDiscount)) *
                Number(employeePayPercentage2)) /
            100
        ).toFixed(2)
    );
    var employeeTotal3 = Number(
        (
            ((Number(tips90percent) + Number(serviceTotalAfterDiscount)) *
                Number(employeePayPercentage3)) /
            100
        ).toFixed(2)
    );
    var employeeTotal4 = Number(
        (
            ((Number(tips90percent) + Number(serviceTotalAfterDiscount)) *
                Number(employeePayPercentage4)) /
            100
        ).toFixed(2)
    );

    var storeIncome = (Number(props.balanceDue) + Number(tips)).toFixed(
        2
    );
    console.log(storeIncome);

    // console.log("+++++++++++++++++");
    // console.log("props.serviceTotalAfterDiscount");
    // console.log(props.serviceTotalAfterDiscount);
    // console.log("tips90percent");
    // console.log(tips90percent);
    // console.log("serviceTotalAfterDiscount");
    // console.log(serviceTotalAfterDiscount);
    // console.log("employeeTotal1");
    // console.log(employeeTotal1);

    // Define onChange handlers
    const changeTips = (event) => setTips(event.target.value);
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

    // Post data to employee-pending-payments and employee-payment-records
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
            tips_total_share: `${tips90percent}`,
            service_income_total_share: `${serviceTotalAfterDiscount}`,
            employee_pending_pay1: `${employeeTotal1}`,
            employee_pending_pay2: `${employeeTotal2}`,
            employee_pending_pay3: `${employeeTotal3}`,
            employee_pending_pay4: `${employeeTotal4}`,
            purchase_date: `${purchase_date}`,
        })
    );
    var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response1 = await fetch(
            `${props.url}employee-pending-payments`,
            requestOptions
        );
        const response2 = await fetch(
            `${props.url}employee-payment-records`,
            requestOptions
        );
        if (response1.status === 200 && response2.status === 200) {
            alert(`Employees payment information updated successfully!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    // Post income data to income-history
    var formdata2 = new FormData();
    formdata2.append(
        "data",
        JSON.stringify({
            date: `${purchase_date}`,
            income: `${storeIncome}`,
            description: `service income: ${props.serviceTotalAfterDiscount}, product income: `
        })
    );
    var requestOptions2 = {
        method: "POST",
        body: formdata2,
        redirect: "follow",
    };
    const handlePostIncomeData = async (event) => {
        event.preventDefault();
        const response = await fetch(
            `${props.url}income-histories`,
            requestOptions2
        );
        if (response.status === 200) {
            alert(`Income Data Successfully Updated!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    return (
        <div id="employee-payment-distribution" className="window">
            <button
                className="button_esc"
                onClick={() => props.setVisibilityEmployees(false)}
            >
                X
            </button>
            <div className="label-and-input">
                <span id="shareable-service-income">
                    Shareable service income: ${`${serviceTotalAfterDiscount}`}
                </span>
                <label htmlFor="tips">Tips:</label>
                <input
                    type="number"
                    name="tips"
                    value={tips}
                    onChange={changeTips}
                />
            </div>
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
                                <option
                                    value={
                                        content.employee_first_name +
                                        content.employee_last_name
                                    }
                                    key={index}
                                >
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
                <span className="employee-pay-total">
                    Total: ${employeeTotal1}
                </span>
            </div>
            <div className="label-and-select">
                <label htmlFor="employeeID2">Select Groomer #2</label>
                <select
                    name="employeeID2"
                    value={employeeID2}
                    onChange={changeEmployeeID2}
                >
                    <option value="Nobody">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option
                                    value={
                                        content.employee_first_name +
                                        content.employee_last_name
                                    }
                                    key={index}
                                >
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
                <span className="employee-pay-total">
                    Total: ${employeeTotal2}
                </span>
            </div>
            <div className="label-and-select">
                <label htmlFor="employeeID3">Select Groomer #3</label>
                <select
                    name="employeeID3"
                    value={employeeID3}
                    onChange={changeEmployeeID3}
                >
                    <option value="Nobody">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option
                                    value={
                                        content.employee_first_name +
                                        content.employee_last_name
                                    }
                                    key={index}
                                >
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
                <span className="employee-pay-total">
                    Total: ${employeeTotal3}
                </span>
            </div>
            <div className="label-and-select">
                <label htmlFor="employeeID4">Select Groomer #4</label>
                <select
                    name="employeeID4"
                    value={employeeID4}
                    onChange={changeEmployeeID4}
                >
                    <option value="Nobody">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option
                                    value={
                                        content.employee_first_name +
                                        content.employee_last_name
                                    }
                                    key={index}
                                >
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
                <span className="employee-pay-total">
                    Total: ${employeeTotal4}
                </span>
            </div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                }}
            >
                Confirm
            </button>
        </div>
    );
}
