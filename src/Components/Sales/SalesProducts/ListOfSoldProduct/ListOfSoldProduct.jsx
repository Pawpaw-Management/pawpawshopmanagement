import React, { useState, useEffect } from "react";
import SoldPetDetails from "./SoldProductDetails/SoldProductDetails";
import "./ListOfSoldPet.css";
import "../../../CommonElements.css";

export default function ListOfSoldPet(props) {
    // Define useState to update state here
    const [sold_pets, setSoldPets] = useState([]);

    // When component mount, fetch latest data through API, and assign to "sold_pets"
    useEffect(() => {
        fetch(`${props.url}pets-solds`)
            .then((response) => response.json())
            .then((response) => {
                setSoldPets(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(sold_pets)

    return (
        <section className="ListOfSoldPets">
            <h1>Pets That Have New Home</h1>
            <table className="PetList">
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Breed</th>
                        <th>New Owner</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sold_pets &&
                        sold_pets.map((content, index) => {
                            return (
                                <SoldPetDetails
                                    content={content}
                                    key={index}
                                    index={index}
                                />
                            );
                        })}
                </tbody>
            </table>
        </section>
    );
}
