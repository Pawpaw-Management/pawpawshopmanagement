import React, { useState, useEffect } from "react";
import PetDetails from "./PetDetails/PetDetails";
import EditPet from "../EditPet/EditPet";
import SellPet from "../SellPet/SellPet";
import "./ListOfPets.css";
import "../../../CommonElements.css";

export default function ListOfPets(props) {
    // Define useState to update state here
    const [pets, setPets] = useState([]);

    // Define useState for <EditPet> to popup and disappear
    const [visibility_edit, setVisibilityEdit] = useState(false);

    // Define useState for <SellPet> to popup and disappear
    const [visibility_sell, setVisibilitySell] = useState(false);

    // Define useState for <EditPet> to edit the account clicked by user
    const [petId, setPetId] = useState(0);

    // When component mount, fetch latest data through API, and assign to "pets"
    useEffect(() => {
        fetch(`${props.url}pets-for-sales`)
            .then((response) => response.json())
            .then((response) => {
                setPets(response);
            })
            .catch((error) => {
                console.log(error);
            });
        // When user finish editting/selling, refresh the pet list.
    }, [visibility_edit, visibility_sell]);

    // console.log(pets[0]);

    return (
        <section className="ListOfPets">
            <h1>All Pets In Store</h1>
            <table className="petList">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Pet Name</th>
                        <th>Pet Photo</th>
                        <th>Breed</th>
                        <th>Price<br></br>(Must use format xx.xx)</th>
                    </tr>
                </thead>
                <tbody>
                    {pets &&
                        pets.map((content, index) => {
                            return (
                                <PetDetails
                                    url={props.url}
                                    content={content}
                                    key={index}
                                    index={index}
                                    setVisibilityEdit={setVisibilityEdit}
                                    setVisibilitySell={setVisibilitySell}
                                    setPetId={setPetId}
                                />
                            );
                        })}
                </tbody>
            </table>

            {visibility_edit ? (
                <EditPet
                    petId={petId}
                    url={props.url}
                    pets={pets}
                    setVisibilityEdit={setVisibilityEdit}
                />
            ) : (
                <div></div>
            )}

            {visibility_sell ? (
                <SellPet
                    petId={petId}
                    url={props.url}
                    pets={pets}
                    setVisibilitySell={setVisibilitySell}
                />
            ) : (
                <div></div>
            )}
        </section>
    );
}
