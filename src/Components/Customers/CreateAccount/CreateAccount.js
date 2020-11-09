import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./CreateAccount.css";

export default class CreateAccount extends Component {
    static propTypes = {
        prop: PropTypes,
    };

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
            "customer_first_name:", this.customer_first_name.value,
            "customer_last_name:", this.customer_last_name.value,
            "customer_phone:", this.customer_phone.value,
            "customer_email:", this.customer_email.value,
            "pet_name:", this.pet_name.value,
            "pet_breed:", this.pet_breed.value,
            "pet_birthday:", this.pet_birthday.value,
            "pet_size:", this.pet_size.value,
            "pet_note:", this.pet_note.value
        )
    };

    // handleCustomerFirstNameChange = (event) => {
    //     const customer_first_name = event.target.value
    //     this.setState({customer_first_name})
    //     console.log(this.state.customer_first_name)
    // }

    // handleCustomerLastNameChange = (event) => {
    //     const customer_last_name = event.target.value
    //     this.setState({customer_last_name})
    //     console.log(this.state.customer_first_name)
    //     console.log(this.state.customer_last_name)
    // }

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
            "method": "POST",
            "headers": {
                "accept": "application/json",
                "content-type": "application/json"
            },
            "body": JSON.stringify({
                "customer_first_name": `${this.customer_first_name.value}`,
                "customer_last_name": `${this.customer_last_name.value}`,
                "customer_phone": `${this.customer_phone.value}`,
                "customer_email": `${this.customer_email.value}`,
                "pet_name": `${this.pet_name.value}`,
                "pet_breed": `${this.pet_breed.value}`,
                "pet_birthday": `${this.pet_birthday.value}`,
                "pet_size": `${this.pet_size.value}`,
                "pet_note": `${this.pet_note.value}`
            }),
        });
        const content = await response.json();
        console.log(content);
    };

    render() {
        return (
            <div className="customers-database">
                <h1>Create New Customer Account</h1>
                <form
                    className="customer_registrition"
                    action=""
                    onSubmit={this.handleSubmit}
                >
                    <label for="customer_first_name">Your Firstname:</label>
                    <input
                        type="text"
                        name="customer_first_name"
                        id="customer_first_name"
                        ref={(input) => (this.customer_first_name = input)}
                        // value={this.state.customer_first_name}
                        // onChange = {this.handleCustomerFirstNameChange}
                    />
                    <label for="customer_last_name">Your Lastname:</label>
                    <input
                        type="text"
                        name="customer_last_name"
                        id="customer_last_name"
                        ref={(input) => (this.customer_last_name = input)}
                        // value = {this.state.customer_last_name}
                        // onChange={this.handleCustomerLastNameChange}
                    />
                    <label for="customer_phone">Your Phone Number:</label>
                    <input
                        type="text"
                        name="customer_phone"
                        id="customer_phone"
                        ref={(input) => (this.customer_phone = input)}
                        // onChange={(data) => setPhone(data.target.value)}
                    />
                    <label for="customer_email">Your Email:</label>
                    <input
                        type="email"
                        name="customer_email"
                        id="customer_email"
                        ref={(input) => (this.customer_email = input)}
                        // onChange={(data) => setEmail(data.target.value)}
                    />
                    <label for="pet_name">Pet Name:</label>
                    <input
                        type="text"
                        name="pet_name"
                        id="pet_name"
                        ref={(input) => (this.pet_name = input)}
                        // onChange={(data) => setPetName(data.target.value)}
                    />
                    <label for="pet_birthday">Pet Birthday:</label>
                    <input
                        type="date"
                        name="pet_birthday"
                        id="pet_birthday"
                        ref={(input) => (this.pet_birthday = input)}
                        // onChange={(data) => setPetBirthday(data.target.value)}
                    />
                    <label for="pet_breed">Pet Breed:</label>
                    <input
                        type="text"
                        name="pet_breed"
                        id="pet_breed"
                        ref={(input) => (this.pet_breed = input)}
                        // onChange={(data) => setPetBreed(data.target.value)}
                    />
                    <label for="pet_size">Pet Size:</label>
                    <input
                        type="text"
                        name="pet_size"
                        id="pet_size"
                        ref={(input) => (this.pet_size = input)}
                        // onChange={(data) => {
                        //     setPetSize(data.target.value);
                        //     console.log(data.target.value);
                        //     console.log(pet_size);
                        // }}
                    />
                    <label for="pet_note">Note:</label>
                    <input
                        type="text"
                        name="pet_note"
                        id="pet_note"
                        ref={(input) => (this.pet_note = input)}
                    />
                    <input type="submit" />
                    {/* <button onClick={this.testData}>test data</button> */}
                </form>
            </div>
        );
    }
}

