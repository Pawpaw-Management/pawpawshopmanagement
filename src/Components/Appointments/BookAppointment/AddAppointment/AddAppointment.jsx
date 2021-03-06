import React, { useState, useEffect } from "react";
import CustomerList from "../../../Customers/SearchAndEditAccount/SearchAndEditAccount";
import ProviderList from "../../../Employees/SearchAndEditEmployee/SearchAndEditEmployee";
import "./AddAppointment.css";

export default function AddAppointment(props) {
    // Define states for posting data
    const [appointment_time_start, setTimeStart] = useState("");
    const [appointment_time_end, setTimeEnd] = useState("");
    const [appointment_service, setService] = useState("");
    const [appointment_customer_id, setCustomerId] = useState(33);
    const [appointment_service_provider_id, setProviderId] = useState(9);

    // Define states for component display
    const [shouldShowCustomer, setVisibilityCustomer] = useState(false);
    const [shouldShowProvider, setVisibilityProvider] = useState(false);

    // Define a const to pass to <CustomerList> & <ProviderList> and control their content
    const scenario = "AddAppointment";

    // Change the format of selectedDate to match server data format
    const appointment_date = props.selectedDate.format("YYYY-MM-DD");

    // console.log("appointment_date: " + appointment_date);
    // console.log(
    //     "appointment_time_start: " + `${appointment_time_start + ":00.000"}`
    // );
    // console.log(
    //     "appointment_time_end: " + `${appointment_time_end + ":00.000"}`
    // );
    // console.log("appointment_customer_id: " + appointment_customer_id);
    // console.log(
    //     "appointment_service_provider_id: " + appointment_service_provider_id
    // );
    // console.log("appointment_service: " + appointment_service)

    // Define onChange event handlers for the <input>s
    const changeTimeStart = (event) => setTimeStart(event.target.value);
    const changeTimeEnd = (event) => setTimeEnd(event.target.value);
    const changeService = (event) => setService(event.target.value);

    // Define a function to post appointment information on server
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (props.url) {
            const response = await fetch(`${props.url}events`, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    appointment_date: `${appointment_date}`,
                    appointment_time_start: `${appointment_time_start}`,
                    appointment_time_end: `${appointment_time_end}`,
                    appointment_service: `${appointment_service}`,
                    appointment_customer_id: `${appointment_customer_id}`,
                    appointment_service_provider_id: `${appointment_service_provider_id}`,
                }),
            });
            const content = await response.json();
            // Tell user the data above is successfully submitted
            if (response.status === 200) {
                alert("Appointment Booked Successfully!");
            } else {
                alert("Error! Please make sure database is running properly.");
            }
        }
    };

    // Render <CustomerList/> only when user clicks "choose customer" buttom
    var customerList;
    if (shouldShowCustomer) {
        customerList = (
            <CustomerList
                url={props.url}
                appointment_customer_id={appointment_customer_id}
                scenario={scenario}
                setCustomerId={setCustomerId}
                setVisibilityCustomer={setVisibilityCustomer}
            />
        );
    } else {
        customerList = <div></div>;
    }

    // Render <ProviderList/> only when use clicks "choose Provider" buttom
    var providerList;
    if (shouldShowProvider) {
        providerList = (
            <ProviderList
                url={props.url}
                appointment_service_provider_id={
                    appointment_service_provider_id
                }
                scenario={scenario}
                setProviderId={setProviderId}
                setVisibilityProvider={setVisibilityProvider}
            />
        );
    } else {
        providerList = <div></div>;
    }

    return (
        <div className="addAppointment">
            <form className="addAppointment_form" onSubmit={handleSubmit}>
                <label for="appointment_time_start">
                    From (time format must be xx:xx)
                </label>
                <input
                    type="text"
                    name="appointment_time_start"
                    id="appointment_time_start"
                    value={appointment_time_start}
                    onChange={changeTimeStart}
                />
                <label for="appointment_time_end">To</label>
                <input
                    type="text"
                    name="appointment_time_end"
                    id="appointment_time_end"
                    value={appointment_time_end}
                    onChange={changeTimeEnd}
                />
                <label for="appointment_service">Service</label>
                <textarea
                    type="text"
                    name="appointment_service"
                    id="appointment_service"
                    value={appointment_service}
                    onChange={changeService}
                />
                <div id="addAppointment_form--choose">
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            setVisibilityProvider(true);
                        }}
                    >
                        Choose Service Provider
                    </button>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            setVisibilityCustomer(true);
                        }}
                    >
                        Choose Customer
                    </button>
                </div>
                <input
                    type="submit"
                    id="editAppointment_submit"
                    value="Book Appointment"
                />
            </form>
            {providerList}
            {customerList}
        </div>
    );
}
