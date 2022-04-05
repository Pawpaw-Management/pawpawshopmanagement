import React, { useState, useEffect } from "react";
import "../../../CommonElements.css";

export default function PendingPaymentInfo(props) {
    console.log(props.content);
    let employeeId1 = props.content.employeeID1 ? props.content.employeeID1 : "Nobody";
    let employeeId2 = props.content.employeeID2 ? props.content.employeeID2 : "Nobody";
    let employeeId3 = props.content.employeeID3 ? props.content.employeeID3 : "Nobody";
    let employeeId4 = props.content.employeeID4 ? props.content.employeeID4 : "Nobody";
    let employeePayPercentage1 = props.content.employeePayPercentage1 ? props.content.employeePayPercentage1 : 0;
    let employeePayPercentage2 = props.content.employeePayPercentage2 ? props.content.employeePayPercentage2 : 0;
    let employeePayPercentage3 = props.content.employeePayPercentage3 ? props.content.employeePayPercentage3 : 0;
    let employeePayPercentage4 = props.content.employeePayPercentage4 ? props.content.employeePayPercentage4 : 0;
    let service_income_total_share = props.content.service_income_total_share ? props.content.service_income_total_share : 0;
    let tips_total_share = props.content.tips_total_share ? props.content.tips_total_share : 0;
    let employee_commission1 = ((Number(service_income_total_share) * Number(employeePayPercentage1)) / 100).toFixed(2);
    let employee_commission2 = ((Number(service_income_total_share) * Number(employeePayPercentage2)) / 100).toFixed(2);
    let employee_commission3 = ((Number(service_income_total_share) * Number(employeePayPercentage3)) / 100).toFixed(2);
    let employee_commission4 = ((Number(service_income_total_share) * Number(employeePayPercentage4)) / 100).toFixed(2);
    let employee_tip1 = ((Number(tips_total_share) * Number(employeePayPercentage1)) / 100).toFixed(2);
    let employee_tip2 = ((Number(tips_total_share) * Number(employeePayPercentage2)) / 100).toFixed(2);
    let employee_tip3 = ((Number(tips_total_share) * Number(employeePayPercentage3)) / 100).toFixed(2);
    let employee_tip4 = ((Number(tips_total_share) * Number(employeePayPercentage4)) / 100).toFixed(2);
    let employ1 = employeeId1 + ": C$" + employee_commission1 + ", T$" + employee_tip1;
    let employ2 = employeeId2 + ": C$" + employee_commission2 + ", T$" + employee_tip2;
    let employ3 = employeeId3 + ": C$" + employee_commission3 + ", T$" + employee_tip3;
    let employ4 = employeeId4 + ": C$" + employee_commission4 + ", T$" + employee_tip4;

    return (
        <tr>
            <td>{`${props.content.purchase_date}`}</td>
            <td>{`${employ1}`}</td>
            <td>{`${employ2}`}</td>
            <td>{`${employ3}`}</td>
            <td>{`${employ4}`}</td>
            <td>{`${props.content.service_description}`}</td>
            <td>
                <button
                    className="button_edit"
                    onClick={(e) => {
                        e.preventDefault();
                        props.setPendingPaymentId(props.content.id);
                        props.setShouldRenderPendingPaymentEditor(true);
                    }}
                >
                    Edit
                </button>
            </td>
        </tr>
    );
}
