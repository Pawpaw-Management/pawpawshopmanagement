import React, { useState, useEffect } from "react";
import CustomerAndPetInfo from "./CustomerAndPetInfo/CustomerAndPetInfo";
import InfoEditor from "./InfoEditor/InfoEditor";
import "./SearchAndEditAccount.css";
import "../../CommonElements.css";

const SearchAccount = (props) => {
    console.log("scenario: " + props.scenario);

    // Define useState for <Refresh> to update state here
    const [customers_and_pets, setCustomersAndPets] = useState([]);

    // Define useState for <InfoEditor> to popup and disappear
    const [visibility, setVisibility] = useState("hidden");

    // Define useState for <InfoEditor> to edit the account clicked by user
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

    if (props.scenario === "AddAppointment") {
        return (
            <section className="searchAndEditCustomer window">
                <h1>Customer List</h1>
                <button
                    className="button_esc"
                    onClick={() => {
                        props.setVisibilityCustomer(false);
                    }}
                >
                    Esc
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
