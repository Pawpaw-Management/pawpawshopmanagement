import React, { useState } from "react";
import moment from "moment";
import Calendar from "./Calendar/Calendar.js";
import AppointmentList from "./AppointmentList/AppointmentList";
import "./Appointments.css";

export default function (props) {
    // Define states
    const [selectedDate, setSelectedDate] = useState(moment());
    const date = selectedDate.format("YYYY-MM-DD");
    // console.log(date)
    // console.log(typeof(date))
    return (
        <section className="appointments">
            <h1>Appointments</h1>
            <Calendar selectedDate={selectedDate} onChange={setSelectedDate} />
            <AppointmentList selectedDate={selectedDate} url={props.url} />
        </section>
    );
}
