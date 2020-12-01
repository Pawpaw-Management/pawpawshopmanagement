import React from "react";

export default function AppointmentDetail(props) {
    // Define a function to trim off the tailing ".000" in time format
    // reason for this is the time format on strapi is "xx:xx:xx.xxxx", only the starting "xx:xx" is needed
    const TrimZeros = (time) => {
        // console.log("time: " + time)
        time = time.slice(0, 5);
        // console.log("new time: " + time);
        return time;
    };

    return (
        <tr className="appointmentDetail">
            <td>{`id: ${props.index}`}</td>
            <td>{props.content.appointment_date}</td>
            <td>
                {TrimZeros(props.content.appointment_time_start) +
                    " - " +
                    TrimZeros(props.content.appointment_time_end)}
            </td>
            <td>
                {props.content.appointment_customer_first_name +
                    " " +
                    props.content.appointment_customer_last_name}
            </td>
            <td>
                <button
                    onClick={() => {
                        props.setVisibility("visible");
                        props.setAccountId(props.content.id);
                    }}
                >
                    Edit
                </button>
            </td>
        </tr>
    );
}
