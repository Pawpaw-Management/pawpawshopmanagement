import React, { useState } from "react";
import "./IncomeInputWindow.css";

export default function IncomeInputWindow(props) {
    // When user finishes filling the inputs, user can click submit to upload data.

    // Define states
    const [totalIncome, setTotalIncome] = useState(0.00);
    const [groomerTip, setGroomerTip] = useState(0.00);

    // Define onChange event handlers
    const changeTotalIncome = (event) => setTotalIncome(event.target.value);
    const changeGroomerTip = (event) => setGroomerTip(event.target.value);

    return (
        <div id="editAppointment_form_complete_window">
            <label for="total_income">
                total income(must use format xxx.xx)
            </label>
            <input
                type="number"
                name="total_income"
                value={totalIncome}
                onChange={changeTotalIncome}
            />
            <label for="groomer_tip">
                tip for groomer(must use format xxx.xx)
            </label>
            <input
                type="number"
                name="groomer_tip"
                value={groomerTip}
                onChange={changeGroomerTip}
            />
        </div>
    );
}
