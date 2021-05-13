import React from "react";
import "./SendAppointmenReminder.css"

export default function SendAppointmenReminder(props) {
    console.log(props);
    return (
        <a id="send-email-reminder"
            href={`mailto:${props.appointment_customer_email}?subject=Friendly Reminder of Your Upcoming Appointment&body=%0D%0ADear ${props.appointment_customer_first_name} ${props.appointment_customer_last_name},
            %0D%0A%0D%0A
            This is a friendly reminder confirming your appointment on ${props.appointment_date} at ${props.appointment_time_start}. 
            %0D%0A%0D%0A
            If you have any questions or you need to reschedule, please call our office at 780-666-9920.
            %0D%0A%0D%0A
            Otherwise, we look forward to seeing you. Have a wonderful day!
            %0D%0A%0D%0A
            Warm regards,
            %0D%0A%0D%0A
            Pawpaw Spa Grooming`}
        >
            Send Email Reminder
        </a>
    );
}
