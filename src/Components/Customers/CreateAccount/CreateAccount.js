import React, { useState } from "react";
import axios from "axios";
import "./CreateAccount.css";

export default function CreateAccount(props) {
    // define states
    const [customer_first_name, setCustomerFirstName] = useState("");
    const [customer_last_name, setCustomerLastName] = useState("");
    const [customer_phone, setPhone] = useState(0);
    const [customer_email, setEmail] = useState("");
    const [pet_name, setPetName] = useState("");
    const [pet_breed, setPetBreed] = useState("");
    const [pet_birthday, setBirthday] = useState("");
    const [pet_size, setPetSize] = useState("");
    const [pet_note, setPetNote] = useState("");
    const [pet_photo, setPetPhoto] = useState(null);

    console.log(pet_photo);

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
    const changePetNote = (event) => {
        setPetNote(event.target.value);
    };
    const changePetPhoto = (event) => {
        setPetPhoto(event.target.files[0]);
    };

    // Trial
    // const { parseMultipartData } = require("strapi-utils");
    // const upload = async (ctx) => {
    //     if (ctx.is("multipart")) {
    //         // do any other validation of data required
    //         const { data, files } = parseMultipartData(ctx);
    //         // create any new records in database
    //         let newPet = await strapi.services.pets.create({
    //             pet_name: data.pet_name,
    //         });
    //         // add photo to newly created pet
    //         await strapi.plugins.upload.services.upload.upload({
    //             data: {
    //                 refId: newPet.id,
    //                 ref: customers-and-pets,
    //                 field: "pet-photo",
    //             },
    //             files: {
    //                 path: files.photo.path,
    //                 name: files.photo.name,
    //                 type: files.photo.type,
    //                 size: files.photo.size,
    //             },
    //         });
    //     }
    // };
    // Trial

    var formdata = new FormData();
    // formdata.append("files.pet_photo", pet_photo, "icon-dog.png");
    if (pet_photo !== null) {
        formdata.append("files.pet_photo", pet_photo, "dog-border3.png")
    }
    formdata.append(
        "data",
        JSON.stringify({
            customer_first_name: `${customer_first_name}`,
            customer_last_name: `${customer_last_name}`,
            customer_phone: customer_phone,
            customer_email: customer_email,
            pet_name: `${pet_name}`,
            pet_breed: `${pet_breed}`,
            pet_birthday: `${pet_birthday}`,
            pet_size: `${pet_size}`,
            pet_note: pet_note,
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
        const content = await response.json();
        if (response.status === 200) {
            alert(`Customer account successfully created!`);
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const response = await fetch(`${props.url}customers-and-pets`, {
    //         method: "POST",
    //         headers: {
    //             accept: "application/json",
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             customer_first_name: `${customer_first_name}`,
    //             customer_last_name: `${customer_last_name}`,
    //             customer_phone: customer_phone,
    //             customer_email: customer_email,
    //             pet_name: `${pet_name}`,
    //             pet_breed: `${pet_breed}`,
    //             pet_birthday: `${pet_birthday}`,
    //             pet_size: `${pet_size}`,
    //             pet_note: pet_note,
    //             pet_photo: pet_photo,
    //         }),
    //     });
    //     const content = await response.json();
    //     console.log(content);
    //     // Tell user the data above is successfully submitted
    //     if (response.status === 200) {
    //         alert(`${pet_name} has been added!`);
    //     } else {
    //         alert("Error! Please make sure the database is running properly.");
    //     }
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     // Define FormData
    //     let data = new FormData();
    //     data.append("customer_first_name", customer_first_name);
    //     data.append("customer_last_name", customer_last_name);
    //     data.append("customer_phone", customer_phone);
    //     data.append("customer_email", customer_email);
    //     data.append("pet_name", pet_name);
    //     data.append("pet_breed", pet_breed);
    //     data.append("pet_birthday", pet_birthday);
    //     data.append("pet_size", pet_size);
    //     data.append("pet_note", pet_note);
    //     data.append("pet_photo", pet_photo);

    //     // // Varify FormData
    //     // for (var pair of data.entries()) {
    //     //     console.log(
    //     //         pair[0] +
    //     //             ", " +
    //     //             typeof pair[0] +
    //     //             ", " +
    //     //             pair[1] +
    //     //             typeof pair[1]
    //     //     );
    //     // }

    //     // Post FormData to database

    //     axios({
    //         method: "POST",
    //         url: `${props.url}customers-and-pets`,
    //         data: data,
    //     }).then(({ data }) => {
    //         console.log("Succesfully uploaded: ", JSON.stringify(data));
    //     });
    // };

    return (
        <div className="create_account">
            <h1>Create New Customer Account</h1>
            <form
                className="create_account_customer_registrition"
                onSubmit={handleSubmit}
            >
                <label htmlFor="customer_first_name"> First Name:</label>
                <input
                    type="text"
                    name="customer_first_name"
                    id="customer_first_name"
                    value={customer_first_name}
                    onChange={changeCustomerFirstName}
                />
                <label htmlFor="customer_last_name"> Last Name:</label>
                <input
                    type="text"
                    name="customer_last_name"
                    id="customer_last_name"
                    value={customer_last_name}
                    onChange={changeCustomerLastName}
                />
                <label htmlFor="customer_phone"> Phone Number:</label>
                <input
                    type="number"
                    name="customer_phone"
                    id="customer_phone"
                    value={customer_phone}
                    onChange={changePhone}
                />
                <label htmlFor="customer_email"> Email:</label>
                <input
                    type="email"
                    name="customer_email"
                    id="customer_email"
                    value={customer_email}
                    onChange={changeEmail}
                />
                <label htmlFor="pet_name">Pet Name:</label>
                <input
                    type="text"
                    name="pet_name"
                    id="pet_name"
                    value={pet_name}
                    onChange={changePetName}
                />
                <label htmlFor="pet_birthday">Pet Birthday:</label>
                <input
                    type="date"
                    name="pet_birthday"
                    id="pet_birthday"
                    value={pet_birthday}
                    onChange={changeBirthday}
                />
                <label htmlFor="pet_breed">Pet Breed:</label>
                <input
                    type="text"
                    name="pet_breed"
                    id="pet_breed"
                    value={pet_breed}
                    onChange={changePetBreed}
                />
                <label htmlFor="pet_size">Pet Size:</label>
                <select
                    type="text"
                    name="pet_size"
                    id="pet_size"
                    defaultValue="standard"
                    value={pet_size}
                    onChange={changePetSize}
                >
                    <option value="standard">Standard</option>
                    <option value="large">Large</option>
                    <option value="small">Small</option>
                </select>

                <label htmlFor="pet_note">Note:</label>
                <textarea
                    type="text"
                    name="pet_note"
                    id="pet_note"
                    value={pet_note}
                    onChange={changePetNote}
                />
                <label htmlFor="pet_photo">Pet Photo:</label>
                <input
                    type="file"
                    name="pet_photo"
                    id="pet_photo"
                    // value={pet_photo}
                    onChange={changePetPhoto}
                />
                <input type="submit" />
            </form>
        </div>
    );
}
