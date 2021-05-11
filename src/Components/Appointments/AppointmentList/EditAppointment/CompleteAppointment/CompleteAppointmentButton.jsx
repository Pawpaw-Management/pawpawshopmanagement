import React, { useState } from "react";
import IncomeInputWindow from "./IncomeInputWindow/IncomeInputWindow";
import "./CompleteAppointmentButton.css";

export default function CompleteAppointmentButton(props) {
    // When user clicks this button, an IncomeInputWindow component should pop up.

    // Define states
    const [shouldShowInputWindow, setVisibilityInputWindow] = useState(false);

    // A function to push to income-this-months
    const submitToIncomeThisMonth = async (event) => {
        event.preventDefault();
        if (props.url && props.appointmentId) {
            const response = await fetch(`${props.url}income-this-months`, {
                method: "PUSH",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    date: `${props.date}`,
                    time: `${props.time}`,
                    type: `services`,
                    description: `${props.service}`,
                }),
            });
            const content = await response.json();
            console.log(content);
            // Tell user the data above is successfully submitted
            if (response.status === 200) {
                alert("Appointment Information Updated!");
            } else {
                alert("Error! Please make sure database is running properly.");
            }
        }
    };

    return (
        <div id="editAppointment_form_complete">
            <button
                id="editAppointment_form_complete_button"
                onClick={(event) => {
                    event.preventDefault();
                    setVisibilityInputWindow(true);
                }}
            >
                Checkout
            </button>
            {shouldShowInputWindow ? (
                <IncomeInputWindow
                    url={props.url}
                    time={props.time}
                    date={props.appointment_date}
                    appointmentId={props.appointmentId}
                    service={props.appointment_service}
                    setVisibilityInputWindow={setVisibilityInputWindow}
                />
            ) : (
                <div></div>
            )}
        </div>
    );
}
