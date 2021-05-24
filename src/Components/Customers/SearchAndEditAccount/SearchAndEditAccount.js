import React, { useState, useEffect } from "react";
import CustomerAndPetInfo from "./CustomerAndPetInfo/CustomerAndPetInfo";
import InfoEditor from "./InfoEditor/InfoEditor";
import "./SearchAndEditAccount.css";
import "../../CommonElements.css";

const SearchAccount = (props) => {
    // Define state for <Refresh> to update state here
    const [customers_and_pets, setCustomersAndPets] = useState([]);

    // Define state for <InfoEditor> to popup and disappear
    const [visibility, setVisibility] = useState(false);

    // Define state for <InfoEditor> to edit the account clicked by user
    const [accountId, setAccountId] = useState(33);

    // // W.I.P.
    // // Define state and onChange handler for search bar
    // const [namePhoneEmail, setNamePhoneEmail] = useState("");
    // const changeNamePhoneEmail = (event) =>
    //     setNamePhoneEmail(event.target.value);
    // var searchResult;
    // if (namePhoneEmail !== "" && customers_and_pets !== []) {
    //     console.log(customers_and_pets[0].customer_first_name);
    //     console.log(customers_and_pets[0].customer_first_name.toLowerCase().includes("a"));
    //     searchResult = customers_and_pets.filter((customer) => {
    //         // console.log(customer.customer_first_name.toLowerCase().includes("a"))
    //         // console.log("namePhoneEmail: " + namePhoneEmail)
    //         customer.customer_first_name
    //             .toLowerCase()
    //             .includes("a".toLowerCase());
    //     });
    // }
    // var customers_and_pets_filtered =
    //     namePhoneEmail === "" ? customers_and_pets : searchResult;
    // console.log(namePhoneEmail !== "" && customers_and_pets !== []);
    // console.log("searchResult");
    // console.log(searchResult);
    // console.log("==========");
    // // W.I.P.

    // Define a function to fetch latest data through API, and assign to "customers_and_pets"
    const fetchData = () => {
        fetch(`${props.url}customers-and-pets`)
            .then((response) => response.json())
            .then((response) => {
                setCustomersAndPets(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                {/* <div className="search-customer-account">
                    <label htmlFor="customer__name-phone-email">Search</label>
                    <input
                        name="customer__name-phone-email"
                        value={namePhoneEmail}
                        onChange={changeNamePhoneEmail}
                    />
                </div> */}
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
                <div className="title-and-refresh-button">
                    <h1>All Customer Accounts</h1>
                    <button
                        className="refresh-button"
                        onClick={(e) => {
                            e.preventDefault();
                            fetchData();
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z" />
                        </svg>
                    </button>
                </div>
                {/* <div className="search-customer-account">
                    <label htmlFor="customer__name-phone-email">Search</label>
                    <input
                        name="customer__name-phone-email"
                        value={namePhoneEmail}
                        onChange={ChangeNamePhoneEmail}
                    />
                </div> */}
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
                {visibility ? (
                    <InfoEditor
                        accountId={accountId}
                        url={props.url}
                        customers_and_pets={customers_and_pets}
                        setVisibility={setVisibility}
                    />
                ) : null}
            </section>
        );
    }
};

export default SearchAccount;
