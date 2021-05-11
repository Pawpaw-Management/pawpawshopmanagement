import React, { useState } from "react";
import "./CreateAccount.css";

export default function CreateAccount(props) {
    // define states
    const [customer_first_name, setCustomerFirstName] = useState("");
    const [customer_last_name, setCustomerLastName] = useState("");
    const [customer_phone, setPhone] = useState(0);
    const [customer_email, setEmail] = useState("");
    const [pet_name, setPetName] = useState("");
    const [pet_breed, setPetBreed] = useState("");
    const [pet_birthday, setBirthday] = useState("");
    const [pet_size, setPetSize] = useState("standard");
    const [pet_note, setPetNote] = useState("");
    const [pet_photo, setPetPhoto] = useState(null);

    // Define event handlers
    const changeCustomerFirstName = (event) => {
        setCustomerFirstName(event.target.value);
    };
    const changeCustomerLastName = (event) => {
        setCustomerLastName(event.target.value);
    };
    const changePhone = (event) => {
        setPhone(event.target.value);
    };
    const changeEmail = (event) => {
        setEmail(event.target.value);
    };
    const changePetName = (event) => {
        setPetName(event.target.value);
    };
    const changePetBreed = (event) => {
        setPetBreed(event.target.value);
    };
    const changeBirthday = (event) => {
        setBirthday(event.target.value);
    };
    const changePetSize = (event) => {
        setPetSize(event.target.value);
    };
    const changePetNote = (event) => {
        setPetNote(event.target.value);
    };
    const changePetPhoto = (event) => {
        setPetPhoto(event.target.files[0]);
    };

    var formdata = new FormData();
    if (pet_photo !== null) {
        formdata.append("files.pet_photo", pet_photo, pet_photo.name);
    }
    formdata.append(
        "data",
        JSON.stringify({
            customer_first_name: `${customer_first_name}`,
            customer_last_name: `${customer_last_name}`,
            customer_phone: customer_phone,
            customer_email: customer_email,
            pet_name: `${pet_name}`,
            pet_breed: `${pet_breed}`,
            pet_birthday: `${pet_birthday}`,
            pet_size: `${pet_size}`,
            pet_note: pet_note,
        })
    );

    var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(
            `${props.url}customers-and-pets`,
            requestOptions
        );
        if (response.status === 200) {
            alert(`Customer account successfully created!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    return (
        <div className="create_account">
            <h1>Create New Customer Account</h1>
            <form
                className="create_account_customer_registrition"
                onSubmit={handleSubmit}
            >
                <label htmlFor="customer_first_name"> First Name:</label>
                <input
                    type="text"
                    name="customer_first_name"
                    id="customer_first_name"
                    value={customer_first_name}
                    onChange={changeCustomerFirstName}
                />
                <label htmlFor="customer_last_name"> Last Name:</label>
                <input
                    type="text"
                    name="customer_last_name"
                    id="customer_last_name"
                    value={customer_last_name}
                    onChange={changeCustomerLastName}
                />
                <label htmlFor="customer_phone"> Phone Number:</label>
                <input
                    type="number"
                    name="customer_phone"
                    id="customer_phone"
                    value={customer_phone}
                    onChange={changePhone}
                />
                <label htmlFor="customer_email"> Email:</label>
                <input
                    type="email"
                    name="customer_email"
                    id="customer_email"
                    value={customer_email}
                    onChange={changeEmail}
                />
                <label htmlFor="pet_name">Pet Name:</label>
                <input
                    type="text"
                    name="pet_name"
                    id="pet_name"
                    value={pet_name}
                    onChange={changePetName}
                />
                <label htmlFor="pet_birthday">Pet Birthday:</label>
                <input
                    type="date"
                    name="pet_birthday"
                    id="pet_birthday"
                    value={pet_birthday}
                    onChange={changeBirthday}
                />
                <label htmlFor="pet_breed">Pet Breed:</label>
                <input
                    type="text"
                    name="pet_breed"
                    id="pet_breed"
                    value={pet_breed}
                    onChange={changePetBreed}
                />
                <label htmlFor="pet_size">Pet Size:</label>
                <select
                    type="text"
                    name="pet_size"
                    id="pet_size"
                    value={pet_size}
                    onChange={changePetSize}
                >
                    <option value="standard">Standard</option>
                    <option value="large">Large</option>
                    <option value="small">Small</option>
                </select>

                <label htmlFor="pet_note">Note:</label>
                <textarea
                    type="text"
                    name="pet_note"
                    id="pet_note"
                    value={pet_note}
                    onChange={changePetNote}
                />
                <label htmlFor="pet_photo">Pet Photo:</label>
                <input
                    type="file"
                    name="pet_photo"
                    id="pet_photo"
                    // value={pet_photo}
                    onChange={changePetPhoto}
                />
                <input type="submit" />
            </form>
        </div>
    );
}
