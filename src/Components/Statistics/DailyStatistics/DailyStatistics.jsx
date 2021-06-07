import React, { useState, useEffect } from "react";
import DailyIncomeEditor from "./DailyIncomeEditor/DailyIncomeEditor";
import "./DailyStatistics.css";
import "../../CommonElements.css";

export default function DailyStatistics(props) {
    // Define today's date to be used as date initial state
    let today_date = new Date();
    let dd = String(today_date.getDate()).padStart(2, "0");
    let mm = String(today_date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today_date.getFullYear();
    today_date = yyyy + "-" + mm + "-" + dd;

    // Define states
    const [incomeHistories, setIncomeHistories] = useState([]);
    const [incomeHistoriesOnDate, setIncomeHistoriesOnDate] = useState([]);
    const [incomeIndex, setIncomeIndex] = useState(0);
    const [incomeId, setIncomeId] = useState(0);
    const [date, setDate] = useState("");
    const [shouldRenderDailyIncomeEditor, setShouldRenderDailyIncomeEditor] = useState(false);
    const [refresh, setRefresh] = useState(true); // This is a state for the refresh-button to change state, and therefore triger useEffect
    // console.log("incomeHistories", incomeHistories);
    // console.log("incomeHistoriesOnDate", incomeHistoriesOnDate);
    // console.log("incomeIndex:", incomeIndex)

    // Define non-state variables
    var totalIncomeBeforeTax =
        incomeHistoriesOnDate &&
        incomeHistoriesOnDate
            .map((item) => Number(item.income_before_tax))
            .reduce((a, b) => a + b, 0);
    var totalIncomeAfterTax =
        incomeHistoriesOnDate &&
        incomeHistoriesOnDate
            .map((item) => Number(item.income_after_tax))
            .reduce((a, b) => a + b, 0);
    var totalGst = Number(totalIncomeBeforeTax) - Number(totalIncomeAfterTax);
    var totalTips =
        incomeHistoriesOnDate &&
        incomeHistoriesOnDate.map((item) => Number(item.tips)).reduce((a, b) => a + b, 0);
    var total = totalIncomeBeforeTax + totalTips;
    // console.log("totalIncomeBeforeTax:", totalIncomeBeforeTax);

    // Define onChange handlers
    const changeDate = (event) => setDate(event.target.value);

    // Fetch data from database when component mounts
    useEffect(() => {
        // Check is component is mounted to prevent memory leak
        let componentIsMounted = true;
        (async () => {
            const response = await fetch(`${props.url}income-histories`);
            const data = await response.json();
            if (componentIsMounted) {
                setIncomeHistories(data);
            }
        })();
        return () => {
            componentIsMounted = false;
        };
    }, []);

    // Define the date of today as the initial state of date
    useEffect(() => {
        let componentIsMounted = true;
        // Define today's date to be used as date initial state
        let today_date = new Date();
        let dd = String(today_date.getDate()).padStart(2, "0");
        let mm = String(today_date.getMonth() + 1).padStart(2, "0"); //January is 0
        let yyyy = today_date.getFullYear();
        today_date = yyyy + "-" + mm + "-" + dd;
        if (componentIsMounted) {
            setDate(today_date);
        }
        return () => {
            componentIsMounted = false;
        };
    }, []);

    // When user picks a date, filter incomeHistories to find items that has matching "date"
    useEffect(() => {
        if (date !== null) {
            let componentIsMounted = true;
            if (componentIsMounted && incomeHistories) {
                setIncomeHistoriesOnDate(incomeHistories.filter((income) => income.date === date));
            }
            return () => {
                componentIsMounted = false;
            };
        }
    }, [incomeHistories, date]);

    // Fetch data when component mount and user clicks refresh-button
    useEffect(() => {
        fetch(`${props.url}income-histories`)
            .then((response) => response.json())
            .then((response) => {
                setIncomeHistories(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [refresh]);

    return (
        <section id="daily-statistics">
            <div className="title-and-refresh-button">
                <h1>Daily Statistics</h1>
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
            <div className="label-and-input">
                <label htmlFor="date">Date </label>
                <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={changeDate}
                    id="daily-statistics__date"
                />
            </div>
            <table className="daily-statistics__table table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Sales</th>
                        <th>GST</th>
                        <th>Tips</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {incomeHistoriesOnDate &&
                        incomeHistoriesOnDate.map((content, index) => {
                            return (
                                <tr>
                                    <td>{content.date}</td>
                                    <td>{content.income_before_tax}</td>
                                    <td>
                                        {Number(content.income_before_tax) -
                                            Number(content.income_after_tax)}
                                    </td>
                                    <td>{content.tips}</td>
                                    <td>
                                        {Number(content.tips) + Number(content.income_before_tax)}
                                    </td>
                                    <td>
                                        <button
                                            className="button_edit"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIncomeIndex(index);
                                                setIncomeId(content.id);
                                                setShouldRenderDailyIncomeEditor(
                                                    !shouldRenderDailyIncomeEditor
                                                );
                                            }}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    <tr>
                        <td className="bold">Total</td>
                        <td className="bold">{totalIncomeBeforeTax}</td>
                        <td className="bold">{totalGst}</td>
                        <td className="bold">{totalTips}</td>
                        <td className="bold">{total}</td>
                    </tr>
                </tbody>
            </table>
            {shouldRenderDailyIncomeEditor ? (
                <DailyIncomeEditor
                    url={props.url}
                    incomeId={incomeId}
                    incomeHistory={incomeHistoriesOnDate[incomeIndex]}
                    setShouldRenderDailyIncomeEditor={setShouldRenderDailyIncomeEditor}
                />
            ) : null}
        </section>
    );
}
