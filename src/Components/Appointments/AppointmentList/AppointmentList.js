import React, { useState, useEffect } from "react";
import AppointmentDetail from "./AppointmentDetail/AppointmentDetail";
import EditAppointment from "./EditAppointment/EditAppointment";
import "./AppointmentList.css";

export default function AppointmentList(props) {
    // If selected date is given by parent component, then change its format and assign its value to date
    var date = null;
    if (props.selectedDate) {
        date = props.selectedDate.format("YYYY-MM-DD");
    }

    // Define states
    const [appointments, setAppointments] = useState(null);
    const [appointmentId, setAppointmentId] = useState(1);
    const [visibilityEdit, showEdit] = useState("hidden");
    const [visibilityComplete, showComplete] = useState("hidden");
    const [hasAppointment, setHasAppointment] = useState(false);

    // When component mount, fetch latest data through API, and assign to "appointments"
    // In BookAppointment.jsx, show only those appointments on selectedDate, ie. response.filter...
    // Otherwise, show all appointments
    useEffect(() => {
        fetch(`${props.url}daily-appointments`)
            .then((response) => response.json())
            .then((response) => {
                // filter the appointments on the selected date
                var appointmentsOnSelectedDate = response.filter((current) => {
                    return current.appointment_date === date;
                });
                // console.log("appointmentsOnSelectedDate");
                // console.log(appointmentsOnSelectedDate);

                // if date is provided, and response's length is not 0, then set hasAppointment to true
                if (date && appointmentsOnSelectedDate.length !== 0) {
                    setHasAppointment(true);
                    setAppointments(
                        response.filter((current) => {
                            return current.appointment_date === date;
                        })
                    );
                    console.log("appointments");
                    console.log(appointments);
                } else if (date === null) {
                    setHasAppointment(true);
                    setAppointments(response);
                } else if (date && appointmentsOnSelectedDate.length === 0) {
                    setHasAppointment(false);
                }
            })
            .catch((error) => {
                console.log("error:");
                console.log(error);
            });
    }, [date]);

    // Render appointment list or "No Appointments" based on hasAppointment
    if (hasAppointment) {
        return (
            <section className="appointmentList">
                <table>
                    <thead>
                        <tr className="appointmentList_tableHead">
                            <th>ID</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Customer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments &&
                            appointments.map((content, index) => {
                                return (
                                    <AppointmentDetail
                                        content={content}
                                        index={index}
                                        key={index}
                                        showEdit={showEdit}
                                        showComplete={showComplete}
                                        setAppointmentId={setAppointmentId}
                                    />
                                );
                            })}
                    </tbody>
                </table>
                <EditAppointment
                    visibility={visibilityEdit}
                    url={props.url}
                    appointments={appointments}
                    appointmentId={appointmentId}
                />
            </section>
        );
    } else {
        return (
            <section className="appointmentList">
                <table>
                    <thead>
                        <tr className="appointmentList_tableHead">
                            <th>ID</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Customer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td colspan="4">No Appointments</td>
                    </tbody>
                </table>
            </section>
        );
    }
}
