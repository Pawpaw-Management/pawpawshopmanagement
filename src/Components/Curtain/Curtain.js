import React, { useState, useEffect } from "react";
import "./Curtain.css";

export default function Curtain() {
    // Define useState for "Store Owner's Curtain"
    const [curtain, setCurtain] = useState("curtain");

    // Everytime this component mounts, set up the "curtain"
    useEffect(() => {
        setCurtain("curtain");
    }, []);

    // Define a function to deactivate curtain
    // 1. define state for curtain_input
    const [password, setPassword] = useState("");
    console.log(`password: ${password}`);
    // 2. define a function to handel input change
    const changePassword = (event) => setPassword(event.target.value);
    // 3. define a function to check password, if correct, deactivate curtain
    const checkPassword = (event) => {
        event.preventDefault();
        if (password === "aaa") {
            setCurtain("curtain hidden");
        }
    };

    return (
        <div className={curtain}>
            <span>Only the store owner have access to this page.</span>
            <div className="curtain_login">
                <label for="curtain_pwd">
                    Please enter the store owner key
                </label>
                <input
                    name="curtain_pwd"
                    type="password"
                    onChange={changePassword}
                ></input>
                <button onClick={checkPassword}>submit</button>
            </div>
        </div>
    );
}
