import React, { useState } from "react";
import "./AddPet.css";

export default function AddPet(props) {
    // Define states
    const [pet_name, setPetName] = useState("");
    const [pet_breed, setPetBreed] = useState("");
    const [pet_gender, setPetGender] = useState("male");
    const [pet_color, setPetColor] = useState("");
    const [pet_price, setPetPrice] = useState(0);

    // Define onChange event handler
    const changePetName = (event) => setPetName(event.target.value);
    const changePetBreed = (event) => setPetBreed(event.target.value);
    const changePetGender = (event) => setPetGender(event.target.value);
    const changePetColor = (event) => setPetColor(event.target.value);
    const changePetPrice = (event) => setPetPrice(event.target.value);

    console.log(pet_gender)

    // Define a function to update account information
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${props.url}pets-for-sales`, {
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
                pet_is_available: true,
            }),
        });
        const content = await response.json();
        console.log(content);
        // Tell user the data above is successfully submitted
        if (response.status === 200) {
            alert(`${pet_name} has been added!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    return (
        <div className="create_pet_for_sale">
            <h1>Add Pet to Store</h1>
            <form className="pet_for_sale_registrition" onSubmit={handleSubmit}>
                <label htmlFor="pet_name">Pet Name:</label>
                <input
                    type="text"
                    name="pet_name"
                    id="pet_name"
                    value={pet_name}
                    onChange={changePetName}
                />
                <label htmlFor="pet_breed">Pet Breed:</label>
                <input
                    type="text"
                    name="pet_breed"
                    id="pet_breed"
                    value={pet_breed}
                    onChange={changePetBreed}
                />
                <label htmlFor="pet_gender">Pet Gender:</label>
                <select
                    name="pet_gender"
                    onChange={changePetGender}
                    value={pet_gender}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label htmlFor="pet_color">Pet Color:</label>
                <input
                    type="text"
                    name="pet_color"
                    id="pet_color"
                    value={pet_color}
                    onChange={changePetColor}
                />
                <label htmlFor="pet_price">Pet Price:</label>
                <input
                    type="text"
                    name="pet_price"
                    id="pet_price"
                    value={pet_price}
                    onChange={changePetPrice}
                />
                <input type="submit" />
            </form>
        </div>
    );
}
