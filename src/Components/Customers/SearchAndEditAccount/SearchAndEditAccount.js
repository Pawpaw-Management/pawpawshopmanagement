import React, { useState, useEffect, useRef } from "react";
import CustomerAndPetInfo from "./CustomerAndPetInfo/CustomerAndPetInfo";
import InfoEditor from "./InfoEditor/InfoEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import "./SearchAndEditAccount.css";
import "../../CommonElements.css";
import PaginationControl from "../../ReuseableComponents/PaginationControl";

const SearchAccount = (props) => {
    // Define state for <Refresh> to update state here
    const [customers_and_pets, setCustomersAndPets] = useState([]);

    // Define state for <InfoEditor> to popup and disappear
    const [visibility, setVisibility] = useState(false);

    // Define state for <InfoEditor> to edit the account clicked by user
    const [accountId, setAccountId] = useState(33);

    // Define state for refresh button to re-fetch data
    const [refresh, setRefresh] = useState(true);

    // Define a loading state
    const [loading, setLoading] = useState(false);

    // Define a state for page control
    const [currentPage, setCurrentPage] = useState(1);

    // Define state and onChange handler for search bar
    const [phoneNumber, setPhoneNumber] = useState("");
    const changePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };
    // If user press enter, call searchButtonCallback
    const checkKeyUpAndCallSearch = (event) => {
        if (event.key === "Enter") {
            searchByPhoneNumber();
        }
    };

    const [totalPageNumber, setTotalPageNumber] = useState();

    const numberOfItemsPerPage = 10;
    const currentItemNumber = (currentPage - 1) * numberOfItemsPerPage;

    const searchByPhoneNumber = () => {
        if (currentPage !== 1) {
            setCurrentPage(1);
        } else {
            setRefresh(!refresh);
        }
    };

    const fetchDataBasedOnPhoneNumberAndCurrentPage = async () => {
        setLoading(true);

        const phoneNumberIsValid = Number(phoneNumber) !== NaN || Number(phoneNumber) !== 0;
        const whereClause = phoneNumberIsValid
            ? `_where[_or][0][customer_phone_contains]=${phoneNumber}&_where[_or][1][customer_alternate_phone_contains]=${phoneNumber}`
            : "";

        const searchResponse = await fetch(
            `${props.url}customers-and-pets?${whereClause}&_start=${currentItemNumber}&_limit=${numberOfItemsPerPage}`
        );
        const searchData = await searchResponse.json();
        console.log("searchData: ", searchData);
        setCustomersAndPets(searchData);
        // Get data count
        const countResponse = await fetch(`${props.url}customers-and-pets/count?${whereClause}`);
        const countData = await countResponse.json();
        const countDataToNumber = Number(countData);
        console.log("countData: ", countData);
        const numberOfPages =
            numberOfItemsPerPage == 0 ? 0 : Math.ceil(countDataToNumber / numberOfItemsPerPage);
        setTotalPageNumber(numberOfPages);
        setLoading(false);
    };

    // When component mount, fetch data and assign to "customers_and_pets"
    useEffect(() => {
        fetchDataBasedOnPhoneNumberAndCurrentPage();
    }, [numberOfItemsPerPage, currentPage, refresh]);

    // Render elements according to scenario:
    // if "AddAppointment", show "choose" button, cannot edit data
    // if "Customers", show "edit" button, can edit data
    if (props.scenario === "AddAppointment") {
        return (
            <section className="searchAndEditCustomer appointmentWindow">
                <div className="search-customer-account">
                    <label htmlFor="customer__search-phone">Search by Phone Number</label>
                    <input
                        name="customer__search-phone"
                        value={phoneNumber}
                        onChange={changePhoneNumber}
                        onKeyUp={checkKeyUpAndCallSearch}
                    />
                    <button onClick={searchByPhoneNumber} className="search-phone-button">
                        {loading ? (
                            <FontAwesomeIcon icon={faCircleNotch} className="search-spinner" />
                        ) : (
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        )}
                    </button>
                </div>
                <PaginationControl setCurrentPage={setCurrentPage} currentPage={currentPage} />
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
                            <th>Phone #2</th>
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
                                        setVisibilityCustomer={props.setVisibilityCustomer}
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
                    <h1>All Customer </h1>
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
                        onKeyUp={checkKeyUpAndCallSearch}
                    />
                    <button onClick={searchByPhoneNumber} className="search-phone-button">
                        {loading ? (
                            <FontAwesomeIcon icon={faCircleNotch} className="search-spinner" />
                        ) : (
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        )}
                    </button>
                </div>
                <PaginationControl
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    totalPageNumber={totalPageNumber}
                />
                <table className="customerList">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer Name</th>
                            <th>Pet Photo</th>
                            <th>Phone</th>
                            <th>Phone #2</th>
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
        );
    }
};

export default SearchAccount;
