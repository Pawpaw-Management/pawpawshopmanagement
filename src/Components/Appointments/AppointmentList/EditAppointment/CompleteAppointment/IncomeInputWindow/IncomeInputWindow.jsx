import React, { useState, useEffect } from "react";
import "./IncomeInputWindow.css";
// import SubmitButton from "./SubmitButton/SubmitButton"

export default function IncomeInputWindow(props) {
    // Define states
    const [groomerTip, setGroomerTip] = useState(0.0);
    const [
        income_from_this_transaction,
        setIncomeFromThisTransaction,
    ] = useState(0);
    const [originalMonthlyIncome, setOriginalMonthlyIncome] = useState(0);
    console.log(income_from_this_transaction)
    console.log(typeof(income_from_this_transaction))

    var updatedMonthlyIncome =
        originalMonthlyIncome + income_from_this_transaction;

    // Define onChange event handlers
    const changeTotalIncome = (event) =>
        setIncomeFromThisTransaction(Number(event.target.value));
    const changeGroomerTip = (event) => setGroomerTip(event.target.value);

    // Define the date of today as purchase_date
    var purchase_date = new Date();
    var dd = String(purchase_date.getDate()).padStart(2, "0");
    var mm = String(purchase_date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = purchase_date.getFullYear();
    purchase_date = mm + "/" + dd + "/" + yyyy;
    // console.log("purchase_date: " + purchase_date);

    // When this component mounts, fetch value from income-months and assign it to originalMonthlyIncome
    useEffect(() => {
        fetch(`${props.url}income-months`)
            .then((response) => response.json())
            .then((response) => {
                setOriginalMonthlyIncome(response[0].value);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Define a function to delete an appointment
    const handleDelete = async () => {
        if (props.url && props.appointmentId) {
            const response = await fetch(
                `${props.url}events/${props.appointmentId}`,
                {
                    method: "DELETE",
                }
            );
            const content = await response.json();
            console.log(content);
        }
    };

    // Define a function to post data to income-histories
    const handlePostToIncomeHistory = async () => {
        if (props.url && props.productId) {
            const response = await fetch(`${props.url}income-histories`, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    date: `${purchase_date}`,
                    income: income_from_this_transaction,
                    type: "services",
                    description: `On ${props.date} ${props.time}, services: ${props.service}`,
                }),
            });
            console.log(response)
        }
    };

    // Update monthly income
    const handleUpdateMonthlyIncome = async () => {
        const response = await fetch(`${props.url}income-months/1`, {
            method: "PUT",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                value: updatedMonthlyIncome,
            }),
        });
    };

    // Update Employee Monthly Income
    

    return (
        <div id="editAppointment_form_complete_window" className="window">
            <h1>Checkout</h1>
            <button
                className="button_esc"
                onClick={(e) => {
                    e.preventDefault();
                    props.setVisibilityInputWindow(false);
                }}
            >
                X
            </button>
            <label for="total_income">
                Total income
                <br />
                (must use format xxx.xx)
            </label>
            <input
                type="number"
                name="total_income"
                value={income_from_this_transaction}
                onChange={changeTotalIncome}
            />
            <label for="groomer_tip">
                Tip for groomer
                <br />
                (must use format xxx.xx)
            </label>
            <input
                type="number"
                name="groomer_tip"
                value={groomerTip}
                onChange={changeGroomerTip}
            />
            <button
                onClick={() => {
                    if (
                        window.confirm(
                            `Please double check, this process CANNOT be undone.`
                        )
                    ) {
                        props.setVisibilityInputWindow(false);
                        handlePostToIncomeHistory();
                        handleUpdateMonthlyIncome();
                        handleDelete();
                    }
                }}
            >
                Confirm
            </button>
        </div>
    );
}
