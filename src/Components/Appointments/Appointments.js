import React, { useState } from "react";
import moment, { weekdays } from "moment";
import "./Appointments.css";

export default function Appointments(props) {
    // // Define states
    // const [dateObject, setSateObject] = useState(moment());

    // // Define a function to tell the first day of each month
    // const firstDayOfMonth = () => {
    //     let dateO = dateObject;
    //     console.log(dateO);
    //     let firstDay = moment(dateO).startOf("month").format("d");
    //     console.log("firstDayOfMonth: ");
    //     console.log(firstDayOfMonth());
    //     return firstDay;
    // };

    // // Create blank table cells before putting the firstDay in the calendar
    // let blankCells = [];
    // for (let i = 0; i < firstDayOfMonth(); i++) {
    //     blankCells.push(<td className="calendar-day empty">{""}</td>);
    // }

    // // Create dates in month inside <td> </td>
    // let daysInMonth = [];
    // for (let i = 0; i <= daysInMonth; i++) {
    //     daysInMonth.push(
    //         <td key={i} className="calendar-day">
    //             {i}
    //         </td>
    //     );
    // }

    // var totalCells = [...blankCells, ...daysInMonth];
    // let rows = [];
    // let cells = [];

    // totalCells.forEach((row, i) => {
    //     // Only saturday % 7 === 0, if i is not equal to 7, then don't go to next week
    //     if (i % 7 !== 0) {
    //         cells.push(row);
    //     } else {
    //         // When it's next week, put all <td> from last week to row and start a new row
    //         rows.push(cells);
    //         // empty container
    //         cells = [];
    //         cells.push(row);
    //     }
    //     if (i === totalCells.length - 1) {
    //         rows.push(cells);
    //     }
    // });

    // let daysinmonth = rows.map((day, i) => {
    //     return <tr>{day}</tr>;
    // });

    const value = moment();
    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");
    const day = startDay.clone().subtract(1, "day");
    const calendar = [];

    while (day.isBefore(endDay, "day")) {
        calendar.push(
            Array(7)
                .fill(0)
                .map(() => day.add(1, "day").clone())
        );
    }

    return (
        <section className="appointments">
            <h1>Calendar</h1>
            {/* <table>
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>{daysinmonth}</tbody>
            </table> */}
            <div>
                {calendar.map((week) => (
                    <div>
                        {week.map((day) => (
                            <div> {day.format("D").toString()}</div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
