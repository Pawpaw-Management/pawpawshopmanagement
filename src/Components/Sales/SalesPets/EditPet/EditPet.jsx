import React, { useState, useEffect } from "react";
import "./EditPet.css";
import "../../../CommonElements.css"

export default function EditPet(props) {
    // Define states
    const [pet_name, setPetName] = useState("");
    const [pet_breed, setPetBreed] = useState("");
    const [pet_gender, setPetGender] = useState("");
    const [pet_color, setPetColor] = useState("");
    const [pet_price, setPetPrice] = useState(0);
    const [pet_is_available, setPetAvailability] = useState(true);

    // Define onChange event handler
    const changePetName = (event) => setPetName(event.target.value);
    const changePetBreed = (event) => setPetBreed(event.target.value);
    const changePetGender = (event) => setPetGender(event.target.value);
    const changePetColor = (event) => setPetColor(event.target.value);
    const changePetPrice = (event) => setPetPrice(event.target.value);
    const changePetAvailability = (event) => {
        if (event.target.value === "yes") {
            setPetAvailability(true);
        }
        if (event.target.value === "no") {
            setPetAvailability(false);
        }
    };
    
    // When <EditPet> becomes visible, set input values to the current account information
    // 1. Define the current account
    const current_pet =
        props.pets &&
        props.pets.find(
            (pet) => pet.id === props.petId
        );

    // 2. Assign data from current_account to states when accountId changes
    useEffect(() => {
        if (current_pet) {
            setPetName(current_pet.pet_name);
            setPetBreed(current_pet.pet_breed);
            setPetGender(current_pet.pet_gender);
            setPetColor(current_pet.pet_color);
            setPetPrice(current_pet.pet_price);
            setPetAvailability(current_pet.pet_is_available);
        }
    }, [props.petId]);

    // Define a function to update account information
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${props.url}pets-for-sales/${props.petId}`, {
            method: "PUT",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                pet_name: `${pet_name}`,
                pet_breed: `${pet_breed}`,
                pet_gender: `${pet_gender}`,
                pet_color: `${pet_color}`,
                pet_price: `${pet_price}`,
                pet_is_available: `${pet_is_available}`,
            }),
        });
        const content = await response.json();
        console.log(content);
        // Tell user the data above is successfully submitted
        if (response.status === 200) {
            alert(`${pet_name}'s profile has been modified!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    return (
        <div className="edit_pet_for_sale">
            <h1>Edit Pet Profile</h1>
            <button className="button_esc" onClick={() => props.setVisibilityEdit(false)}>X</button>
            <form className="pet_for_sale_registrition" onSubmit={handleSubmit}>
                <label for="pet_name">Pet Name:</label>
                <input
                    type="text"
                    name="pet_name"
                    id="pet_name"
                    value={pet_name}
                    onChange={changePetName}
                />
                <label for="pet_breed">Pet Breed:</label>
                <input
                    type="text"
                    name="pet_breed"
                    id="pet_breed"
                    value={pet_breed}
                    onChange={changePetBreed}
                />
                <label for="pet_gender">Pet Gender:</label>
                <input
                    type="text"
                    name="pet_gender"
                    id="pet_gender"
                    value={pet_gender}
                    onChange={changePetGender}
                />
                <label for="pet_color">Pet Color:</label>
                <input
                    type="text"
                    name="pet_color"
                    id="pet_color"
                    value={pet_color}
                    onChange={changePetColor}
                />
                <label for="pet_price">Pet Price:</label>
                <input
                    type="text"
                    name="pet_price"
                    id="pet_price"
                    value={pet_price}
                    onChange={changePetPrice}
                />
                <label for="pet_is_available">Pet Availability:</label>
                <select
                    type="checkbox"
                    name="pet_is_available"
                    id="pet_is_available"
                    onChange={changePetAvailability}
                >
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </select>
                <input type="submit"/>
            </form>
        </div>
    );
}