// const CreateAccount = (props) => {
//     // Define states and hooks
//     const [customer_first_name, setFirstName] = useState("");
//     const [customer_last_name, setLastName] = useState("");
//     const [customer_phone, setPhone] = useState(780);
//     const [customer_email, setEmail] = useState("");
//     const [pet_name, setPetName] = useState("");
//     const [pet_breed, setPetBreed] = useState("");
//     const [pet_birthday, setPetBirthday] = useState("");
//     const [pet_size, setPetSize] = useState("");
//     const [pet_note, setPetNote] = useState("");
//     // note: the selected photo is not a string
//     const [pet_photo, setPetPhoto] = useState(null);

//     // Take data from the form and post to database
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // Define FormData object
//         const data = new FormData();
//         data.append("customer_first_name", customer_first_name);
//         data.append("customer_last_name", customer_last_name);
//         data.append("customer_phone", customer_phone);
//         data.append("customer_email", customer_email);
//         data.append("pet_name", pet_name);
//         data.append("pet_breed", pet_breed);
//         data.append("pet_birthday", pet_birthday);
//         data.append("pet_size", pet_size);
//         data.append("pet_note", pet_note);
//         data.append("pet_photo", pet_photo);

//         const response = await fetch(`${props.url}customers-and-pets`, {
//             method: "POST",
//             data,
//         });
//         const content = await response.json();
//         console.log(content);
//     };

//     return (
//         <section className="customers-database">
//             <h1>Create New Customer Account</h1>
//             <form
//                 className="customer_registrition"
//                 action=""
//                 onSubmit={handleSubmit}
//             >
//                 <label for="customer_first_name">Your Firstname:</label>
//                 <input
//                     type="text"
//                     name="customer_first_name"
//                     id="customer_first_name"
//                     onChange={(data) => setFirstName(data.target.value)}
//                 />
//                 <label for="customer_last_name">Your Lastname:</label>
//                 <input
//                     type="text"
//                     name="customer_last_name"
//                     id="customer_last_name"
//                     onChange={(data) => setLastName(data.target.value)}
//                 />
//                 <label for="customer_phone">Your Phone Number:</label>
//                 <input
//                     type="text"
//                     name="customer_phone"
//                     id="customer_phone"
//                     onChange={(data) => setPhone(data.target.value)}
//                 />
//                 <label for="customer_email">Your Email:</label>
//                 <input
//                     type="email"
//                     name="customer_email"
//                     id="customer_email"
//                     onChange={(data) => setEmail(data.target.value)}
//                 />
//                 <label for="pet_name">Pet Name:</label>
//                 <input
//                     type="text"
//                     name="pet_name"
//                     id="pet_name"
//                     onChange={(data) => setPetName(data.target.value)}
//                 />
//                 <label for="pet_birthday">Pet Birthday:</label>
//                 <input
//                     type="date"
//                     name="pet_birthday"
//                     id="pet_birthday"
//                     onChange={(data) => setPetBirthday(data.target.value)}
//                 />
//                 <label for="pet_breed">Pet Breed:</label>
//                 <input
//                     type="text"
//                     name="pet_breed"
//                     id="pet_breed"
//                     onChange={(data) => setPetBreed(data.target.value)}
//                 />
//                 <label for="pet_size">Pet Size:</label>
//                 <input
//                     type="text"
//                     name="pet_size"
//                     id="pet_size"
//                     onChange={(data) => {
//                         setPetSize(data.target.value);
//                         console.log(data.target.value);
//                         console.log(pet_size);
//                     }}
//                 />
//                 <label for="pet_photo">Pet Photo:</label>
//                 <input
//                     type="file"
//                     name="pet_photo"
//                     id="pet_photo"
//                     accept="image/*"
//                     onChange={(event) => {
//                         setPetPhoto(event.target.files[0]);
//                         console.log(event.target.files[0]);
//                         console.log(pet_photo);
//                     }}
//                 />
//                 <label for="pet_note">Note:</label>
//                 <input
//                     type="text"
//                     name="pet_note"
//                     id="pet_note"
//                     onChange={(data) => setPetNote(data.target.value)}
//                 />
//                 <input type="submit" />
//             </form>
//         </section>
//     );
// };

// export default CreateAccount;
