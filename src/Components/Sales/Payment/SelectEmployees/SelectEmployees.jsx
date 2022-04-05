import React, { useState, useEffect } from "react";
import "./SelectEmployees.css";
import "../../../CommonElements.css";

export default function SelectEmployeeIDs(props) {
    console.log(props.tips);
    // Define states
    const [employees, setEmployees] = useState();
    // const [tips, setTips] = useState();
    const [employeeID1, setEmployeeID1] = useState("Nobody");
    const [employeeID2, setEmployeeID2] = useState("Nobody");
    const [employeeID3, setEmployeeID3] = useState("Nobody");
    const [employeeID4, setEmployeeID4] = useState("Nobody");
    const [employeePayPercentage1, setEmployeePayPercentage1] = useState(0);
    const [employeePayPercentage2, setEmployeePayPercentage2] = useState(0);
    const [employeePayPercentage3, setEmployeePayPercentage3] = useState(0);
    const [employeePayPercentage4, setEmployeePayPercentage4] = useState(0);
    const [employeeTips1, setEmployeeTips1] = useState(0);
    const [employeeTips2, setEmployeeTips2] = useState(0);
    const [employeeTips3, setEmployeeTips3] = useState(0);
    const [employeeTips4, setEmployeeTips4] = useState(0);
    const [employeeCommission1, setEmployeeCommission1] = useState(0);
    const [employeeCommission2, setEmployeeCommission2] = useState(0);
    const [employeeCommission3, setEmployeeCommission3] = useState(0);
    const [employeeCommission4, setEmployeeCommission4] = useState(0);
    const [shareableServiceIncome, setShareableServiceIncome] = useState(0);

    // Update states as user gives input
    useEffect(() => {
        let componentIsMounted = true;
        if (componentIsMounted) {
        }
        return () => {
            componentIsMounted = false;
        };
    }, [props]);

    useEffect(() => {
        let componentIsMounted = true;
        if (componentIsMounted) {
            props.serviceTotalAfterDiscount === undefined
                ? setShareableServiceIncome(0)
                : setShareableServiceIncome(props.serviceTotalAfterDiscount * 0.5); // Employees can share 50% of the total service income
        }
        return () => {
            componentIsMounted = false;
        };
    }, [props]);

    // Define non-state variables
    var purchase_date = new Date();
    var dd = String(purchase_date.getDate()).padStart(2, "0");
    var mm = String(purchase_date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = purchase_date.getFullYear();
    purchase_date = yyyy + "-" + mm + "-" + dd;

    var tips90percent = props.tips ? Number(props.tips) * 0.9 : 0;
    var employeeTotal1 = Number(
        (
            ((Number(tips90percent) + Number(shareableServiceIncome)) *
                Number(employeePayPercentage1)) /
            100
        ).toFixed(2)
    );
    var employeeTotal2 = Number(
        (
            ((Number(tips90percent) + Number(shareableServiceIncome)) *
                Number(employeePayPercentage2)) /
            100
        ).toFixed(2)
    );
    var employeeTotal3 = Number(
        (
            ((Number(tips90percent) + Number(shareableServiceIncome)) *
                Number(employeePayPercentage3)) /
            100
        ).toFixed(2)
    );
    var employeeTotal4 = Number(
        (
            ((Number(tips90percent) + Number(shareableServiceIncome)) *
                Number(employeePayPercentage4)) /
            100
        ).toFixed(2)
    );

    var storeIncome = (Number(props.balanceDue) + Number(props.tips)).toFixed(2);
    var service1 = props.service1 ? props.service1 : null;
    var service2 = props.service2 ? props.service2 : null;
    var service3 = props.service3 ? props.service3 : null;
    var service4 = props.service4 ? props.service4 : null;
    var service5 = props.service5 ? props.service5 : null;
    var services = service1 + " " + service2 + " " + service3 + " " + service4 + " " + service5;
    var item1 = props.item1 ? props.itemQuantity1 + "*" + props.item1 : null;
    var item2 = props.item2 ? props.itemQuantity2 + "*" + props.item2 : null;
    var item3 = props.item3 ? props.itemQuantity3 + "*" + props.item3 : null;
    var item4 = props.item4 ? props.itemQuantity4 + "*" + props.item4 : null;
    var item5 = props.item5 ? props.itemQuantity5 + "*" + props.item5 : null;
    var items = item1 + " " + item2 + " " + item3 + " " + item4 + " " + item5;

    // Define onChange handlers
    const changeEmployeeID1 = (event) => setEmployeeID1(event.target.value);
    const changeEmployeeID2 = (event) => setEmployeeID2(event.target.value);
    const changeEmployeeID3 = (event) => setEmployeeID3(event.target.value);
    const changeEmployeeID4 = (event) => setEmployeeID4(event.target.value);
    const changeEmployeePayPercentage1 = (event) => setEmployeePayPercentage1(event.target.value);
    const changeEmployeePayPercentage2 = (event) => setEmployeePayPercentage2(event.target.value);
    const changeEmployeePayPercentage3 = (event) => setEmployeePayPercentage3(event.target.value);
    const changeEmployeePayPercentage4 = (event) => setEmployeePayPercentage4(event.target.value);

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
            // Need to add employee name1234, service1234, groomer1234 income(commission + tip),

            employeeID1: `${employeeID1}`,
            employeeID2: `${employeeID2}`,
            employeeID3: `${employeeID3}`,
            employeeID4: `${employeeID4}`,
            employeePayPercentage1: `${employeePayPercentage1}`,
            employeePayPercentage2: `${employeePayPercentage2}`,
            employeePayPercentage3: `${employeePayPercentage3}`,
            employeePayPercentage4: `${employeePayPercentage4}`,
            tips_total_share: `${tips90percent}`,
            service_income_total_share: `${shareableServiceIncome}`,
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
    const handleSubmit = async () => {
        const response1 = await fetch(`${props.url}employee-pending-payments`, requestOptions);
        const response2 = await fetch(`${props.url}employee-payment-records`, requestOptions);
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
            description: `services: ${services} &#013;&#010; service discount: ${props.discount} &#013;&#010; service income: ${props.serviceTotalAfterDiscount} &#013;&#010; products: ${items} &#013;&#010; product income: ${props.itemtotal}`,
        })
    );
    var requestOptions2 = {
        method: "POST",
        body: formdata2,
        redirect: "follow",
    };
    const handlePostIncomeData = async () => {
        const response = await fetch(`${props.url}income-histories`, requestOptions2);
        if (response.status === 200) {
            alert(`Income Data Successfully Updated!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    return (
        <div id="employee-payment-distribution" className="window">
            <button className="button_esc" onClick={() => props.setVisibilityEmployees(false)}>
                X
            </button>
            <div className="label-and-input">
                <span id="shareable-service-income">
                    Shareable service income: ${`${shareableServiceIncome}`}
                </span>
            </div>
            <div className="label-and-select">
                <label htmlFor="employeeID1">Select Groomer #1</label>
                <select name="employeeID1" value={employeeID1} onChange={changeEmployeeID1}>
                    <option value="0">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option
                                    value={content.employee_first_name + content.employee_last_name}
                                    key={index}
                                >
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
            <div className="label-and-select">
                <label htmlFor="employeeID2">Select Groomer #2</label>
                <select name="employeeID2" value={employeeID2} onChange={changeEmployeeID2}>
                    <option value="Nobody">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option
                                    value={content.employee_first_name + content.employee_last_name}
                                    key={index}
                                >
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
            <div className="label-and-select">
                <label htmlFor="employeeID3">Select Groomer #3</label>
                <select name="employeeID3" value={employeeID3} onChange={changeEmployeeID3}>
                    <option value="Nobody">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option
                                    value={content.employee_first_name + content.employee_last_name}
                                    key={index}
                                >
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
            <div className="label-and-select">
                <label htmlFor="employeeID4">Select Groomer #4</label>
                <select name="employeeID4" value={employeeID4} onChange={changeEmployeeID4}>
                    <option value="Nobody">Nobody</option>
                    {employees &&
                        employees.map((content, index) => {
                            return (
                                <option
                                    value={content.employee_first_name + content.employee_last_name}
                                    key={index}
                                >
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
            <button
                onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                    handlePostIncomeData();
                }}
            >
                Confirm
            </button>
        </div>
    );
}
