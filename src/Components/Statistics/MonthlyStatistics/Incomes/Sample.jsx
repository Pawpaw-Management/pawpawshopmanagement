import React, { useState } from "react";

export default function Sample() {
    const [myArray, setMyArray] = useState([]);

    let randomArray = [1, 2, 3, 4, 5, 6];
    randomArray.forEach((item) => {
        setMyArray([...myArray, item]);
    });

    return <div></div>;
}
