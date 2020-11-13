import React from "react";
import "./InfoEditor.css";

export default function InfoEditor(props) {
    // Define variables
    let customer_first_name,
        customer_last_name,
        customer_phone,
        customer_email,
        pet_breed,
        pet_name,
        pet_birthday,
        pet_size,
        pet_note;

    // When <InfoEditor> becomes visible, set input values to the current account information
    // 1. Define the current account
    const current_account =
        props.customers_and_pets.customers_and_pets &&
        props.customers_and_pets.customers_and_pets.find(
            (account) => account.id === props.accountId
        );
    // 2. Assign data from current_account to inputs' value
    customer_first_name = current_account.customer_first_name;
    customer_last_name = current_account.customer_last_name;
    customer_phone = current_account.customer_phone;
    customer_email = current_account.customer_email;
    pet_breed = current_account.pet_breed;
    pet_name = current_account.pet_name;
    pet_birthday = current_account.pet_birthday;
    pet_size = current_account.pet_size;
    pet_note = current_account.pet_note;

    // Define a function to update account information
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(
            `${this.props.url}customers-and-pets/${this.props.id}`,
            {
                method: "PUT",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    customer_first_name: `${this.customer_first_name.value}`,
                    customer_last_name: `${this.customer_last_name.value}`,
                    customer_phone: `${this.customer_phone.value}`,
                    customer_email: `${this.customer_email.value}`,
                    pet_name: `${this.pet_name.value}`,
                    pet_breed: `${this.pet_breed.value}`,
                    pet_birthday: `${this.pet_birthday.value}`,
                    pet_size: `${this.pet_size.value}`,
                    pet_note: `${this.pet_note.value}`,
                }),
            }
        );
        const content = await response.json();
        console.log(content);
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
                    ref={(input) => {
                        customer_first_name = input;
                    }}
                />
                <label for="customer_last_name"> Last Name:</label>
                <input
                    type="text"
                    name="customer_last_name"
                    id="customer_last_name"
                    value={customer_last_name}
                    ref={(input) => {
                        customer_last_name = input;
                    }}
                />
                <label for="customer_phone"> Phone Number:</label>
                <input
                    type="text"
                    name="customer_phone"
                    id="customer_phone"
                    value={customer_phone}
                    ref={(input) => {
                        customer_phone = input;
                    }}
                />
                <label for="customer_email"> Email:</label>
                <input
                    type="email"
                    name="customer_email"
                    id="infoEditor_customer_email"
                    value={customer_email}
                    ref={(input) => {
                        customer_email = input;
                    }}
                />
                <label for="pet_name">Pet's Name:</label>
                <input
                    type="text"
                    name="pet_name"
                    id="pet_name"
                    value={pet_name}
                    ref={(input) => {
                        pet_name = input;
                    }}
                />
                <label for="pet_birthday">Pet's Birthday:</label>
                <input
                    type="date"
                    name="pet_birthday"
                    id="pet_birthday"
                    value={pet_birthday}
                    ref={(input) => {
                        pet_birthday = input;
                    }}
                />
                <label for="pet_breed">Pet's Breed:</label>
                <input
                    type="text"
                    name="pet_breed"
                    id="pet_breed"
                    value={pet_breed}
                    ref={(input) => {
                        pet_breed = input;
                    }}
                />
                <label for="pet_size">Pet's Size:</label>
                <input
                    type="text"
                    name="pet_size"
                    id="pet_size"
                    value={pet_size}
                    ref={(input) => {
                        pet_size = input;
                    }}
                />
                <label for="pet_note">Note:</label>
                <textarea
                    type="text"
                    name="pet_note"
                    id="infoEditor_pet_note"
                    value={pet_note}
                    ref={(input) => {
                        pet_note = input;
                    }}
                />
                <input type="submit" id="infoEditor_submit" />
            </form>
        </div>
    );
}
