import React, { useState, useEffect } from "react";
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
    const [pet_photo_url, setPhotoURL] = useState("");
    const [originalMonthlyIncome, setOriginalMonthlyIncome] = useState(0);

    var updatedMonthlyIncome = originalMonthlyIncome + pet_price;

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

    // When <SellPet> becomes visible, fetch value from income-months and assign it to originalMonthlyIncome
    useEffect(() => {
        fetch(`${props.url}income-months`)
            .then((response) => response.json())
            .then((response) => {
                setOriginalMonthlyIncome(response[0].value);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // When <SellPet> becomes visible, set input values to the current account information
    // 1. Define the current account
    const current_pet =
        props.pets && props.pets.find((pet) => pet.id === props.petId);
    console.log(current_pet.pet_photo.url);

    // 2. Assign data from current_account to states when accountId changes
    useEffect(() => {
        if (current_pet) {
            setPetName(current_pet.pet_name);
            setPetBreed(current_pet.pet_breed);
            setPetGender(current_pet.pet_gender);
            setPetColor(current_pet.pet_color);
            setPetPrice(current_pet.pet_price);
            if (current_pet.pet_photo !== null) {
                setPhotoURL(current_pet.pet_photo.url);
            } else {
                setPhotoURL("none");
            }
        }
    }, [props.petId]);

    // Define a function to post data to income-histories
    const handlePostToIncomeHistory = async () => {
        if (props.url && props.productId) {
            const response = await fetch(`${props.url}income-histories`, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    date: `${purchase_date}`,
                    income: pet_price,
                    type: "sales",
                    description: `${pet_name} had a new home. (${pet_gender}, ${pet_color}, ${pet_breed})`,
                }),
            });
        }
    };

    // Update monthly income info
    const handleUpdateMonthlyIncome = async () => {
        const response = await fetch(`${props.url}income-months/1`, {
            method: "PUT",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                value: updatedMonthlyIncome,
            }),
        });
    };

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
                    pet_photo_url: `${pet_photo_url}`,
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
                    onClick={(e) => {
                        e.preventDefault();
                        props.setVisibilitySell(false);
                    }}
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
                    if (window.confirm(`Are you sure? It CANNOT be undone.`)) {
                        props.setVisibilitySell(false);
                        handlePostToIncomeHistory();
                        handleUpdateMonthlyIncome();
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
