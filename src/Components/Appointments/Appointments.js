import React, { useState } from "react";
import moment from "moment";
import Calendar from "./Calendar/Calendar.js";
import "./Appointments.css";

export default function () {
    // Define states
    const [selectedDate, setSelectedDate] = useState(moment());
    return (
        <section className="appointments">
            <h1>Appointments</h1>
            <Calendar value={selectedDate} onChange={setSelectedDate} />
        </section>
    );
}
