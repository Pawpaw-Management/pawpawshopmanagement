import React, { useState } from "react";
import "./IncomeInputWindow.css";
import SubmitButton from "./SubmitButton/SubmitButton"

export default function IncomeInputWindow(props) {
    // When user finishes filling the inputs, user can click submit to upload data.

    // Define states
    const [totalIncome, setTotalIncome] = useState(0.00);
    const [groomerTip, setGroomerTip] = useState(0.00);

    // Define onChange event handlers
    const changeTotalIncome = (event) => setTotalIncome(event.target.value);
    const changeGroomerTip = (event) => setGroomerTip(event.target.value);

    return (
        <div id="editAppointment_form_complete_window" className="window">
            <h1>Checkout</h1>
            <button
                className="button_esc"
                onClick={() => props.setVisibilityInputWindow(false)}
            >
                X
            </button>
            <label for="total_income">
                Total income<br/>(must use format xxx.xx)
            </label>
            <input
                type="number"
                name="total_income"
                value={totalIncome}
                onChange={changeTotalIncome}
            />
            <label for="groomer_tip">
                Tip for groomer<br/>(must use format xxx.xx)
            </label>
            <input
                type="number"
                name="groomer_tip"
                value={groomerTip}
                onChange={changeGroomerTip}
            />
            <SubmitButton />
        </div>
    );
}
