import React, { useState, useEffect } from "react";
import "./EditAppointment.css";

export default function EditAppointment(props) {
    // Define states
    // 1. These are for the <input> elements
    const [appointment_date, setDate] = useState("");
    const [appointment_time_start, setTimeStart] = useState("");
    const [appointment_time_end, setTimeEnd] = useState("");
    const [appointment_service, setService] = useState([]);

    // 2. There are for display only
    const [appointment_customer_id, setCustomerId] = useState("");
    const [appointment_customer_first_name, setFirstName] = useState("");
    const [appointment_customer_last_name, setLastName] = useState("");
    const [appointment_pet_name, setPetName] = useState("");
    const [pet_breed, setPetBreed] = useState("");

    // Define onChange event handlers
    const changeDate = (event) => setDate(event.target.value);
    const changeTimeStart = (event) => setTimeStart(event.target.value);
    const changeTimeEnd = (event) => setTimeEnd(event.target.value);
    const changeService = (event) => setService(event.target.value);

    // When this component becomes visible, set input values to the current appointment information
    // 1. Define the current appointment
    var current_appointment;
    if (props.appointments !== null) {
        current_appointment =
            props.appointments &&
            props.appointments.find(
                (appointment) => appointment.id === props.appointmentId
            );
    } else {
        current_appointment = null;
    }

    // 2. Assign data from current_account to states when accountId changes
    useEffect(() => {
        if (current_appointment) {
            setDate(current_appointment.appointment_date);
            setFirstName(current_appointment.appointment_customer_first_name);
            setLastName(current_appointment.appointment_customer_last_name);
            setPetName(current_appointment.appointment_pet_name);
            setPetBreed(current_appointment.app);
        }
    }, [props.appointmentId]);

    // Define a function to update appointment information on server
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (props.url && props.accountId) {
            const response = await fetch(
                `${props.url}daily-appintments/${props.appointmentId}`,
                {
                    method: "PUT",
                    headers: {
                        accept: "application/json",
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        appointment_date: `${appointment_date}`,
                        appointment_time_start: `${appointment_time_start}`,
                        appointment_time_end: `${appointment_time_end}`,
                        appointment_service: `${appointment_service}`,
                    }),
                }
            );
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
        <div
            className="editAppointment"
            style={{ visibility: props.visibilityEdit }}
        >
            <button
                className="button_esc"
                onClick={() => props.setVisibilityEdit("hidden")}
            >
                Esc
            </button>
            <form className="editAppointment_form" onSubmit={handleSubmit}>
                <label for="appointment_date"> Date</label>
                <input
                    type="text"
                    name="appointment_date"
                    id="appointment_date"
                    value={appointment_date}
                    onChange={changeDate}
                />
                <label for="appointment_time_start"> From</label>
                <input
                    type="text"
                    name="appointment_time_start"
                    id="appointment_time_start"
                    value={appointment_time_start}
                    onChange={changeTimeStart}
                />
                <label for="appointment_time_end"> To</label>
                <input
                    type="text"
                    name="appointment_time_end"
                    id="appointment_time_end"
                    value={appointment_time_end}
                    onChange={changeTimeEnd}
                />
                <label for="appointment_service"> Service</label>
                <textarea
                    type="email"
                    name="appointment_service"
                    id="appointment_service"
                    value={appointment_service}
                    onChange={changeService}
                />
                <input type="submit" id="editAppointment_submit" />
            </form>
            <div className="editAppointment_chart">
                <h1>Customer Information</h1>
                <div>
                    <span>{`Name: ${appointment_customer_first_name} ${appointment_customer_last_name}`}</span>
                    <span>{`Phone: ${appointment_pet_name}`}</span>
                    <span>Email:</span>
                    <span>{`Pet Name: ${appointment_pet_name}`}</span>
                </div>
            </div>
        </div>
    );
}
