import React, { useState, useEffect } from "react";
import CustomerAndPetInfo from "./CustomerAndPetInfo/CustomerAndPetInfo";
import InfoEditor from "./InfoEditor/InfoEditor";
import "./SearchAndEditAccount.css";
import "../../CommonElements.css";

const SearchAccount = (props) => {
    // Define state for <Refresh> to update state here
    const [customers_and_pets, setCustomersAndPets] = useState([]);

    // Define state for <InfoEditor> to popup and disappear
    const [visibility, setVisibility] = useState("hidden");

    // Define state for <InfoEditor> to edit the account clicked by user
    const [accountId, setAccountId] = useState(33);
    console.log(`accountId: ${accountId}`);

    // When component mount, fetch latest data through API, and assign to "customers_and_pets"
    useEffect(() => {
        fetch(`${props.url}customers-and-pets`)
            .then((response) => response.json())
            .then((response) => {
                setCustomersAndPets(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Render elements according to scenario:
    // if "AddAppointment", show "choose" button, cannot edit data
    // if "Customers", show "edit" button, can edit data
    if (props.scenario === "AddAppointment") {
        return (
            <section className="searchAndEditCustomer appointmentWindow">
                <h1>Customer List</h1>
                <button
                    className="button_esc"
                    onClick={() => {
                        props.setVisibilityCustomer(false);
                    }}
                >
                    X
                </button>
                <table className="customerList">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers_and_pets &&
                            customers_and_pets.map((content, index) => {
                                return (
                                    <CustomerAndPetInfo
                                        url={props.url}
                                        scenario={props.scenario}
                                        content={content}
                                        key={index}
                                        index={index}
                                        setCustomerId={props.setCustomerId}
                                        setVisibilityCustomer={
                                            props.setVisibilityCustomer
                                        }
                                    />
                                );
                            })}
                    </tbody>
                </table>
            </section>
        );
    } else if (props.scenario === "Customers") {
        return (
            <section className="searchAndEditCustomer">
                <h1>All Customer Accounts</h1>
                <table className="customerList">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer Name</th>
                            <th>Pet Photo</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers_and_pets &&
                            customers_and_pets.map((content, index) => {
                                return (
                                    <CustomerAndPetInfo
                                        scenario={props.scenario}
                                        content={content}
                                        key={index}
                                        index={index}
                                        url={props.url}
                                        // setVisibility and setAccountId are called in <InfoEditor>
                                        setVisibility={setVisibility}
                                        setAccountId={setAccountId}
                                        // setVisibilityCustomer and setCustomerId are for <AddAppointment>
                                        setVisibilityCustomer={
                                            props.setVisibilityCustomer
                                        }
                                        setCustomerId={props.setCustomerId}
                                    />
                                );
                            })}
                    </tbody>
                </table>
                <InfoEditor
                    visibility={visibility}
                    accountId={accountId}
                    url={props.url}
                    customers_and_pets={customers_and_pets}
                    setVisibility={setVisibility}
                />
            </section>
        );
    }
};

export default SearchAccount;
