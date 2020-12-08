import React from "react";
import Calendar from "./Calendar/Calendar.js";
import AppointmentList from "../AppointmentList/AppointmentList"
import "./BookAppointment.css"

export default function BookAppointment(props) {
    return (
        <section className="bookAppointment">
            <Calendar
                selectedDate={props.selectedDate}
                onChange={props.setSelectedDate}
            />
            <AppointmentList url={props.url} selectedDate={props.selectedDate} />
        </section>
    );
}
