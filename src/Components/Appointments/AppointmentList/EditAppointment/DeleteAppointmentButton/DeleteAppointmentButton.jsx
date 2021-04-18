import React from "react";
import "./DeleteAppointmentButton.css"

function DeleteAppointmentButton(props) {
    // Define a function to delete an appointment
    const handleDelete = async () => {
        if (props.url && props.appointmentId) {
            const response = await fetch(
                `${props.url}events/${props.appointmentId}`,
                {
                    method: "DELETE",
                }
            );
            const content = await response.json();
            console.log(content);
        }
    };

    return (
        <button
            id="editAppointment_form_delete"
            onClick={() => {
                if (
                    window.confirm("Are you sure to delete this appointment? It CANNOT be recovered.")
                ) {
                    handleDelete();
                }
            }}
        >
            Delete this appointment
        </button>
    );
}

export default DeleteAppointmentButton;
