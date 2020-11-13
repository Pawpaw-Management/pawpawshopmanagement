import React, { Component } from "react";
// import axios from "axios";
// import PropTypes from "prop-types";
import "./CreateAccount.css";

export default class CreateAccount extends Component {
    // static propTypes = {
    //     prop: PropTypes,
    // };

    state = {
        customer_first_name: "",
        customer_last_name: "",
        customer_phone: null,
        customer_email: "",
        pet_name: "",
        pet_breed: "",
        pet_birthday: "",
        pet_size: "",
        pet_note: "",
    };

    testData = (e) => {
        e.preventDefault();
        console.log(
            "customer_first_name:",
            this.customer_first_name.value,
            "customer_last_name:",
            this.customer_last_name.value,
            "customer_phone:",
            this.customer_phone.value,
            "customer_email:",
            this.customer_email.value,
            "pet_name:",
            this.pet_name.value,
            "pet_breed:",
            this.pet_breed.value,
            "pet_birthday:",
            this.pet_birthday.value,
            "pet_size:",
            this.pet_size.value,
            "pet_note:",
            this.pet_note.value
        );
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        // Define FormData
        // const data = new FormData();
        // data.append("customer_first_name", this.state.customer_first_name);
        // data.append("customer_last_name", this.state.customer_last_name);
        // data.append("customer_phone", this.customer_phone.value);
        // data.append("customer_email", this.customer_email.value);
        // data.append("pet_name", this.pet_name.value);
        // data.append("pet_breed", this.pet_breed.value);
        // data.append("pet_birthday", this.pet_birthday.value);
        // data.append("pet_size", this.pet_size.value);
        // data.append("pet_note", this.pet_note.value);

        // Varify FormData
        // for (var pair of data.entries()) {
        //     console.log(
        //         pair[0] +
        //             ", " +
        //             typeof pair[0] +
        //             ", " +
        //             pair[1] +
        //             typeof pair[1]
        //     );
        // }

        // Post FormData to database

        // axios({
        //     // mode: 'no-cors',
        //     method: "POST",
        //     url: `${this.props.url}customers-and-pets`,
        //     data: data,
        //     headers: {
        //         'Accept':'application/json'
        //     }
        // });

        const response = await fetch(`${this.props.url}customers-and-pets`, {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                customer_first_name: `${this.customer_first_name.value}`,
                customer_last_name: `${this.customer_last_name.value}`,
                customer_phone: `${this.customer_phone.value}`,
                customer_email: `${this.customer_email.value}`,
                pet_name: `${this.pet_name.value}`,
                pet_breed: `${this.pet_breed.value}`,
                pet_birthday: `${this.pet_birthday.value}`,
                pet_size: `${this.pet_size.value}`,
                pet_note: `${this.pet_note.value}`,
            }),
        });
        const content = await response.json();
        console.log(content);
        if (content.statusCode === 200) {
            alert("New Account Created!");
        }
    };

    render() {
        return (
            <div className="customers-database">
                <h1>Create New Customer Account</h1>
                <form
                    className="create_account_customer_registrition"
                    action=""
                    onSubmit={this.handleSubmit}
                >
                    <label for="customer_first_name"> First Name:</label>
                    <input
                        type="text"
                        name="customer_first_name"
                        id="customer_first_name"
                        ref={(input) => (this.customer_first_name = input)}
                    />
                    <label for="customer_last_name"> Last Name:</label>
                    <input
                        type="text"
                        name="customer_last_name"
                        id="customer_last_name"
                        ref={(input) => (this.customer_last_name = input)}
                    />
                    <label for="customer_phone"> Phone Number:</label>
                    <input
                        type="text"
                        name="customer_phone"
                        id="customer_phone"
                        ref={(input) => (this.customer_phone = input)}
                    />
                    <label for="customer_email"> Email:</label>
                    <input
                        type="email"
                        name="customer_email"
                        id="customer_email"
                        ref={(input) => (this.customer_email = input)}
                    />
                    <label for="pet_name">Pet Name:</label>
                    <input
                        type="text"
                        name="pet_name"
                        id="pet_name"
                        ref={(input) => (this.pet_name = input)}
                    />
                    <label for="pet_birthday">Pet Birthday:</label>
                    <input
                        type="date"
                        name="pet_birthday"
                        id="pet_birthday"
                        ref={(input) => (this.pet_birthday = input)}
                    />
                    <label for="pet_breed">Pet Breed:</label>
                    <input
                        type="text"
                        name="pet_breed"
                        id="pet_breed"
                        ref={(input) => (this.pet_breed = input)}
                    />
                    <label for="pet_size">Pet Size:</label>
                    <input
                        type="text"
                        name="pet_size"
                        id="pet_size"
                        ref={(input) => (this.pet_size = input)}
                    />
                    <label for="pet_note">Note:</label>
                    <textarea
                        type="text"
                        name="pet_note"
                        id="pet_note"
                        ref={(input) => (this.pet_note = input)}
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
