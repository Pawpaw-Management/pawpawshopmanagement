import React, { useState } from "react";
import "./CreateAccount.css";

export default function CreateAccount(props) {
    // define states
    const [customer_first_name, setCustomerFirstName] = useState("");
    const [customer_last_name, setCustomerLastName] = useState("");
    const [customer_phone, setPhone] = useState();
    const [customer_email, setEmail] = useState("");
    const [pet_name, setPetName] = useState("");
    const [pet_breed, setPetBreed] = useState("");
    const [pet_birthday, setBirthday] = useState("");
    const [pet_size, setPetSize] = useState("Small");
    const [pet_shampoo, setPetShampoo] = useState("Rose");
    const [pet_gender, setPetGender] = useState("Male");
    const [pet_is_neutered, setPetIsNeutered] = useState("Yes");
    const [pet_note, setPetNote] = useState("");
    const [pet_photo, setPetPhoto] = useState(null);
    const [pet_name2, setPetName2] = useState("");
    const [pet_breed2, setPetBreed2] = useState("");
    const [pet_birthday2, setBirthday2] = useState("");
    const [pet_size2, setPetSize2] = useState("Small");
    const [pet_shampoo2, setPetShampoo2] = useState("Rose");
    const [pet_gender2, setPetGender2] = useState("Male");
    const [pet_is_neutered2, setPetIsNeutered2] = useState("Yes");
    const [pet_note2, setPetNote2] = useState("");
    const [pet_photo2, setPetPhoto2] = useState(null);
    const [pet_name3, setPetName3] = useState("");
    const [pet_breed3, setPetBreed3] = useState("");
    const [pet_birthday3, setBirthday3] = useState("");
    const [pet_size3, setPetSize3] = useState("Small");
    const [pet_shampoo3, setPetShampoo3] = useState("Rose");
    const [pet_gender3, setPetGender3] = useState("Male");
    const [pet_is_neutered3, setPetIsNeutered3] = useState("Yes");
    const [pet_note3, setPetNote3] = useState("");
    const [pet_photo3, setPetPhoto3] = useState(null);
    const [pet_name4, setPetName4] = useState("");
    const [pet_breed4, setPetBreed4] = useState("");
    const [pet_birthday4, setBirthday4] = useState("");
    const [pet_size4, setPetSize4] = useState("Small");
    const [pet_shampoo4, setPetShampoo4] = useState("Rose");
    const [pet_gender4, setPetGender4] = useState("Male");
    const [pet_is_neutered4, setPetIsNeutered4] = useState("Yes");
    const [pet_note4, setPetNote4] = useState("");
    const [pet_photo4, setPetPhoto4] = useState(null);
    // states for adding more pet(s)
    const [wouldAddPet2, setWouldAddPet2] = useState(false);
    const [wouldAddPet3, setWouldAddPet3] = useState(false);
    const [wouldAddPet4, setWouldAddPet4] = useState(false);

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
    const changePetShampoo = (event) => {
        setPetShampoo(event.target.value);
    };
    const changePetGender = (event) => {
        setPetGender(event.target.value);
    };
    const changePetIsNeutered = (event) => {
        setPetIsNeutered(event.target.value);
    };
    const changePetNote = (event) => {
        setPetNote(event.target.value);
    };
    const changePetPhoto = (event) => {
        setPetPhoto(event.target.files[0]);
    };
    // Pet #2
    const changePetName2 = (event) => {
        setPetName2(event.target.value);
    };
    const changePetBreed2 = (event) => {
        setPetBreed2(event.target.value);
    };
    const changeBirthday2 = (event) => {
        setBirthday2(event.target.value);
    };
    const changePetSize2 = (event) => {
        setPetSize2(event.target.value);
    };
    const changePetShampoo2 = (event) => {
        setPetShampoo2(event.target.value);
    };
    const changePetGender2 = (event) => {
        setPetGender2(event.target.value);
    };
    const changePetIsNeutered2 = (event) => {
        setPetIsNeutered2(event.target.value);
    };
    const changePetNote2 = (event) => {
        setPetNote2(event.target.value);
    };
    const changePetPhoto2 = (event) => {
        setPetPhoto2(event.target.files[0]);
    };
    // Pet #3
    const changePetName3 = (event) => {
        setPetName3(event.target.value);
    };
    const changePetBreed3 = (event) => {
        setPetBreed3(event.target.value);
    };
    const changeBirthday3 = (event) => {
        setBirthday3(event.target.value);
    };
    const changePetSize3 = (event) => {
        setPetSize3(event.target.value);
    };
    const changePetShampoo3 = (event) => {
        setPetShampoo3(event.target.value);
    };
    const changePetGender3 = (event) => {
        setPetGender3(event.target.value);
    };
    const changePetIsNeutered3 = (event) => {
        setPetIsNeutered3(event.target.value);
    };
    const changePetNote3 = (event) => {
        setPetNote3(event.target.value);
    };
    const changePetPhoto3 = (event) => {
        setPetPhoto3(event.target.files[0]);
    };
    // Pet #4
    const changePetName4 = (event) => {
        setPetName4(event.target.value);
    };
    const changePetBreed4 = (event) => {
        setPetBreed4(event.target.value);
    };
    const changeBirthday4 = (event) => {
        setBirthday4(event.target.value);
    };
    const changePetSize4 = (event) => {
        setPetSize4(event.target.value);
    };
    const changePetShampoo4 = (event) => {
        setPetShampoo4(event.target.value);
    };
    const changePetGender4 = (event) => {
        setPetGender4(event.target.value);
    };
    const changePetIsNeutered4 = (event) => {
        setPetIsNeutered4(event.target.value);
    };
    const changePetNote4 = (event) => {
        setPetNote4(event.target.value);
    };
    const changePetPhoto4 = (event) => {
        setPetPhoto4(event.target.files[0]);
    };

    // Prepare data to post to database
    var formdata = new FormData();
    if (pet_photo !== null) {
        formdata.append("files.pet_photo", pet_photo, pet_photo.name);
    }
    if (pet_photo2 !== null) {
        formdata.append("files.pet_photo2", pet_photo2, pet_photo2.name);
    }
    if (pet_photo3 !== null) {
        formdata.append("files.pet_photo3", pet_photo3, pet_photo3.name);
    }
    if (pet_photo4 !== null) {
        formdata.append("files.pet_photo4", pet_photo4, pet_photo4.name);
    }
    formdata.append(
        "data",
        JSON.stringify({
            customer_first_name: `${customer_first_name}`,
            customer_last_name: `${customer_last_name}`,
            customer_phone: `${customer_phone}`,
            customer_email: `${customer_email}`,
            pet_name: `${pet_name}`,
            pet_breed: `${pet_breed}`,
            pet_birthday: `${pet_birthday}`,
            pet_size: `${pet_size}`,
            pet_shampoo: `${pet_shampoo}`,
            pet_gender: `${pet_gender}`,
            pet_is_neutered: `${pet_is_neutered}`,
            pet_note: `${pet_note}`,
            pet_name2: `${pet_name2}`,
            pet_breed2: `${pet_breed2}`,
            pet_birthday2: `${pet_birthday2}`,
            pet_size2: `${pet_size2}`,
            pet_shampoo2: `${pet_shampoo2}`,
            pet_gender2: `${pet_gender2}`,
            pet_is_neutered2: `${pet_is_neutered2}`,
            pet_note2: `${pet_note2}`,
            pet_name3: `${pet_name3}`,
            pet_breed3: `${pet_breed3}`,
            pet_birthday3: `${pet_birthday3}`,
            pet_size3: `${pet_size3}`,
            pet_shampoo3: `${pet_shampoo3}`,
            pet_gender3: `${pet_gender3}`,
            pet_is_neutered3: `${pet_is_neutered3}`,
            pet_note3: `${pet_note3}`,
            pet_name4: `${pet_name4}`,
            pet_breed4: `${pet_breed4}`,
            pet_birthday4: `${pet_birthday4}`,
            pet_size4: `${pet_size4}`,
            pet_shampoo4: `${pet_shampoo4}`,
            pet_gender4: `${pet_gender4}`,
            pet_is_neutered4: `${pet_is_neutered4}`,
            pet_note4: `${pet_note4}`,
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
                <div id="customer">
                    <div className="label-and-input">
                        <label htmlFor="customer_first_name">First Name:</label>
                        <input
                            type="text"
                            name="customer_first_name"
                            id="customer_first_name"
                            value={customer_first_name}
                            onChange={changeCustomerFirstName}
                        />
                    </div>
                    <div className="label-and-input">
                        <label htmlFor="customer_last_name"> Last Name:</label>
                        <input
                            type="text"
                            name="customer_last_name"
                            id="customer_last_name"
                            value={customer_last_name}
                            onChange={changeCustomerLastName}
                        />
                    </div>

                    <div className="label-and-input">
                        <label htmlFor="customer_phone"> Phone Number:</label>
                        <input
                            type="number"
                            name="customer_phone"
                            id="customer_phone"
                            value={customer_phone}
                            onChange={changePhone}
                        />
                    </div>
                    <div className="label-and-input">
                        <label htmlFor="customer_email"> Email:</label>
                        <input
                            type="email"
                            name="customer_email"
                            id="customer_email"
                            value={customer_email}
                            onChange={changeEmail}
                        />
                    </div>
                </div>
                <div id="pet-1">
                    <div className="label-and-input">
                        <label htmlFor="pet_name">Pet Name:</label>
                        <input
                            type="text"
                            name="pet_name"
                            id="pet_name"
                            value={pet_name}
                            onChange={changePetName}
                        />
                    </div>
                    <div className="label-and-input">
                        <label htmlFor="pet_birthday">Pet Birthday:</label>
                        <input
                            type="date"
                            name="pet_birthday"
                            id="pet_birthday"
                            value={pet_birthday}
                            onChange={changeBirthday}
                        />
                    </div>
                    <div className="label-and-input">
                        <label htmlFor="pet_breed">Pet Breed:</label>
                        <input
                            type="text"
                            name="pet_breed"
                            id="pet_breed"
                            value={pet_breed}
                            onChange={changePetBreed}
                        />
                    </div>
                    <div className="label-and-input">
                        <label htmlFor="pet_size">Pet Size:</label>
                        <select
                            type="text"
                            name="pet_size"
                            id="pet_size"
                            value={pet_size}
                            onChange={changePetSize}
                        >
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                    <div className="label-and-input">
                        <label htmlFor="pet_shampoo">Pet Shampoo:</label>
                        <select
                            type="text"
                            name="pet_shampoo"
                            id="pet_shampoo"
                            value={pet_shampoo}
                            onChange={changePetShampoo}
                        >
                            <option value="Rose">Rose</option>
                            <option value="Macadamia Nuts">
                                Macadamia Nuts
                            </option>
                            <option value="Lavender">Lavender</option>
                            <option value="Bergamot">Bergamot</option>
                        </select>
                    </div>
                    <div className="label-and-input">
                        <label htmlFor="pet_gender">Pet Gender:</label>
                        <select
                            type="text"
                            name="pet_gender"
                            id="pet_gender"
                            value={pet_gender}
                            onChange={changePetGender}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="label-and-input">
                        <label htmlFor="pet_is_neutered">Pet Neutered?</label>
                        <select
                            type="text"
                            name="pet_is_neutered"
                            id="pet_is_neutered"
                            value={pet_is_neutered}
                            onChange={changePetIsNeutered}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="label-and-input">
                        <label htmlFor="pet_note">Note:</label>
                        <textarea
                            type="text"
                            name="pet_note"
                            id="pet_note"
                            value={pet_note}
                            onChange={changePetNote}
                        />
                    </div>
                    <div className="label-and-input">
                        <label htmlFor="pet_photo">Pet Photo:</label>
                        <input
                            type="file"
                            name="pet_photo"
                            id="pet_photo"
                            onChange={changePetPhoto}
                        />
                    </div>
                </div>
                {/* Render "Add Another Pet" button by default, if user clicks it, unmount this button and mount another set of inputs for pet #2 */}
                {wouldAddPet2 ? (
                    <div className="add-more-pet-info" id="pet-2">
                        <div className="label-and-input">
                            <label htmlFor="pet_name2">Pet#2 Name:</label>
                            <input
                                type="text"
                                name="pet_name2"
                                id="pet_name2"
                                value={pet_name2}
                                onChange={changePetName2}
                            />
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_birthday2">
                                Pet#2 Birthday:
                            </label>
                            <input
                                type="date"
                                name="pet_birthday2"
                                id="pet_birthday2"
                                value={pet_birthday2}
                                onChange={changeBirthday2}
                            />
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_breed2">Pet#2 Breed:</label>
                            <input
                                type="text"
                                name="pet_breed2"
                                id="pet_breed2"
                                value={pet_breed2}
                                onChange={changePetBreed2}
                            />
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_size2">Pet#2 Size:</label>
                            <select
                                type="text"
                                name="pet_size2"
                                id="pet_size2"
                                value={pet_size2}
                                onChange={changePetSize2}
                            >
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_shampoo2">Pet#2 Shampoo:</label>
                            <select
                                type="text"
                                name="pet_shampoo2"
                                id="pet_shampoo2"
                                value={pet_shampoo2}
                                onChange={changePetShampoo2}
                            >
                                <option value="Rose">Rose</option>
                                <option value="Macadamia Nuts">
                                    Macadamia Nuts
                                </option>
                                <option value="Lavender">Lavender</option>
                                <option value="Bergamot">Bergamot</option>
                            </select>
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_gender2">Pet#2 Gender:</label>
                            <select
                                type="text"
                                name="pet_gender2"
                                id="pet_gender2"
                                value={pet_gender2}
                                onChange={changePetGender2}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_is_neutered2">
                                Pet#2 Neutered?
                            </label>
                            <select
                                type="text"
                                name="pet_is_neutered2"
                                id="pet_is_neutered2"
                                value={pet_is_neutered2}
                                onChange={changePetIsNeutered2}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_note2">Pet#2 Note:</label>
                            <textarea
                                type="text"
                                name="pet_note2"
                                id="pet_note2"
                                value={pet_note2}
                                onChange={changePetNote2}
                            />
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_photo2">Pet#2 Photo:</label>
                            <input
                                type="file"
                                name="pet_photo2"
                                id="pet_photo2"
                                onChange={changePetPhoto2}
                            />
                        </div>
                    </div>
                ) : (
                    <button
                        className="button__add-pet"
                        onClick={(e) => {
                            e.preventDefault();
                            setWouldAddPet2(true);
                        }}
                    >
                        Add Pet #2
                    </button>
                )}
                {/* Render "Add Another Pet" button by default, if user clicks it, unmount this button and mount another set of inputs for pet #3 */}
                {wouldAddPet3 ? (
                    <div className="add-more-pet-info" id="pet-3">
                        <div className="label-and-input">
                            <label htmlFor="pet_name3">Pet#3 Name:</label>
                            <input
                                type="text"
                                name="pet_name3"
                                id="pet_name3"
                                value={pet_name3}
                                onChange={changePetName3}
                            />
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_birthday3">
                                Pet#3 Birthday:
                            </label>
                            <input
                                type="date"
                                name="pet_birthday3"
                                id="pet_birthday3"
                                value={pet_birthday3}
                                onChange={changeBirthday3}
                            />
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_breed3">Pet#3 Breed:</label>
                            <input
                                type="text"
                                name="pet_breed3"
                                id="pet_breed3"
                                value={pet_breed3}
                                onChange={changePetBreed3}
                            />
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_size3">Pet#3 Size:</label>
                            <select
                                type="text"
                                name="pet_size3"
                                id="pet_size3"
                                value={pet_size3}
                                onChange={changePetSize3}
                            >
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_shampoo3">Pet#3 Shampoo:</label>
                            <select
                                type="text"
                                name="pet_shampoo3"
                                id="pet_shampoo3"
                                value={pet_shampoo3}
                                onChange={changePetShampoo3}
                            >
                                <option value="Rose">Rose</option>
                                <option value="Macadamia Nuts">
                                    Macadamia Nuts
                                </option>
                                <option value="Lavender">Lavender</option>
                                <option value="Bergamot">Bergamot</option>
                            </select>
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_gender3">Pet#3 Gender:</label>
                            <select
                                type="text"
                                name="pet_gender3"
                                id="pet_gender3"
                                value={pet_gender3}
                                onChange={changePetGender3}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_is_neutered3">
                                Pet#3 Neutered?
                            </label>
                            <select
                                type="text"
                                name="pet_is_neutered3"
                                id="pet_is_neutered3"
                                value={pet_is_neutered3}
                                onChange={changePetIsNeutered3}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_note3">Pet#3 Note:</label>
                            <textarea
                                type="text"
                                name="pet_note3"
                                id="pet_note3"
                                value={pet_note3}
                                onChange={changePetNote3}
                            />
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_photo3">Pet#3 Photo:</label>
                            <input
                                type="file"
                                name="pet_photo3"
                                id="pet_photo3"
                                onChange={changePetPhoto3}
                            />
                        </div>
                    </div>
                ) : wouldAddPet2 === true ? (
                    <button
                        className="button__add-pet"
                        onClick={(e) => {
                            e.preventDefault();
                            setWouldAddPet3(true);
                        }}
                    >
                        Add Pet #3
                    </button>
                ) : null}
                {/* Render "Add Another Pet" button by default, if user clicks it, unmount this button and mount another set of inputs for pet #4 */}
                {wouldAddPet4 ? (
                    <div className="add-more-pet-info" id="pet-4">
                        <div className="label-and-input">
                            <label htmlFor="pet_name4">Pet#4 Name:</label>
                            <input
                                type="text"
                                name="pet_name4"
                                id="pet_name4"
                                value={pet_name4}
                                onChange={changePetName4}
                            />
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_birthday4">
                                Pet#4 Birthday:
                            </label>
                            <input
                                type="date"
                                name="pet_birthday4"
                                id="pet_birthday4"
                                value={pet_birthday4}
                                onChange={changeBirthday4}
                            />
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_breed4">Pet#4 Breed:</label>
                            <input
                                type="text"
                                name="pet_breed4"
                                id="pet_breed4"
                                value={pet_breed4}
                                onChange={changePetBreed4}
                            />
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_size4">Pet#4 Size:</label>
                            <select
                                type="text"
                                name="pet_size4"
                                id="pet_size4"
                                value={pet_size4}
                                onChange={changePetSize4}
                            >
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_shampoo4">Pet#4 Shampoo:</label>
                            <select
                                type="text"
                                name="pet_shampoo4"
                                id="pet_shampoo4"
                                value={pet_shampoo4}
                                onChange={changePetShampoo4}
                            >
                                <option value="Rose">Rose</option>
                                <option value="Macadamia Nuts">
                                    Macadamia Nuts
                                </option>
                                <option value="Lavender">Lavender</option>
                                <option value="Bergamot">Bergamot</option>
                            </select>
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_gender4">Pet#4 Gender:</label>
                            <select
                                type="text"
                                name="pet_gender4"
                                id="pet_gender4"
                                value={pet_gender4}
                                onChange={changePetGender4}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_is_neutered4">
                                Pet#4 Neutered?
                            </label>
                            <select
                                type="text"
                                name="pet_is_neutered4"
                                id="pet_is_neutered4"
                                value={pet_is_neutered4}
                                onChange={changePetIsNeutered4}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_note4">Pet#4 Note:</label>
                            <textarea
                                type="text"
                                name="pet_note4"
                                id="pet_note4"
                                value={pet_note4}
                                onChange={changePetNote4}
                            />
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="pet_photo4">Pet#4 Photo:</label>
                            <input
                                type="file"
                                name="pet_photo4"
                                id="pet_photo4"
                                onChange={changePetPhoto4}
                            />
                        </div>
                    </div>
                ) : wouldAddPet3 === true ? (
                    <button
                        className="button__add-pet"
                        onClick={(e) => {
                            e.preventDefault();
                            setWouldAddPet4(true);
                        }}
                    >
                        Add Pet #4
                    </button>
                ) : null}
                <input
                    className="create_account_customer_registrition-submit"
                    type="submit"
                />
            </form>
        </div>
    );
}
