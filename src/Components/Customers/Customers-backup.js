import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount/CreateAccount";
import SearchAccount from "./SearchAndEditAccount/SearchAndEditAccount";
import CustomerAndPetInfo from "./SearchAndEditAccount/CustomerAndPetInfo/CustomerAndPetInfo";
import InfoEditor from "./SearchAndEditAccount/InfoEditor/InfoEditor";
import "../CommonElements.css";
import "./SearchAndEditAccount/SearchAndEditAccount.css";

function Customers(props) {
    // Define scenario to conditionally render content in <SearchAccount>
    const scenario = "Customers";

    // Define state for <Refresh> to update state here
    const [customers_and_pets, setCustomersAndPets] = useState([]);
    // console.log("customers_and_pets:", customers_and_pets);

    // Define state for <InfoEditor> to popup and disappear
    const [visibility, setVisibility] = useState(false);

    // Define state for <InfoEditor> to edit the account clicked by user
    const [accountId, setAccountId] = useState(33);

    // Define state for refresh button to re-fetch data
    const [refresh, setRefresh] = useState(true);

    // Define state and onChange handler for search bar
    const [phoneNumber, setPhoneNumber] = useState("");
    const changePhoneNumber = (event) => setPhoneNumber(event.target.value);
    var searchResult;
    if (phoneNumber !== "" && customers_and_pets !== []) {
        console.log(customers_and_pets[0].customer_phone.includes(phoneNumber));
        searchResult = customers_and_pets.filter((customer) => {
            if (customer.customer_phone) {
                return customer.customer_phone.includes(phoneNumber);
            }
        });
    }
    var customers_and_pets_filtered = phoneNumber === "" ? customers_and_pets : searchResult;
    console.log("searchResult", searchResult);
    console.log("==========");

    // When component mount, fetch latest data through API, and assign to "customers_and_pets"
    useEffect(() => {
        fetch(`${props.url}customers-and-pets?_limit=-1`)
            .then((response) => response.json())
            .then((response) => {
                setCustomersAndPets(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [refresh]);

    // Render elements according to scenario:
    // if "AddAppointment", show "choose" button, cannot edit data
    // if "Customers", show "edit" button, can edit data
    if (props.scenario === "AddAppointment") {
        return (
            <section className="searchAndEditCustomer appointmentWindow">
                <div className="search-customer-account">
                    <label htmlFor="customer__search-phone">Search</label>
                    <input
                        name="customer__search-phone"
                        value={phoneNumber}
                        onChange={changePhoneNumber}
                    />
                </div>
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
                        {customers_and_pets_filtered &&
                            customers_and_pets_filtered.map((content, index) => {
                                return (
                                    <CustomerAndPetInfo
                                        url={props.url}
                                        scenario={props.scenario}
                                        content={content}
                                        key={index}
                                        index={index}
                                        setCustomerId={props.setCustomerId}
                                        setVisibilityCustomer={props.setVisibilityCustomer}
                                    />
                                );
                            })}
                    </tbody>
                </table>
            </section>
        );
    } else if (scenario === "Customers") {
        return (
            <div>
                <Router>
                    <div className="customers">
                        <Switch>
                            <Route path="/create">
                                <CreateAccount url={props.url} />
                            </Route>
                            {/* <Route path="/search">
                                <SearchAccount url={props.url} scenario={scenario} />
                            </Route> */}
                        </Switch>
                        <nav className="nav-components">
                            <Link to="/create">
                                <button>Create New Customer Account</button>
                            </Link>
                            {/* <Link to="/search">
                                <button>Search/Edit Customer Account</button>
                            </Link> */}
                        </nav>
                    </div>
                </Router>                            



            <section className="searchAndEditCustomer">
                <div className="title-and-refresh-button">
                    <h1>All Customer Accounts</h1>
                    <button
                        className="refresh-button"
                        onClick={(e) => {
                            e.preventDefault();
                            setRefresh(!refresh);
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
                <div className="search-customer-account">
                    <label htmlFor="customer__search-phone">Search by Phone Number</label>
                    <input
                        name="customer__search-phone"
                        value={phoneNumber}
                        onChange={changePhoneNumber}
                    />
                </div>
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
                        {customers_and_pets_filtered &&
                            customers_and_pets_filtered.map((content, index) => {
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
                                        setVisibilityCustomer={props.setVisibilityCustomer}
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
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />
                ) : null}
            </section>
            </div>
        );
    }
}

export default Customers;
