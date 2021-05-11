import React, { useState, useEffect } from "react";
import "./Incomes.css";

export default function Incomes(props) {  

    return (
        <div id="income_table">
            {/* <span>Income Report</span> */}
            <table>
                <thead>
                    <tr>
                        <th>Date of Report</th>
                        <th>Income ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {props.incomes.map((content, index) => {
                        return (
                            <tr>
                                <td>{content.created_at.slice(0, 10)}</td>
                                <td>{content.Income_Total}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
