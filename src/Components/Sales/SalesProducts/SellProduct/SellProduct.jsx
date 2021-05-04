import React, { useState, useEffect } from "react";
import moment from "moment";
import "./SellPet.css";
import "../../../CommonElements.css";

export default function SellPet(props) {
    // Define states
    const [pet_name, setPetName] = useState("");
    const [pet_breed, setPetBreed] = useState("");
    const [pet_gender, setPetGender] = useState("");
    const [pet_color, setPetColor] = useState("");
    const [pet_price, setPetPrice] = useState(null);
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState("");

    // Define the date of today as purchase_date
    var purchase_date = new Date();
    var dd = String(purchase_date.getDate()).padStart(2, "0");
    var mm = String(purchase_date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = purchase_date.getFullYear();
    purchase_date = mm + "/" + dd + "/" + yyyy;
    console.log("purchase_date: " + purchase_date);

    // Define onChange event handler
    const changeFirstName = (event) => setFirstName(event.target.value);
    const changeLastName = (event) => setLastName(event.target.value);
    const changePhone = (event) => setPhone(event.target.value);
    const changeEmail = (event) => setEmail(event.target.value);

    // When <EditPet> becomes visible, set input values to the current account information
    // 1. Define the current account
    const current_pet =
        props.pets && props.pets.find((pet) => pet.id === props.petId);

    // 2. Assign data from current_account to states when accountId changes
    useEffect(() => {
        if (current_pet) {
            setPetName(current_pet.pet_name);
            setPetBreed(current_pet.pet_breed);
            setPetGender(current_pet.pet_gender);
            setPetColor(current_pet.pet_color);
            setPetPrice(current_pet.pet_price);
        }
    }, [props.petId]);

    // Define a function to post data
    const handleTransferToSold = async () => {
        if (props.url && props.petId) {
            const response = await fetch(`${props.url}pets-solds`, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    pet_name: `${pet_name}`,
                    pet_breed: `${pet_breed}`,
                    pet_gender: `${pet_gender}`,
                    pet_color: `${pet_color}`,
                    pet_price: pet_price,
                    first_name: `${first_name}`,
                    last_name: `${last_name}`,
                    phone: phone,
                    email: `${email}`,
                    purchase_date: `${purchase_date}`,
                }),
            });
        }
    };

    // Define a function to delete an pet profile
    const handleDelete = async () => {
        if (props.url && props.petId) {
            const response = await fetch(
                `${props.url}pets-for-sales/${props.petId}`,
                {
                    method: "DELETE",
                }
            );
            const content = await response.json();
            console.log(content);
        }
    };

    return (
        <div id="SellPet__Customer-Info-Form" className="window">
            <div>
                <p>Please enter customer information</p>
                <button
                    className="button_esc"
                    onClick={() => props.setVisibilitySell(false)}
                >
                    X
                </button>
                <div id="SellPet__Customer-Info-Form__form">
                    <div className="input-and-label">
                        <label htmlFor="firstname">first name</label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            onChange={changeFirstName}
                        />
                    </div>
                    <div className="input-and-label">
                        <label htmlFor="lastname">last name</label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            onChange={changeLastName}
                        />
                    </div>
                    <div className="input-and-label">
                        <label htmlFor="phone">phone</label>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            onChange={changePhone}
                        />
                    </div>
                    <div className="input-and-label">
                        <label htmlFor="email">email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={changeEmail}
                        />
                    </div>
                </div>
            </div>
            <button
                onClick={() => {
                    if (
                        window.confirm(
                            "Are you sure to sell {pet_name}? It CANNOT be recovered."
                        )
                    ) {
                        props.setVisibilitySell(false);
                        handleTransferToSold();
                        handleDelete();
                    }
                }}
            >
                Confirm
            </button>
        </div>
    );
}
