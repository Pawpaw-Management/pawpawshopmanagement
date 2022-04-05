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
    const [appointment_service_provider_ids, setProviderIds] = useState([]);
    const [appointment_service_provider_id1, setProviderId1] = useState(-1);
    const [appointment_service_provider_id2, setProviderId2] = useState(-1);
    const [appointment_service_provider_id3, setProviderId3] = useState(-1);
    // console.log("main component");
    console.log(appointment_service_provider_ids);

    // Update appointment_service_provider_ids when appointment_service_provider_id1, appointment_service_provider_id2, appointment_service_provider_id3 changes
    useEffect(() => {
        setProviderIds([
            appointment_service_provider_id1,
            appointment_service_provider_id2,
            appointment_service_provider_id3,
        ]);
    }, [
        appointment_service_provider_id1,
        appointment_service_provider_id2,
        appointment_service_provider_id3,
    ]);

    // Define states for component display
    const [shouldShowCustomer, setVisibilityCustomer] = useState(false);
    const [shouldShowProvider1, setVisibilityProvider1] = useState(false);
    const [shouldShowProvider2, setVisibilityProvider2] = useState(false);
    const [shouldShowProvider3, setVisibilityProvider3] = useState(false);

    // Define functions to set corresponding id or visibility
    const setProviderId = (num, id) => {
        if (num === 1) {
            setProviderId1(id);
        }
        if (num === 2) {
            setProviderId2(id);
        }
        if (num === 3) {
            setProviderId3(id);
        }
    };

    const setVisibility = (num) => {
        if (num === 1) {
            setVisibilityProvider1(false);
        }
        if (num === 2) {
            setVisibilityProvider2(false);
        }
        if (num === 3) {
            setVisibilityProvider3(false);
        }
    };

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
    //     "appointment_service_provider_ids: " + appointment_service_provider_ids
    // );
    // console.log("appointment_service: " + appointment_service)

    // const [myArray, setMyArray] = useState([]);
    // const arrayAddItem = (newItem) => {
    //     setMyArray(...myArray, newItem);
    // };
    // const arrayDeleteItem = (targetItem) => {
    //     setMyArray(myArray.slice(myArray.indexOf(targetItem), 1));
    // };

    // Define onChange event handlers for the <input>s
    const changeTimeStart = (event) => setTimeStart(event.target.value);
    const changeTimeEnd = (event) => setTimeEnd(event.target.value);
    const changeService = (event) => setService(event.target.value);

    // // Define a function to add item to the array "appointment_service_provider_ids".
    // const arrayAddItem = (newItem) => {
    //     setProviderIds([...appointment_service_provider_ids, newItem]);
    // };

    // // Define a function to delete item from the array "appointment_service_provider_ids"
    // const arrayDeleteItem = (targetItem) => {
    //     setProviderIds(
    //         appointment_service_provider_ids.slice(appointment_service_provider_ids.indexOf(targetItem), 1)
    //     );
    // };

    // // Define a function to tell system when to arrayAddItem() and when to arrayDeleteItem()
    // const arrayToggleCheckbox = (
    //     isChecked,
    //     newItem,
    //     targetItem
    // ) => {
    //     if (isChecked) {
    //         arrayAddItem(appointment_service_provider_ids, newItem);
    //     }
    //     if (!isChecked) {
    //         if (appointment_service_provider_ids.includes(targetItem)) {
    //             arrayDeleteItem(appointment_service_provider_ids, targetItem);
    //         }
    //     }
    // };

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
                    appointment_service_provider_ids:
                        appointment_service_provider_ids,
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
    var providerList1, providerList2, providerList3;
    if (shouldShowProvider1) {
        providerList1 = (
            <ProviderList
                url={props.url}
                scenario={scenario}
                setProviderId={setProviderId}
                setVisibility={setVisibility}
                num={1}
                // arrayToggleCheckbox={arrayToggleCheckbox}
                // arrayAddItem={arrayAddItem}
                // arrayDeleteItem={arrayDeleteItem}
            />
        );
    } else {
        providerList1 = <div></div>;
    }

    if (shouldShowProvider2) {
        providerList2 = (
            <ProviderList
                url={props.url}
                scenario={scenario}
                setProviderId={setProviderId}
                setVisibility={setVisibility}
                num={2}
            />
        );
    } else {
        providerList2 = <div></div>;
    }

    if (shouldShowProvider3) {
        providerList1 = (
            <ProviderList
                url={props.url}
                scenario={scenario}
                setProviderId={setProviderId}
                setVisibility={setVisibility}
                num={3}
            />
        );
    } else {
        providerList3 = <div></div>;
    }

    return (
        <div className="addAppointment">
            <form className="addAppointment_form" onSubmit={handleSubmit}>
                <label htmlFor="appointment_time_start">
                    From (time format must be xx:xx)
                </label>
                <input
                    type="text"
                    name="appointment_time_start"
                    id="appointment_time_start"
                    value={appointment_time_start}
                    onChange={changeTimeStart}
                />
                <label htmlFor="appointment_time_end">To</label>
                <input
                    type="text"
                    name="appointment_time_end"
                    id="appointment_time_end"
                    value={appointment_time_end}
                    onChange={changeTimeEnd}
                />
                <label htmlFor="appointment_service">Service</label>
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
                            setVisibilityCustomer(true);
                        }}
                    >
                        Choose Customer
                    </button>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            setVisibilityProvider1(true);
                        }}
                    >
                        Choose Service Provider #1
                    </button>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            setVisibilityProvider2(true);
                        }}
                    >
                        Choose Service Provider #2
                    </button>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            setVisibilityProvider3(true);
                        }}
                    >
                        Choose Service Provider #3
                    </button>
                </div>
                <input
                    type="submit"
                    id="editAppointment_submit"
                    value="Book Appointment"
                />
            </form>
            {providerList1}
            {providerList2}
            {providerList3}
            {customerList}
        </div>
    );
}
