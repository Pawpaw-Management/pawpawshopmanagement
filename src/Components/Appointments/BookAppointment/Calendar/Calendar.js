import React, { useState, useEffect } from "react";
import moment from "moment";
import Header from "./CalendarHeader/CalendarHeader.js";
import "./Calendar.css";

export default function Calendar({ selectedDate, onChange }) {
    // Define states
    const [calendar, setCalendar] = useState([]);

    // Every time selectedDate changes, genereate the calendar according to selectedDate
    useEffect(() => {
        setCalendar(buildCalendar(selectedDate));
    }, [selectedDate]);

    // Define a function to generate calendar
    function buildCalendar(date) {
        // Define a temporary variable for storing arrays to avoide too many renders
        const tempArray = [];
        // Define the first/last date to show in the first/last cell on calendar
        const startDay = date.clone().startOf("month").startOf("week");
        const endDay = date.clone().endOf("month").endOf("week");
        // Calculate how many days are there to show
        const _date = startDay.clone().subtract(1, "day");

        while (_date.isBefore(endDay, "day")) {
            tempArray.push(
                Array(7)
                    .fill(0)
                    .map(() => _date.add(1, "day").clone())
            );
        }
        return tempArray;
    }

    // Define a function to tell the selected day
    function isSelected(day) {
        return selectedDate.isSame(day, "day");
    }

    // Define a function to tell if target day is before today
    function beforeToday(day) {
        return moment(day).isBefore(new Date(), "day");
    }

    // Define a function to show the date of today
    function isToday(day) {
        return moment(new Date()).isSame(day, "day");
    }

    // Define a function to return different classNames to different types of days
    function dayStyles(day) {
        if (beforeToday(day)) return "before";
        if (isSelected(day)) return "selected";
        if (isToday(day)) return "today";
        return "";
    }

    // Define a function to show current month name
    function currMonthName() {
        return selectedDate.format("MMMM");
    }

    // Define a function to show current year name
    function currYear() {
        return selectedDate.format("YYYY");
    }

    return (
        <div className="calendar">
            <Header selectedDate={selectedDate} onChange={onChange} />

            <div className="body">
                <div className="day-names">
                    {["s", "m", "t", "w", "t", "f", "s"].map((d) => (
                        <div className="week">{d}</div>
                    ))}
                </div>
                {calendar.map((week, wi) => (
                    <div key={wi}>
                        {week.map((day, di) => (
                            <div
                                key={di}
                                className="day"
                                onClick={() => {
                                    if (day < moment(new Date()).startOf("day"))
                                        return;
                                    onChange(day);
                                }}
                            >
                                <div className={dayStyles(day)}>
                                    {day.format("D").toString()}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
