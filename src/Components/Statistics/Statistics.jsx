import React, { useState, useEffect } from "react";
import BarChart from "./BarChart/BarChart";
import Incomes from "./Incomes/Incomes";

export default function Statistics(props) {
    // Define states
    const [incomes, setIncomes] = useState([]);

    // When this component mounts, fetch data
    useEffect(() => {
        fetch(`${props.url}income-statistics`)
            .then((response) => response.json())
            .then((response) => {
                setIncomes(response); //assign the fetched data to incomes
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // take income_total and creation date from json and assign to 2 variables
    var incomes_value = incomes.map((item) => item.Income_Total);
    var incomes_date = incomes.map((item) => item.created_at.slice(0, 10)); //Only the date is needed here, so slice off the time
    // console.log(incomes_value)
    // console.log(incomes_date)
    return (
        <div>
            <BarChart
                incomes_value={incomes_value}
                incomes_date={incomes_date}
            />
            <Incomes incomes={incomes} url={props.url} />
        </div>
    );
}
