import React, { useState } from "react";

function Accounting(props) {
    const [monthly_income, setMonthlyIncome] = useState(0);
    console.log(monthly_income);

    // Fetch latest data, assign to monthly_income
    fetch(`${props.url}income-months`)
        .then((response) => response.json())
        .then((response) => {
            setMonthlyIncome(response[0].value);
        })
        .catch((error) => {
            console.log(error);
        });

    // Define a function to post to income-statistics
    const handlePostToIncomeStatistics = async () => {
        if (props.url) {
            const response = await fetch(`${props.url}income-histories`, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    Income_Total: Number(monthly_income),
                }),
            });
        }
    };

    // Define a function to set monthly_income to 0 for next month
    const handleResetMonthlyIncome = async () => {
        if (props.url) {
            const response = await fetch(`${props.url}income-months/1`, {
                method: "PUT",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    value: 0,
                }),
            });
        }
    };

    handlePostToIncomeStatistics();
    handleResetMonthlyIncome();
}

export default Accounting;
