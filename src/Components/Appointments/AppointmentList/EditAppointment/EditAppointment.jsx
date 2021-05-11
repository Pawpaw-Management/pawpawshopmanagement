import React, { useState, useEffect } from "react";
import CompleteAppointmentButton from "./CompleteAppointment/CompleteAppointmentButton";
import DeleteAppointmentButton from "./DeleteAppointmentButton/DeleteAppointmentButton.jsx";
import "./EditAppointment.css";

export default function EditAppointment(props) {
    // Define states
    // 1. These variables are for the <input> elements to make changes on server
    const [appointment_date, setDate] = useState("");
    const [appointment_time_start, setTimeStart] = useState("");
    const [appointment_time_end, setTimeEnd] = useState("");
    const [appointment_service, setService] = useState("");
    const [appointment_service_provider_id, setProviderId] = useState("");

    // 2. There variables are for display only, in <div className="editAppointment_chart_customerInfo">
    const [appointment_customer_first_name, setFirstName] = useState("");
    const [appointment_customer_last_name, setLastName] = useState("");
    const [appointment_customer_email, setEmail] = useState("");
    const [appointment_customer_phone, setPhone] = useState("");
    const [appointment_pet_name, setPetName] = useState("");
    const [appointment_pet_breed, setPetBreed] = useState("");
    const [appointment_pet_size, setPetSize] = useState("");
    const [appointment_pet_note, setPetNote] = useState("");

    // 3. This controls whether render <DeleteAppointment> or not
    const [shouldShowDeleteAppointment, setVisibilityDelete] = useState(false);

    // Define onChange event handlers
    const changeDate = (event) => setDate(event.target.value);
    const changeTimeStart = (event) => setTimeStart(event.target.value);
    const changeTimeEnd = (event) => setTimeEnd(event.target.value);
    const changeService = (event) => setService(event.target.value);
    const changeProvider = (event) => setProviderId(event.target.value);

    // When this component mounts, set input values to the current appointment information
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

    // 2. Assign data from current_account to states when appointmentId changes
    var current_customer;
    useEffect(() => {
        if (current_appointment) {
            setDate(current_appointment.appointment_date);
            setTimeStart(current_appointment.appointment_time_start);
            setTimeEnd(current_appointment.appointment_time_end);
            setProviderId(current_appointment.appointment_service_provider_id);
            setService(current_appointment.appointment_service);
        }

        // Fetch data and assign variables according to the given appointment_customer_id and appointment_service_provider_id
        (async () => {
            const response = await fetch(`${props.url}customers-and-pets`);
            var customers = await response.json();
            current_customer = customers.find(
                (customer) =>
                    customer.id.toString() ===
                    current_appointment.appointment_customer_id
            );
            // console.log(current_customer);
            setFirstName(current_customer.customer_first_name);
            setLastName(current_customer.customer_last_name);
            setEmail(current_customer.customer_email);
            setPhone(current_customer.customer_phone);
            setPetName(current_customer.pet_name);
            setPetBreed(current_customer.pet_breed);
            setPetSize(current_customer.pet_size);
            setPetNote(current_customer.pet_note);
        })();
    }, [props.appointmentId]);

    // Define a function to update appointment information on server
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (props.url && props.appointmentId) {
            const response = await fetch(
                `${props.url}events/${props.appointmentId}`,
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
                        appointment_service_provider_id: `${appointment_service_provider_id}`,
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

    // Define a function to delete an appointment
    const handleDelete = async () => {
        if (props.url && props.appointmentId) {
            const response = await fetch(
                `${props.url}events/${props.appointmentId}`,
                {
                    method: "DELETE",
                }
            );
            const content = await response.json();
            console.log(content);
        }
    };

    // Render editAppointment only when user clicks "Edit" button from <AppointmentList>
    return (
        <div className="editAppointment window">
            <button
                className="button_esc"
                onClick={() => props.setVisibilityAppointmentEditor(false)}
            >
                X
            </button>
            <form className="editAppointment_form" onSubmit={handleSubmit}>
                <label for="appointment_date">Date</label>
                <input
                    type="text"
                    name="appointment_date"
                    id="appointment_date"
                    value={appointment_date}
                    onChange={changeDate}
                />
                <label for="appointment_time_start">From</label>
                <input
                    type="text"
                    name="appointment_time_start"
                    id="appointment_time_start"
                    value={appointment_time_start}
                    onChange={changeTimeStart}
                />
                <label for="appointment_time_end">To</label>
                <input
                    type="text"
                    name="appointment_time_end"
                    id="appointment_time_end"
                    value={appointment_time_end}
                    onChange={changeTimeEnd}
                />
                <label for="appointment_service_provider_id">Groomer ID</label>
                <input
                    type="text"
                    name="appointment_service_provider_id"
                    id="appointment_service_provider_id"
                    value={appointment_service_provider_id}
                    onChange={changeProvider}
                />
                <label for="appointment_service">Service</label>
                <textarea
                    name="appointment_service"
                    id="appointment_service"
                    value={appointment_service}
                    onChange={changeService}
                />
                <div className="editAppointment_form_buttons">
                    <input
                        type="submit"
                        value="Confirm Changes"
                        id="editAppointment_form_submit"
                    />
                    <CompleteAppointmentButton
                        url={props.url}
                        appointmentId={props.appointmentId}
                        date={appointment_date}
                        time={`${appointment_time_start} - ${appointment_time_end}`}
                        service={appointment_service}
                    />
                    <DeleteAppointmentButton
                        url={props.url}
                        appointmentId={props.appointmentId}
                    />
                </div>
            </form>
            <div className="editAppointment_chart">
                <h1>Customer Information</h1>
                <div className="editAppointment_chart_customerInfo">
                    <span>{`Name: ${appointment_customer_first_name} ${appointment_customer_last_name}`}</span>
                    <span>{`Phone: ${appointment_customer_phone}`}</span>
                    <span>{`Email: ${appointment_customer_email}`}</span>
                    <span>{`Pet Name: ${appointment_pet_name}`}</span>
                    <span>{`Breed: ${appointment_pet_breed}`}</span>
                    <span>{`Size: ${appointment_pet_size}`}</span>
                    <span className="editAppointment_chart_customerInfo_note">{`Note: ${appointment_pet_note}`}</span>
                </div>
            </div>
        </div>
    );
}
