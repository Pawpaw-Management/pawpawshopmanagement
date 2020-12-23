import React, { useState, useEffect } from "react";
import Calendar from "./Calendar/Calendar.js";
import AppointmentList from "../AppointmentList/AppointmentList";
import AddAppointment from "./AddAppointment/AddAppointment";
import "./BookAppointment.css";

export default function BookAppointment(props) {
    console.log(props.url)

    return (
        <section className="bookAppointment">
            <div class="bookAppointment_calendar_and_form">
                <Calendar
                    selectedDate={props.selectedDate}
                    onChange={props.setSelectedDate}
                />
                <AddAppointment
                    url={props.url}
                    selectedDate={props.selectedDate}
                />
            </div>
            <AppointmentList
                url={props.url}
                selectedDate={props.selectedDate}
            />
        </section>
    );
}
