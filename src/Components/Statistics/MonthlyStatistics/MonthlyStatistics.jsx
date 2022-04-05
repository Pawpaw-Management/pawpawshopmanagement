import React, { useState, useEffect } from "react";
import BarChart from "../BarChart/BarChart";
import Incomes from "./Incomes/Incomes";
import accounting from "./Accounting/Accounting";
import "./MonthlyStatistics.css";

export default function MonthlyStatistics(props) {
    console.log("=====Log Separator=====");
    // Define states
    const [incomes, setIncomes] = useState([]);

    // When this component mounts, fetch data
    useEffect(() => {
        fetch(`${props.url}income-histories`)
            .then((response) => response.json())
            .then((response) => {
                setIncomes(response); //assign the fetched data to incomes
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Create an object with "yyyy-mm" being its properties, those income records whose "created_at" values match "yyyy-mm" will be pushed into the corresponding array.
    const sortedIncomes = {};
    if (incomes) {
        incomes.forEach((item) => {
            let incomes_month = item.created_at.slice(0, 7); //Only the year and month (yyyy-mm) are needed here, so slice off the time
            if (!(incomes_month in sortedIncomes)) {
                sortedIncomes[incomes_month] = [item];
            } else {
                sortedIncomes[incomes_month].push(item);
            }
        });
    }

    // Calculate the sum of "income_before_tax" in each array in "sortedIncomes", store these values in a new object "summedIncomesOfEachMonth", this object will be like {2021-01: 123, 2021-02: 321, 2021-03: 123 etc}
    var summedIncomesOfEachMonth = {};
    function calcSumOfIncome(total, current) {
        return total + Number(current);
    }
    if (sortedIncomes) {
        for (const key in sortedIncomes) {
            // extract the "income_before_tax" data from each 
            let collectionOfIncomesBeforeTax = sortedIncomes[key].map(item => item.income_before_tax)
            let sumOfIncomes = collectionOfIncomesBeforeTax.reduce(calcSumOfIncome, 0)
            summedIncomesOfEachMonth[key] = sumOfIncomes
        }
    }

    // Separate the "summedIncomesOfEachMonth" into 2 arrays, one has all the keys, the other has all the values.
    var incomes_month = []
    var incomes_value = []
    if (summedIncomesOfEachMonth) {
        for (const key in summedIncomesOfEachMonth) {
            incomes_month.push(key)
            incomes_value.push(summedIncomesOfEachMonth[key])
        }
    }
    console.log(incomes_month, incomes_value)


    return (
        <div id="accounting-report">
            <BarChart incomes_value={incomes_value} incomes_month={incomes_month} />
        </div>
    );
}
