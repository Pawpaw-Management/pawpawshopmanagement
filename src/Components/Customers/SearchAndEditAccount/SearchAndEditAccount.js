import React, { useState, useEffect } from "react";
import CustomerAndPetInfo from "./CustomerAndPetInfo/CustomerAndPetInfo";
import InfoEditor from "./InfoEditor/InfoEditor";
import "./SearchAndEditAccount.css";

const SearchAccount = (props) => {
    // Define useState for <Refresh> to update state here
    const [customers_and_pets, setCustomersAndPets] = useState([]);

    // Define useState for <InfoEditor> to popup and disappear
    const [visibility, setVisibility] = useState("hidden");

    // Define useState for <InfoEditor> to edit the account clicked by user
    const [accountId, setAccountId] = useState(29);
    console.log(`accountId: ${accountId}`);

    // When component mount, fetch latest data through API, and assign to "customers_and_pets"
    useEffect(() => {
        fetch(`${props.url}customers-and-pets`)
            .then((response) => response.json())
            .then((response) => {
                setCustomersAndPets({ customers_and_pets: response });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Shorten the long name
    const info = customers_and_pets.customers_and_pets;

    return (
        <section className="searchCustomer">
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
                    {info &&
                        info.map((content, index) => {
                            return (
                                <CustomerAndPetInfo
                                    content={content}
                                    key={index}
                                    index={index}
                                    setVisibility={setVisibility}
                                    setAccountId={setAccountId}
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
};

export default SearchAccount;
