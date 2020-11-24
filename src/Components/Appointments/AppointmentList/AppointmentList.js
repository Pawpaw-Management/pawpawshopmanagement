import React, { useState, useEffect } from "react";
import AppointmentDetail from "./AppointmentDetail/AppointmentDetail";

export default function AppointmentList(props) {
    // Define states
    const [appointments, setAppointments] = useState(null);

    // When component mount, fetch latest data through API, and assign to "customers_and_pets"
    useEffect(() => {
        fetch(`${props.url}daily-appointments`)
            .then((response) => response.json())
            .then((response) => {
                setAppointments(response[0]);
            })
            .catch((error) => {
                console.log("error");
                console.log(error);
            });
    }, []);

    return (
        <div>
            <AppointmentDetail data={appointments} />
        </div>
    );
}
