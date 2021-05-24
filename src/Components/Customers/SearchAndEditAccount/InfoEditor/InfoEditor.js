import React, { useState, useEffect } from "react";
import "./InfoEditor.css";
import "../../../CommonElements.css";

export default function InfoEditor(props) {
    console.log(props.accountId);
    // Define states
    const [customer_first_name, setCustomerFirstName] = useState("");
    const [customer_last_name, setCustomerLastName] = useState("");
    const [customer_phone, setCustomerPhone] = useState("");
    const [customer_email, setCustomerEmail] = useState("");
    // Pet #1
    const [pet_name, setPetName] = useState("");
    const [pet_breed, setPetBreed] = useState("");
    const [pet_birthday, setPetBirthday] = useState("");
    const [pet_size, setPetSize] = useState("");
    const [pet_shampoo, setPetShampoo] = useState("");
    const [pet_gender, setPetGender] = useState("");
    const [pet_is_neutered, setPetIsNeutered] = useState("");
    const [pet_note, setPetNote] = useState("");
    const [pet_photo, setPetPhoto] = useState(null);
    // Pet #2
    const [pet_name2, setPetName2] = useState("");
    const [pet_breed2, setPetBreed2] = useState("");
    const [pet_birthday2, setPetBirthday2] = useState("");
    const [pet_size2, setPetSize2] = useState("");
    const [pet_shampoo2, setPetShampoo2] = useState("");
    const [pet_gender2, setPetGender2] = useState("");
    const [pet_is_neutered2, setPetIsNeutered2] = useState("");
    const [pet_note2, setPetNote2] = useState("");
    const [pet_photo2, setPetPhoto2] = useState(null);
    // Pet #3
    const [pet_name3, setPetName3] = useState("");
    const [pet_breed3, setPetBreed3] = useState("");
    const [pet_birthday3, setPetBirthday3] = useState("");
    const [pet_size3, setPetSize3] = useState("");
    const [pet_shampoo3, setPetShampoo3] = useState("");
    const [pet_gender3, setPetGender3] = useState("");
    const [pet_is_neutered3, setPetIsNeutered3] = useState("");
    const [pet_note3, setPetNote3] = useState("");
    const [pet_photo3, setPetPhoto3] = useState(null);
    // Pet #4
    const [pet_name4, setPetName4] = useState("");
    const [pet_breed4, setPetBreed4] = useState("");
    const [pet_birthday4, setPetBirthday4] = useState("");
    const [pet_size4, setPetSize4] = useState("");
    const [pet_shampoo4, setPetShampoo4] = useState("");
    const [pet_gender4, setPetGender4] = useState("");
    const [pet_is_neutered4, setPetIsNeutered4] = useState("");
    const [pet_note4, setPetNote4] = useState("");
    const [pet_photo4, setPetPhoto4] = useState(null);

    // Define onChange event handlers
    const changeCustomerFirstName = (event) =>
        setCustomerFirstName(event.target.value);
    const changeCustomerLastName = (event) =>
        setCustomerLastName(event.target.value);
    const changePhone = (event) => setCustomerPhone(event.target.value);
    const changeEmail = (event) => setCustomerEmail(event.target.value);
    // Pet #1
    const changePetName = (event) => setPetName(event.target.value);
    const changePetBreed = (event) => setPetBreed(event.target.value);
    const changeBirthday = (event) => setPetBirthday(event.target.value);
    const changePetSize = (event) => setPetSize(event.target.value);
    const changePetNote = (event) => setPetNote(event.target.value);
    const changePetShampoo = (event) => {
        setPetShampoo(event.target.value);
    };
    const changePetGender = (event) => {
        setPetGender(event.target.value);
    };
    const changePetIsNeutered = (event) => {
        setPetIsNeutered(event.target.value);
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
        setPetBirthday2(event.target.value);
    };
    const changePetSize2 = (event) => {
        setPetSize2(event.target.value);
    };
    const changePetNote2 = (event) => {
        setPetNote2(event.target.value);
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
        setPetBirthday3(event.target.value);
    };
    const changePetSize3 = (event) => {
        setPetSize3(event.target.value);
    };
    const changePetNote3 = (event) => {
        setPetNote3(event.target.value);
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
        setPetBirthday4(event.target.value);
    };
    const changePetSize4 = (event) => {
        setPetSize4(event.target.value);
    };
    const changePetNote4 = (event) => {
        setPetNote4(event.target.value);
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
    const changePetPhoto4 = (event) => {
        setPetPhoto4(event.target.files[0]);
    };

    // When <InfoEditor> mounts, set input values to the current account information
    // 1. Define the current account
    const current_account =
        props.customers_and_pets &&
        props.customers_and_pets.find(
            (account) => account.id === props.accountId
        );

    // 2. Assign data from current_account to states when accountId changes
    useEffect(() => {
        if (current_account) {
            setCustomerFirstName(current_account.customer_first_name);
            setCustomerLastName(current_account.customer_last_name);
            setCustomerPhone(current_account.customer_phone);
            setCustomerEmail(current_account.customer_email);
            setPetName(current_account.pet_name);
            setPetBreed(current_account.pet_breed);
            setPetBirthday(current_account.pet_birthday);
            setPetSize(current_account.pet_size);
            setPetNote(current_account.pet_note);
            setPetShampoo(current_account.pet_shampoo);
            setPetGender(current_account.pet_gender);
            setPetIsNeutered(current_account.pet_is_neutered);
            // Pet #2
            setPetName2(current_account.pet_name2);
            setPetBreed2(current_account.pet_breed2);
            setPetBirthday2(current_account.pet_birthday2);
            setPetSize2(current_account.pet_size2);
            setPetNote2(current_account.pet_note2);
            setPetShampoo2(current_account.pet_shampoo2);
            setPetGender2(current_account.pet_gender2);
            setPetIsNeutered2(current_account.pet_is_neutered2);
            // Pet #3
            setPetName3(current_account.pet_name3);
            setPetBreed3(current_account.pet_breed3);
            setPetBirthday3(current_account.pet_birthday3);
            setPetSize3(current_account.pet_size3);
            setPetNote3(current_account.pet_note3);
            setPetShampoo3(current_account.pet_shampoo3);
            setPetGender3(current_account.pet_gender3);
            setPetIsNeutered3(current_account.pet_is_neutered3);
            // Pet #4
            setPetName4(current_account.pet_name4);
            setPetBreed4(current_account.pet_breed4);
            setPetBirthday4(current_account.pet_birthday4);
            setPetSize4(current_account.pet_size4);
            setPetNote4(current_account.pet_note4);
            setPetShampoo4(current_account.pet_shampoo4);
            setPetGender4(current_account.pet_gender4);
            setPetIsNeutered4(current_account.pet_is_neutered4);
        }
    }, [props.accountId]);

    // Props.url has a "/" at the end, need to remove it before using it in next step
    const processed_url = props.url.slice(0, -1);

    // If an account has pet_photo, then display it; if not, display "no photo provided"
    let pet_photoOrInput;
    if (current_account.pet_photo !== null) {
        pet_photoOrInput = (
            <img
                className={"eachCustomerAndPetInfo-photo"}
                src={processed_url + current_account.pet_photo.url}
                alt="customer's pet"
            />
        );
    } else {
        pet_photoOrInput = (
            <div className="label-and-input">
                <label htmlFor="pet_photo">Pet Photo:</label>
                <input
                    type="file"
                    name="pet_photo"
                    id="pet_photo"
                    onChange={changePetPhoto}
                />
            </div>
        );
    }
    let pet_photoOrInput2;
    if (current_account.pet_photo2 !== null) {
        pet_photoOrInput2 = (
            <img
                className={"eachCustomerAndPetInfo-photo"}
                src={processed_url + current_account.pet_photo2.url}
                alt="customer's pet#2"
            />
        );
    } else {
        pet_photoOrInput2 = (
            <div className="label-and-input">
                <label htmlFor="pet_photo2">Pet #2 Photo:</label>
                <input
                    type="file"
                    name="pet_photo2"
                    id="pet_photo2"
                    onChange={changePetPhoto2}
                />
            </div>
        );
    }
    let pet_photoOrInput3;
    if (current_account.pet_photo3 !== null) {
        pet_photoOrInput3 = (
            <img
                className={"eachCustomerAndPetInfo-photo"}
                src={processed_url + current_account.pet_photo3.url}
                alt="customer's pet #3"
            />
        );
    } else {
        pet_photoOrInput3 = (
            <div className="label-and-input">
                <label htmlFor="pet_photo3">Pet #3 Photo:</label>
                <input
                    type="file"
                    name="pet_photo3"
                    id="pet_photo3"
                    onChange={changePetPhoto3}
                />
            </div>
        );
    }
    let pet_photoOrInput4;
    if (current_account.pet_photo4 !== null) {
        pet_photoOrInput4 = (
            <img
                className={"eachCustomerAndPetInfo-photo"}
                src={processed_url + current_account.pet_photo4.url}
                alt="customer's pet #4"
            />
        );
    } else {
        pet_photoOrInput4 = (
            <div className="label-and-input">
                <label htmlFor="pet_photo4">Pet #4 Photo:</label>
                <input
                    type="file"
                    name="pet_photo4"
                    id="pet_photo4"
                    onChange={changePetPhoto4}
                />
            </div>
        );
    }

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

    // Please test "put" method, see if it works on files
    var requestOptions = {
        method: "PUT",
        body: formdata,
        redirect: "follow",
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(
            `${props.url}customers-and-pets/${props.accountId}`,
            requestOptions
        );
        if (response.status === 200) {
            alert(`Account Information Updated!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    // // Define a function to update account information on server
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (props.url && props.accountId) {
    //         const response = await fetch(
    //             `${props.url}customers-and-pets/${props.accountId}`,
    //             {
    //                 method: "PUT",
    //                 headers: {
    //                     accept: "application/json",
    //                     "content-type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     customer_first_name: `${customer_first_name}`,
    //                     customer_last_name: `${customer_last_name}`,
    //                     customer_phone: `${customer_phone}`,
    //                     customer_email: `${customer_email}`,
    //                     pet_name: `${pet_name}`,
    //                     pet_breed: `${pet_breed}`,
    //                     pet_birthday: `${pet_birthday}`,
    //                     pet_size: `${pet_size}`,
    //                     pet_note: `${pet_note}`,
    //                     pet_name2: `${pet_name2}`,
    //                     pet_breed2: `${pet_breed2}`,
    //                     pet_birthday2: `${pet_birthday2}`,
    //                     pet_size2: `${pet_size2}`,
    //                     pet_note2: `${pet_note2}`,
    //                     pet_name3: `${pet_name3}`,
    //                     pet_breed3: `${pet_breed3}`,
    //                     pet_birthday3: `${pet_birthday3}`,
    //                     pet_size3: `${pet_size3}`,
    //                     pet_note3: `${pet_note3}`,
    //                     pet_name4: `${pet_name4}`,
    //                     pet_breed4: `${pet_breed4}`,
    //                     pet_birthday4: `${pet_birthday4}`,
    //                     pet_size4: `${pet_size4}`,
    //                     pet_note4: `${pet_note4}`,
    //                 }),
    //             }
    //         );
    //         const content = await response.json();
    //         console.log(content);
    //         // Tell user the data above is successfully submitted
    //         if (response.status === 200) {
    //             alert("Account Information Updated!");
    //         } else {
    //             alert("Error! Please make sure database is running properly.");
    //         }
    //     }
    // };

    // Make the textareas adjust height according to content
    var textareas = document.getElementsByClassName("pet_notes");
    console.log(textareas[3]);
    for (let i = 0; i < textareas.length; i++) {
        // textareas[i].style.height = "5px";
        textareas[i].style.height = textareas[i].scrollHeight + "px";
    }

    return (
        <div className="customer-and-pet__infoEditor window">
            <button
                className="button_esc"
                onClick={() => props.setVisibility(false)}
            >
                X
            </button>
            <form
                className="infoEditor_customer_registrition"
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
                <span className="customer-and-pet__infoEditor__title">
                    Pet #1
                </span>
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
                    <div className="line-break"></div>
                    {pet_photoOrInput}
                    <div className="line-break"></div>
                    <div className="label-and-input">
                        <label htmlFor="pet_note">Note:</label>
                        <textarea
                            type="text"
                            name="pet_note"
                            id="pet_note"
                            className="pet_notes"
                            value={pet_note}
                            onChange={changePetNote}
                        />
                    </div>
                </div>
                <span className="customer-and-pet__infoEditor__title">
                    Pet #2
                </span>
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
                        <label htmlFor="pet_birthday2">Pet#2 Birthday:</label>
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
                    <div className="line-break"></div>
                    {pet_photoOrInput2}
                    <div className="line-break"></div>
                    <div className="label-and-input">
                        <label htmlFor="pet_note2">Pet#2 Note:</label>
                        <textarea
                            type="text"
                            name="pet_note2"
                            id="pet_note2"
                            className="pet_notes"
                            value={pet_note2}
                            onChange={changePetNote2}
                        />
                    </div>
                </div>
                <span className="customer-and-pet__infoEditor__title">
                    Pet #3
                </span>
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
                        <label htmlFor="pet_birthday3">Pet#3 Birthday:</label>
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
                    <div className="line-break"></div>
                    {pet_photoOrInput3}
                    <div className="line-break"></div>
                    <div className="label-and-input">
                        <label htmlFor="pet_note3">Pet#3 Note:</label>
                        <textarea
                            type="text"
                            name="pet_note3"
                            id="pet_note3"
                            className="pet_notes"
                            value={pet_note3}
                            onChange={changePetNote3}
                        />
                    </div>
                </div>
                <span className="customer-and-pet__infoEditor__title">
                    Pet #4
                </span>
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
                        <label htmlFor="pet_birthday4">Pet#4 Birthday:</label>
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
                    <div className="line-break"></div>
                    {pet_photoOrInput4}
                    <div className="line-break"></div>
                    <div className="label-and-input">
                        <label htmlFor="pet_note4">Pet#4 Note:</label>
                        <textarea
                            type="text"
                            name="pet_note4"
                            id="pet_note4"
                            className="pet_notes"
                            value={pet_note4}
                            onChange={changePetNote4}
                        />
                    </div>
                </div>
                <input type="submit" id="infoEditor_submit" />
            </form>
        </div>
    );
}
