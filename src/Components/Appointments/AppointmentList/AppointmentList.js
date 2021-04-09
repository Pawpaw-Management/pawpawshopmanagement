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

    // Define basic states
    const [appointments, setAppointments] = useState(null);
    const [appointmentId, setAppointmentId] = useState();
    const [hasAppointment, setHasAppointment] = useState(false);
    const [dateOfInterest, setDateOfInterest] = useState("");

    // Define event handler
    const changeDateOfInterest = (event) =>
        setDateOfInterest(event.target.value);

    // Define states for component display
    const [
        shouldShowAppointmentEditor,
        setVisibilityAppointmentEditor,
    ] = useState(false);
    const [
        shouldShowAppointmentCompleter,
        setVisibilityAppointmentCompleter,
    ] = useState(false);

    // When component mount, fetch latest data through API, and assign to "appointments"
    // In BookAppointment.jsx, show only those appointments on selectedDate, ie. response.filter...
    // Otherwise, show all appointments
    useEffect(() => {
        fetch(`${props.url}events`)
            .then((response) => response.json())
            .then((response) => {
                // filter the appointments on the selected date
                var appointmentsOnSelectedDate = response.filter((current) => {
                    return current.appointment_date === date;
                });

                if (date && appointmentsOnSelectedDate.length !== 0) {
                    // if date is provided, and response's length is not 0,
                    // then set hasAppointment to true, and only assign appointments data on the given date to appointments
                    setHasAppointment(true);
                    setAppointments(
                        response.filter((current) => {
                            return current.appointment_date === date;
                        })
                    );
                    console.log("appointments: ");
                    console.log(appointments);
                } else if (date === null) {
                    // if date is not provided, which means this component is used in Search/Edit Appointments,
                    // then simply assign all fetched data to appointments, and set hasAppointment to true
                    setHasAppointment(true);
                    setAppointments(response);
                } else if (date && appointmentsOnSelectedDate.length === 0) {
                    // if date is provided, and response's length is 0, which means this component is used along with <Calendar>
                    // then set hasAppointment to false
                    setHasAppointment(false);
                }
            })
            .catch((error) => {
                console.log("error: ");
                console.log(error);
            });
    }, [date]);

    // console.log(appointments[0].appointment_date)

    // Render appointment list or "No Appointments" based on hasAppointment
    if (hasAppointment) {
        return (
            <section className="appointmentList">
                <div className="appointmentList_dateFinder">
                    <label for="date">Date </label>
                    <input
                        type="text"
                        name="date"
                        placeholder="format: xxxx-xx-xx"
                        value={dateOfInterest}
                        onChange={changeDateOfInterest}
                    />
                </div>
                <table>
                    <thead>
                        <tr className="appointmentList_tableHead">
                            <th>ID</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Groomer ID</th>
                            <th>Services</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Show appointments data according to "dateOfInterest". */}
                        {appointments &&
                            appointments.map((content, index) => {
                                // If date input in empty, show all the appointments in database.
                                if (dateOfInterest === "") {
                                    return (
                                        <AppointmentDetail
                                            content={content}
                                            index={index}
                                            key={index}
                                            setVisibilityAppointmentEditor={
                                                setVisibilityAppointmentEditor
                                            }
                                            setVisibilityAppointmentCompleter={
                                                setVisibilityAppointmentCompleter
                                            }
                                            setAppointmentId={setAppointmentId}
                                        />
                                    );
                                }
                                // If user enter a valid date, show appointments on that date only.
                                if (
                                    content.appointment_date === dateOfInterest
                                ) {
                                    return (
                                        <AppointmentDetail
                                            content={content}
                                            index={index}
                                            key={index}
                                            setVisibilityAppointmentEditor={
                                                setVisibilityAppointmentEditor
                                            }
                                            setVisibilityAppointmentCompleter={
                                                setVisibilityAppointmentCompleter
                                            }
                                            setAppointmentId={setAppointmentId}
                                        />
                                    );
                                }
                            })}
                    </tbody>
                </table>
                {shouldShowAppointmentEditor ? (
                    <EditAppointment
                        url={props.url}
                        appointments={appointments}
                        appointmentId={appointmentId}
                        setVisibilityAppointmentEditor={
                            setVisibilityAppointmentEditor
                        }
                    />
                ) : (
                    <div></div>
                )}
            </section>
        );
    } else if (!hasAppointment) {
        return <span>No Appointments</span>;
    }
}
