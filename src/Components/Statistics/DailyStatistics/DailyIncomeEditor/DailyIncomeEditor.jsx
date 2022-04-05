import React, { useState, useEffect } from "react";
import "./DailyIncomeEditor.css";
export default function DailyIncomeEditor(props) {
    // Define states
    const [date, setDate] = useState(props.incomeHistory.date);
    const [totalIncomeBeforeTax, setTotalIncomeBeforeTax] = useState(
        props.incomeHistory.income_before_tax
    );
    const [gst, setGst] = useState(
        Number(props.incomeHistory.income_before_tax) - Number(props.incomeHistory.income_after_tax)
    );
    const [tips, setTips] = useState(props.incomeHistory.tips);
    const [description, setDescription] = useState(props.incomeHistory.description);
    const [processedDescription, setProcessedDescription] = useState("");

    // Update processedDescription whenever description changes, replace the "/" in description with "<br />"
    useEffect(() => {
        let text_splited = description.split(/[/,]/);
        let text_rejoined = text_splited.map((item, key) => {
            return (
                <span key={key}>
                    {item}
                    <br />
                </span>
            );
        });
        setProcessedDescription(text_rejoined);
    }, [description]);

    // Define non-state variables
    const totalIncomeAfterTax = Number(totalIncomeBeforeTax) - Number(gst);

    // Define onChange handlers
    const changeDate = (event) => setDate(event.target.value);
    const changeTotalIncomeBeforeTax = (event) => setTotalIncomeBeforeTax(event.target.value);
    const changeGst = (event) => setGst(event.target.value);
    const changeTips = (event) => setTips(event.target.value);
    const changeDescription = (event) => setDescription(event.target.value);

    // Post data to DB
    const handleSubmit = async () => {
        const response = await fetch(`${props.url}income-histories/${props.incomeId}`, {
            method: "PUT",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                date: `${date}`,
                income_before_tax: totalIncomeBeforeTax,
                income_after_tax: totalIncomeAfterTax,
                tips: tips,
                description: `${description}`,
            }),
        });
        const content = await response.json();
        console.log(content);
        // Tell user the data above is successfully submitted
        if (response.status === 200) {
            alert(`Income information has been updated!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    // Delete data from DB
    const handleDelete = async () => {
        const response = await fetch(`${props.url}income-histories/${props.incomeId}`, {
            method: "DELETE",
        });
        const content = await response.json();
        console.log(content);
        // Tell user the data above is successfully submitted
        if (response.status === 200) {
            alert(`Income information has been deleted!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    return (
        <div id="daily-income-editor" className="window">
            <button
                className="button_esc"
                onClick={() => props.setShouldRenderDailyIncomeEditor(false)}
            >
                X
            </button>
            <div className="input-and-label">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" value={date} onChange={changeDate} />
            </div>
            <div className="input-and-label">
                <label htmlFor="total-income-before-tax">Total Income (before tax)</label>
                <input
                    type="number"
                    name="total-income-before-tax"
                    value={totalIncomeBeforeTax}
                    onChange={changeTotalIncomeBeforeTax}
                />
            </div>
            <div className="input-and-label">
                <label htmlFor="gst">Gst</label>
                <input type="number" name="gst" value={gst} onChange={changeGst} />
            </div>
            <div className="input-and-label">
                <label htmlFor="tips">Tips</label>
                <input type="number" name="tips" value={tips} onChange={changeTips} />
            </div>
            <p>{processedDescription}</p>
            <div className="input-and-label">
                <label htmlFor="desctiption">Description</label>
                <textarea
                    rows="10"
                    cols="40"
                    name="desctiption"
                    id="description-textarea"
                    value={description}
                    onChange={changeDescription}
                />
            </div>
            <input
                type="submit"
                value="Submit"
                onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                    props.setShouldRenderDailyIncomeEditor(false);
                }}
            />
            <button
                id="daily-income-editor__delete-button"
                onClick={(e) => {
                    e.preventDefault();
                    if (
                        window.confirm(
                            "Are you sure to delete this transaction? It CANNOT be undone."
                        )
                    ) {
                        handleDelete();
                    }
                }}
            >
                Delete
            </button>
        </div>
    );
}
