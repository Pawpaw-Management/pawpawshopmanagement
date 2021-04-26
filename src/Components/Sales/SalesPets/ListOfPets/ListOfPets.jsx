import React, { useState, useEffect } from "react";
import PetDetails from "./PetDetails/PetDetails";
import EditPet from "../EditPet/EditPet";
import "./ListOfPets.css";
import "../../../CommonElements.css";

export default function ListOfPets(props) {
    // Define useState for <Refresh> to update state here
    const [pets, setPets] = useState([]);

    // Define useState for <PetEditor> to popup and disappear
    const [visibility, setVisibility] = useState(false);

    // Define useState for <PetEditor> to edit the account clicked by user
    const [petId, setPetId] = useState(0);

    // When component mount, fetch latest data through API, and assign to "customers_and_pets"
    useEffect(() => {
        fetch(`${props.url}pets-for-sales`)
            .then((response) => response.json())
            .then((response) => {
                setPets(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(pets[0]);

    return (
        <section className="ListOfPets">
            <h1>All Pets In Store</h1>
            <table className="petList">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Pet Name</th>
                        <th>Breed</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {pets &&
                        pets.map((content, index) => {
                            return (
                                <PetDetails
                                    content={content}
                                    key={index}
                                    index={index}
                                    setVisibility={setVisibility}
                                    setPetId={setPetId}
                                />
                            );
                        })}
                </tbody>
            </table>

            {visibility ? (
                <EditPet
                    petId={petId}
                    url={props.url}
                    pets={pets}
                    setVisibility={setVisibility}
                />
            ) : (
                <div></div>
            )}
        </section>
    );
}
