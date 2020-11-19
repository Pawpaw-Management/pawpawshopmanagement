import React, { useState, useEffect } from "react";
import "./InfoEditor.css";

export default function InfoEditor(props) {
    // Define states
    const [customer_first_name, setCustomerFirstName] = useState("");
    const [customer_last_name, setCustomerLastName] = useState("");
    const [customer_phone, setCustomerPhone] = useState("");
    const [customer_email, setCustomerEmail] = useState("");
    const [pet_name, setPetName] = useState("");
    const [pet_breed, setPetBreed] = useState("");
    const [pet_birthday, setPetBirthday] = useState("");
    const [pet_size, setPetSize] = useState("");
    const [pet_note, setPetNote] = useState("");

    // Define onChange event handler
    const changeFirstName = (event) => setCustomerFirstName(event.target.value);
    const changeLastName = (event) => setCustomerLastName(event.target.value);
    const changePhone = (event) => setCustomerPhone(event.target.value);
    const changeEmail = (event) => setCustomerEmail(event.target.value);
    const changePetName = (event) => setPetName(event.target.value);
    const changePetBreed = (event) => setPetBreed(event.target.value);
    const changePetBirthday = (event) => setPetBirthday(event.target.value);
    const changePetSize = (event) => setPetSize(event.target.value);
    const changePetNote = (event) => setPetNote(event.target.value);

    // When <InfoEditor> becomes visible, set input values to the current account information
    // 1. Define the current account
    const current_account =
        props.customers_and_pets.customers_and_pets &&
        props.customers_and_pets.customers_and_pets.find(
            (account) => account.id === props.accountId
        );

    // 2. Assign data from current_account to states when accountId changes
    useEffect(() => {
        if (current_account) {
            setCustomerFirstName(current_account.customer_first_name);
            setCustomerLastName(current_account.customer_last_name);
            setCustomerPhone(current_account.customer_phone);
            setCustomerEmail(current_account.customer_email);
            setPetBreed(current_account.pet_breed);
            setPetName(current_account.pet_name);
            setPetBirthday(current_account.pet_birthday);
            setPetSize(current_account.pet_size);
            setPetNote(current_account.pet_note);
        }
    }, [props.accountId]);

    // Define a function to update account information
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (props.url && props.accountId) {
            const response = await fetch(
                `${props.url}customers-and-pets/${props.accountI}`,
                {
                    method: "PUT",
                    headers: {
                        accept: "application/json",
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        customer_first_name: `${customer_first_name}`,
                        customer_last_name: `${customer_last_name}`,
                        customer_phone: `${customer_phone}`,
                        customer_email: `${customer_email}`,
                        pet_name: `${pet_name}`,
                        pet_breed: `${pet_breed}`,
                        pet_birthday: `${pet_birthday}`,
                        pet_size: `${pet_size}`,
                        pet_note: `${pet_note}`,
                    }),
                }
            );
            const content = await response.json();
            console.log(content);
            // Tell user the data above is successfully submitted
            if (content.statusCode === 200) {
                alert("Account Information Updated!");
            }
        }
    };

    return (
        <div className="infoEditor" style={{ visibility: props.visibility }}>
            <button
                id="infoEditor_esc"
                onClick={() => props.setVisibility("hidden")}
            >
                Esc
            </button>
            <form
                className="infoEditor_customer_registrition"
                onSubmit={handleSubmit}
            >
                <label for="customer_first_name"> First Name:</label>
                <input
                    type="text"
                    name="customer_first_name"
                    id="customer_first_name"
                    value={customer_first_name}
                    onChange={changeFirstName}
                />
                <label for="customer_last_name"> Last Name:</label>
                <input
                    type="text"
                    name="customer_last_name"
                    id="customer_last_name"
                    value={customer_last_name}
                    onChange={changeLastName}
                />
                <label for="customer_phone"> Phone Number:</label>
                <input
                    type="text"
                    name="customer_phone"
                    id="customer_phone"
                    value={customer_phone}
                    onChange={changePhone}
                />
                <label for="customer_email"> Email:</label>
                <input
                    type="email"
                    name="customer_email"
                    id="infoEditor_customer_email"
                    value={customer_email}
                    onChange={changeEmail}
                />
                <label for="pet_name">Pet's Name:</label>
                <input
                    type="text"
                    name="pet_name"
                    id="pet_name"
                    value={pet_name}
                    onChange={changePetName}
                />
                <label for="pet_birthday">Pet's Birthday:</label>
                <input
                    type="date"
                    name="pet_birthday"
                    id="pet_birthday"
                    value={pet_birthday}
                    onChange={changePetBirthday}
                />
                <label for="pet_breed">Pet's Breed:</label>
                <input
                    type="text"
                    name="pet_breed"
                    id="pet_breed"
                    value={pet_breed}
                    onChange={changePetBreed}
                />
                <label for="pet_size">Pet's Size:</label>
                <input
                    type="text"
                    name="pet_size"
                    id="pet_size"
                    value={pet_size}
                    onChange={changePetSize}
                />
                <label for="pet_note">Note:</label>
                <textarea
                    type="text"
                    name="pet_note"
                    id="infoEditor_pet_note"
                    value={pet_note}
                    onChange={changePetNote}
                />
                <input type="submit" id="infoEditor_submit" />
            </form>
        </div>
    );
}
