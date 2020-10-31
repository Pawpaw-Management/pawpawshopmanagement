import React from "react";
import "./CreateAccount.css"

const CreateAccount = (props) => {
    return (
        <section className="customersDatabase">
            <h1>Create New Customer Account</h1>
            <div className="inputs">
                <label for="firstName">Customer Firstname:</label>
                <input type="text" name="firstName" id="firstName"></input>
                <label for="lastName">Customer Lastname:</label>
                <input type="text" name="lastName" id="lastName"></input>
                <label for="customer_phone">Customer Phone Number:</label>
                <input type="number" name="customer_phone" id="customer_phone"></input>
                <label for="customer_phone">Customer Email:</label>
                <input type="number" name="customer_phone" id="customer_phone"></input>
                <label for="petName">Pet Name:</label>
                <input type="text" name="petName" id="petName"></input>
                <label for="petType">Pet Type:</label>
                <input type="text" name="petType" id="petType"></input>
                {/* <label for="petImage">Pet Image:</label>
                <input type="image" name="petImage" id="petImage"></input> */}
            </div>
        </section>
    )
}

export default CreateAccount