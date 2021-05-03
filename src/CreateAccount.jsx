import React, { useState } from "react";

export default function CreateAccount(props) {
    // Define states
    const [pet_name, setPetName] = useState("");
    const [pet_photo, setPetPhoto] = useState(null);

    // Define event handlers
    const changePetName = (event) => {
        setPetName(event.target.value);
    };
    const changePetPhoto = (event) => {
        setPetPhoto(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(
            "http://localhost:1337/customers-and-pets",
            {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    pet_name: `${pet_name}`,
                    pet_photo: pet_photo,
                }),
            }
        );
        const content = await response.json();
        console.log(content);
        if (response.status === 200) {
            alert(`${pet_name} has been added!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    return (
        <div className="create_account">
            <form
                className="create_account_customer_registrition"
                onSubmit={handleSubmit}
            >
                <label htmlFor="pet_name">Pet Name:</label>
                <input
                    type="text"
                    name="pet_name"
                    id="pet_name"
                    value={pet_name}
                    onChange={changePetName}
                />

                <label htmlFor="pet_photo">Pet Photo:</label>
                <input
                    type="file"
                    name="pet_photo"
                    id="pet_photo"
                    accept="image/png, image/jpeg"
                    onChange={changePetPhoto}
                />
                <input type="submit" />
            </form>
        </div>
    );
}
