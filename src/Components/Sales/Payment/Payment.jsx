import React, { useState, useEffect } from "react";
import SelectEmployees from "./SelectEmployees/SelectEmployees.jsx";
import * as html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import Logo from "../../../images/logo.png";
import "./Payment.css";

export default function Payment(props) {
    console.log("===============");
    // Define states
    const [tips, setTips] = useState("");
    const [discount, setDiscount] = useState("");
    const [service1, setService1] = useState("");
    const [service2, setService2] = useState("");
    const [service3, setService3] = useState("");
    const [service4, setService4] = useState("");
    const [service5, setService5] = useState("");
    const [serviceQuantity1, setServiceQuantity1] = useState(1);
    const [serviceQuantity2, setServiceQuantity2] = useState(1);
    const [serviceQuantity3, setServiceQuantity3] = useState(1);
    const [serviceQuantity4, setServiceQuantity4] = useState(1);
    const [serviceQuantity5, setServiceQuantity5] = useState(1);
    const [servicePrice1, setServicePrice1] = useState("");
    const [servicePrice2, setServicePrice2] = useState("");
    const [servicePrice3, setServicePrice3] = useState("");
    const [servicePrice4, setServicePrice4] = useState("");
    const [servicePrice5, setServicePrice5] = useState("");
    const [serviceTotal, setServiceTotal] = useState("");
    const [serviceTotalAfterDiscount, setServiceTotalAfterDiscount] = useState("");
    const [item1, setItem1] = useState("");
    const [item2, setItem2] = useState("");
    const [item3, setItem3] = useState("");
    const [item4, setItem4] = useState("");
    const [item5, setItem5] = useState("");
    const [itemQuantity1, setItemQuantity1] = useState(1);
    const [itemQuantity2, setItemQuantity2] = useState(1);
    const [itemQuantity3, setItemQuantity3] = useState(1);
    const [itemQuantity4, setItemQuantity4] = useState(1);
    const [itemQuantity5, setItemQuantity5] = useState(1);
    const [totalService1, setTotalService1] = useState("");
    const [totalService2, setTotalService2] = useState("");
    const [totalService3, setTotalService3] = useState("");
    const [totalService4, setTotalService4] = useState("");
    const [totalService5, setTotalService5] = useState("");
    const [itemPrice1, setItemPrice1] = useState("");
    const [itemPrice2, setItemPrice2] = useState("");
    const [itemPrice3, setItemPrice3] = useState("");
    const [itemPrice4, setItemPrice4] = useState("");
    const [itemPrice5, setItemPrice5] = useState("");
    const [totalItem1, setTotalItem1] = useState("");
    const [totalItem2, setTotalItem2] = useState("");
    const [totalItem3, setTotalItem3] = useState("");
    const [totalItem4, setTotalItem4] = useState("");
    const [totalItem5, setTotalItem5] = useState("");
    const [itemTotal, setItemTotal] = useState("");
    const [visibilityEmployees, setVisibilityEmployees] = useState(false);

    // Define non-state variables
    var tipsToFixed = tips ? Number(tips).toFixed(2) : null;
    var tipsForUpload = tips ? tips : 0;

    // Define a function to clear form
    const clearForm = () => {
        setDiscount(0);
        setTips("");
        setService1("");
        setService2("");
        setService3("");
        setService4("");
        setService5("");
        setServiceQuantity1(1);
        setServiceQuantity2(1);
        setServiceQuantity3(1);
        setServiceQuantity4(1);
        setServiceQuantity5(1);
        setServicePrice1("");
        setServicePrice2("");
        setServicePrice3("");
        setServicePrice4("");
        setServicePrice5("");
        setServiceTotalAfterDiscount();
        setItem1("");
        setItem2("");
        setItem3("");
        setItem4("");
        setItem5("");
        setItemQuantity1(1);
        setItemQuantity2(1);
        setItemQuantity3(1);
        setItemQuantity4(1);
        setItemQuantity5(1);
        setItemPrice1("");
        setItemPrice2("");
        setItemPrice3("");
        setItemPrice4("");
        setItemPrice5("");
        setItemTotal(0);
    };

    // Every time serviceTotal changes, update serviceTotalAfterDiscount
    useEffect(() => {
        setServiceTotalAfterDiscount(Number(serviceTotal) * (1 - Number(discount)));
    }, [serviceTotal, discount]);

    // Update totalService1
    useEffect(() => {
        if (serviceQuantity1 && servicePrice1) {
            setTotalService1(serviceQuantity1 * servicePrice1);
        } else if (servicePrice1 && serviceQuantity1 === undefined) {
            setTotalService1(servicePrice1);
        } else {
            setTotalService1(0);
        }
    }, [serviceQuantity1, servicePrice1]);

    // Update totalService2
    useEffect(() => {
        if (serviceQuantity2 && servicePrice2) {
            setTotalService2(serviceQuantity2 * servicePrice2);
        } else if (servicePrice2 && serviceQuantity2 === undefined) {
            setTotalService2(servicePrice2);
        } else {
            setTotalService2(0);
        }
    }, [serviceQuantity2, servicePrice2]);

    // Update totalService3
    useEffect(() => {
        if (serviceQuantity3 && servicePrice3) {
            setTotalService3(serviceQuantity3 * servicePrice3);
        } else if (servicePrice3 && serviceQuantity3 === undefined) {
            setTotalService3(servicePrice3);
        } else {
            setTotalService3(0);
        }
    }, [serviceQuantity3, servicePrice3]);

    // Update totalService4
    useEffect(() => {
        if (serviceQuantity4 && servicePrice4) {
            setTotalService4(serviceQuantity4 * servicePrice4);
        } else if (servicePrice4 && serviceQuantity4 === undefined) {
            setTotalService4(servicePrice4);
        } else {
            setTotalService4(0);
        }
    }, [serviceQuantity4, servicePrice4]);

    // Update totalService5
    useEffect(() => {
        if (serviceQuantity5 && servicePrice5) {
            setTotalService5(serviceQuantity5 * servicePrice5);
        } else if (servicePrice5 && serviceQuantity5 === undefined) {
            setTotalService5(servicePrice5);
        } else {
            setTotalService5(0);
        }
    }, [serviceQuantity5, servicePrice5]);

    // Update service total serviceTotal as user gives input
    useEffect(() => {
        setServiceTotal(
            Number(totalService1) +
                Number(totalService2) +
                Number(totalService3) +
                Number(totalService4) +
                Number(totalService5)
        );
    }, [totalService1, totalService2, totalService3, totalService4, totalService5]);

    // Update totalItem1
    useEffect(() => {
        if (itemQuantity1 && itemPrice1) {
            setTotalItem1(Number(itemQuantity1) * Number(itemPrice1));
        } else if (itemPrice1 && itemQuantity1 === undefined) {
            setTotalItem1(itemPrice1);
        } else {
            setTotalItem1(0);
        }
    }, [itemQuantity1, itemPrice1]);

    // Update totalItem2
    useEffect(() => {
        if (itemQuantity2 && itemPrice2) {
            setTotalItem2(Number(itemQuantity2) * Number(itemPrice2));
        } else if (itemPrice2 && itemQuantity2 === undefined) {
            setTotalItem2(itemPrice2);
        } else {
            setTotalItem2(0);
        }
    }, [itemQuantity2, itemPrice2]);

    // Update totalItem3
    useEffect(() => {
        if (itemQuantity3 && itemPrice3) {
            setTotalItem3(Number(itemQuantity3) * Number(itemPrice3));
        } else if (itemPrice3 && itemQuantity3 === undefined) {
            setTotalItem3(itemPrice3);
        } else {
            setTotalItem3(0);
        }
    }, [itemQuantity3, itemPrice3]);

    // Update totalItem4
    useEffect(() => {
        if (itemQuantity4 && itemPrice4) {
            setTotalItem4(Number(itemQuantity4) * Number(itemPrice4));
        } else if (itemPrice4 && itemQuantity4 === undefined) {
            setTotalItem4(itemPrice4);
        } else {
            setTotalItem4(0);
        }
    }, [itemQuantity4, itemPrice4]);

    // Update totalItem5
    useEffect(() => {
        if (itemQuantity5 && itemPrice5) {
            setTotalItem5(Number(itemQuantity5) * Number(itemPrice5));
        } else if (itemPrice5 && itemQuantity5 === undefined) {
            setTotalItem5(itemPrice5);
        } else {
            setTotalItem5(0);
        }
    }, [itemQuantity5, itemPrice5]);

    // Update item total serviceTotal as user gives input
    useEffect(() => {
        setItemTotal(
            Number(totalItem1) +
                Number(totalItem2) +
                Number(totalItem3) +
                Number(totalItem4) +
                Number(totalItem5)
        );
    }, [totalItem1, totalItem2, totalItem3, totalItem4, totalItem5]);

    var discountPercent = Number(discount) * 100 + "%";
    var subtotalAfterDiscount = (
        Number(serviceTotal) * (1 - Number(discount)) +
        Number(itemTotal)
    ).toFixed(2);
    var gst = (subtotalAfterDiscount * 0.05).toFixed(2);

    // If visibilityEmployees is true, render <SelectEmployees>
    var selectEmployees = visibilityEmployees ? (
        <SelectEmployees
            url={props.url}
            tips={tips}
            balanceDue={balanceDue}
            serviceTotalAfterDiscount={serviceTotalAfterDiscount}
            itemTotal={itemTotal}
            discount={discount}
            service1={service1}
            service2={service2}
            service3={service3}
            service4={service4}
            service5={service5}
            serviceQuantity1={serviceQuantity1}
            serviceQuantity2={serviceQuantity2}
            serviceQuantity3={serviceQuantity3}
            serviceQuantity4={serviceQuantity4}
            serviceQuantity5={serviceQuantity5}
            item1={item1}
            item2={item2}
            item3={item3}
            item4={item4}
            item5={item5}
            itemQuantity1={itemQuantity1}
            itemQuantity2={itemQuantity2}
            itemQuantity3={itemQuantity3}
            itemQuantity4={itemQuantity4}
            itemQuantity5={itemQuantity5}
            setVisibilityEmployees={setVisibilityEmployees}
        />
    ) : (
        <div></div>
    );

    // Define non-state variables
    var purchase_date = new Date();
    var dd = String(purchase_date.getDate()).padStart(2, "0");
    var mm = String(purchase_date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = purchase_date.getFullYear();
    purchase_date = yyyy + "-" + mm + "-" + dd;
    let purchase_date_for_display = mm + "-" + dd + "-" + yyyy;

    var services =
        (service1 ? service1 + `: $${servicePrice1}` : servicePrice1 ? `$${servicePrice1}` : "") +
        (service2
            ? ", " + service2 + `: $${servicePrice2}`
            : servicePrice2
            ? `$${servicePrice2}`
            : "") +
        (service3
            ? ", " + service3 + `: $${servicePrice3}`
            : servicePrice3
            ? `$${servicePrice3}`
            : "") +
        (service4
            ? ", " + service4 + `: $${servicePrice4}`
            : servicePrice4
            ? `$${servicePrice4}`
            : "") +
        (service5
            ? ", " + service5 + `: $${servicePrice5}`
            : servicePrice5
            ? `$${servicePrice5}`
            : "");
    var items =
        (item1 ? itemQuantity1 + "*" + item1 : itemPrice1 ? `$${itemPrice1}` : "") +
        (item2 ? ", " + itemQuantity2 + "*" + item2 : itemPrice2 ? `$${itemPrice2}` : "") +
        (item3 ? ", " + itemQuantity3 + "*" + item3 : itemPrice3 ? `$${itemPrice3}` : "") +
        (item4 ? ", " + itemQuantity4 + "*" + item4 : itemPrice4 ? `$${itemPrice4}` : "") +
        (item5 ? ", " + itemQuantity5 + "*" + item5 : itemPrice5 ? `$${itemPrice5}` : "");
    var balanceDue = tips
        ? (Number(subtotalAfterDiscount) + Number(gst) + Number(tips)).toFixed(2)
        : (Number(subtotalAfterDiscount) + Number(gst)).toFixed(2);
    var description = `services: ${services} / service discount: ${discount} / service income: ${serviceTotalAfterDiscount} / products: ${items} / product income: ${itemTotal}`;

    // Define onChange handlers
    const changeTips = (event) => setTips(event.target.value);
    const changeDiscount = (event) => setDiscount(event.target.value);
    const changeService1 = (event) => setService1(event.target.value);
    const changeService2 = (event) => setService2(event.target.value);
    const changeService3 = (event) => setService3(event.target.value);
    const changeService4 = (event) => setService4(event.target.value);
    const changeService5 = (event) => setService5(event.target.value);
    const changeServiceQuantity1 = (event) => setServiceQuantity1(event.target.value);
    const changeServiceQuantity2 = (event) => setServiceQuantity2(event.target.value);
    const changeServiceQuantity3 = (event) => setServiceQuantity3(event.target.value);
    const changeServiceQuantity4 = (event) => setServiceQuantity4(event.target.value);
    const changeServiceQuantity5 = (event) => setServiceQuantity5(event.target.value);
    const changeServicePrice1 = (event) => setServicePrice1(event.target.value);
    const changeServicePrice2 = (event) => setServicePrice2(event.target.value);
    const changeServicePrice3 = (event) => setServicePrice3(event.target.value);
    const changeServicePrice4 = (event) => setServicePrice4(event.target.value);
    const changeServicePrice5 = (event) => setServicePrice5(event.target.value);
    const changeItem1 = (event) => setItem1(event.target.value);
    const changeItem2 = (event) => setItem2(event.target.value);
    const changeItem3 = (event) => setItem3(event.target.value);
    const changeItem4 = (event) => setItem4(event.target.value);
    const changeItem5 = (event) => setItem5(event.target.value);
    const changeItemQuantity1 = (event) => setItemQuantity1(event.target.value);
    const changeItemQuantity2 = (event) => setItemQuantity2(event.target.value);
    const changeItemQuantity3 = (event) => setItemQuantity3(event.target.value);
    const changeItemQuantity4 = (event) => setItemQuantity4(event.target.value);
    const changeItemQuantity5 = (event) => setItemQuantity5(event.target.value);
    const changeItemPrice1 = (event) => setItemPrice1(event.target.value);
    const changeItemPrice2 = (event) => setItemPrice2(event.target.value);
    const changeItemPrice3 = (event) => setItemPrice3(event.target.value);
    const changeItemPrice4 = (event) => setItemPrice4(event.target.value);
    const changeItemPrice5 = (event) => setItemPrice5(event.target.value);

    // Save the section "payments__section-for-printing" as image, then save it for printing
    const printDocument = () => {
        const input = document.getElementById("payments__section-for-printing");
        window.scrollTo(0, 0);
        html2canvas(input, { scale: 3 }).then((canvas) => {
            canvas.toBlob(function (blob) {
                var FileSaver = require("file-saver");
                FileSaver.saveAs(blob, "Invoice.png");
            });
        });
    };

    // Post data to DB
    const handleSubmitToIncomeHistories = async () => {
        const response = await fetch(`${props.url}income-histories`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                date: `${purchase_date}`,
                income_before_tax: subtotalAfterDiscount,
                income_after_tax: Number((Number(subtotalAfterDiscount) - Number(gst)).toFixed(2)),
                tips: tipsForUpload,
                description: `${description}`,
            }),
        });
        const content = await response.json();
        // Tell user the data above is successfully submitted
        if (response.status === 200) {
            alert(`Income information has been successfully uploaded!`);
            clearForm();
        } else {
            alert("Error! Please make sure the database is running properly.");
        }
    };

    // console.log("balanceDue: ", balanceDue);
    // console.log((Number(subtotalAfterDiscount) + Number(gst)).toFixed(2));
    // console.log("subtotalAfterDiscount: ", subtotalAfterDiscount);
    // console.log("gst: ", gst);
    // console.log("serviceTotal:", serviceTotal);
    // console.log("discount:", discount);
    // console.log("itemTotal:", itemTotal);

    return (
        <section id="payments">
            <h1>Invoice Generator</h1>
            <div id="payments__inputs">
                <div className="label-and-input__discount">
                    <label htmlFor="discount">Discount (eg. 20% off should be 0.2)</label>
                    <input
                        value={discount}
                        onChange={changeDiscount}
                        type="number"
                        name="discount"
                    />
                </div>
                {/* Sell services */}
                <br></br>
                <span>Services</span>
                <div className="label-and-input">
                    <div className="label-and-input__service">
                        <label htmlFor="service1">Service 1</label>
                        <input
                            value={service1}
                            onChange={changeService1}
                            type="text"
                            name="service1"
                        />
                    </div>
                    <div className="label-and-input__quantity">
                        <label htmlFor="service-quantity1">Quantity</label>
                        <input
                            type="number"
                            name="service-quantity1"
                            value={serviceQuantity1}
                            onChange={changeServiceQuantity1}
                        />
                    </div>
                    <div className="label-and-input__price">
                        <label htmlFor="service-price1">Price (per item)</label>
                        <input
                            value={servicePrice1}
                            onChange={changeServicePrice1}
                            type="number"
                            name="service-price1"
                        />
                    </div>
                </div>
                <div className="label-and-input">
                    <div className="label-and-input__service">
                        <label htmlFor="service2">Service 2</label>
                        <input
                            value={service2}
                            onChange={changeService2}
                            type="text"
                            name="service2"
                        />
                    </div>
                    <div className="label-and-input__quantity">
                        <label htmlFor="service-quantity2">Quantity</label>
                        <input
                            type="number"
                            name="service-quantity2"
                            value={serviceQuantity2}
                            onChange={changeServiceQuantity2}
                        />
                    </div>
                    <div className="label-and-input__price">
                        <label htmlFor="service-price2">Price (per item)</label>
                        <input
                            value={servicePrice2}
                            onChange={changeServicePrice2}
                            type="number"
                            name="service-price2"
                        />
                    </div>
                </div>
                <div className="label-and-input">
                    <div className="label-and-input__service">
                        <label htmlFor="service3">Service 3</label>
                        <input
                            value={service3}
                            onChange={changeService3}
                            type="text"
                            name="service3"
                        />
                    </div>
                    <div className="label-and-input__quantity">
                        <label htmlFor="service-quantity3">Quantity</label>
                        <input
                            type="number"
                            name="service-quantity3"
                            value={serviceQuantity3}
                            onChange={changeServiceQuantity3}
                        />
                    </div>
                    <div className="label-and-input__price">
                        <label htmlFor="service-price3">Price (per item)</label>
                        <input
                            value={servicePrice3}
                            onChange={changeServicePrice3}
                            type="number"
                            name="service-price3"
                        />
                    </div>
                </div>
                <div className="label-and-input">
                    <div className="label-and-input__service">
                        <label htmlFor="service4">Service 4</label>
                        <input
                            value={service4}
                            onChange={changeService4}
                            type="text"
                            name="service4"
                        />
                    </div>
                    <div className="label-and-input__quantity">
                        <label htmlFor="service-quantity4">Quantity</label>
                        <input
                            type="number"
                            name="service-quantity4"
                            value={serviceQuantity4}
                            onChange={changeServiceQuantity4}
                        />
                    </div>
                    <div className="label-and-input__price">
                        <label htmlFor="service-price4">Price (per item)</label>
                        <input
                            value={servicePrice4}
                            onChange={changeServicePrice4}
                            type="number"
                            name="service-price4"
                        />
                    </div>
                </div>
                <div className="label-and-input">
                    <div className="label-and-input__service">
                        <label htmlFor="service5">Service 5</label>
                        <input
                            value={service5}
                            onChange={changeService5}
                            type="text"
                            name="service5"
                        />
                    </div>
                    <div className="label-and-input__quantity">
                        <label htmlFor="service-quantity5">Quantity</label>
                        <input
                            type="number"
                            name="service-quantity5"
                            value={serviceQuantity5}
                            onChange={changeServiceQuantity5}
                        />
                    </div>
                    <div className="label-and-input__price">
                        <label htmlFor="service-price5">Price (per item)</label>
                        <input
                            value={servicePrice5}
                            onChange={changeServicePrice5}
                            type="number"
                            name="service-price5"
                        />
                    </div>
                </div>
                {/* Sell items */}
                <span>Products</span>
                <div className="label-and-input">
                    <div className="label-and-input__item">
                        <label htmlFor="item1">item 1</label>
                        <input value={item1} onChange={changeItem1} type="text" name="item1" />
                    </div>
                    <div className="label-and-input__quantity">
                        <label htmlFor="item-quantity1">Quantity</label>
                        <input
                            type="number"
                            name="item-quantity1"
                            value={itemQuantity1}
                            onChange={changeItemQuantity1}
                        />
                    </div>
                    <div className="label-and-input__price">
                        <label htmlFor="item-price1">Price (per item)</label>
                        <input
                            value={itemPrice1}
                            onChange={changeItemPrice1}
                            type="number"
                            name="item-price1"
                        />
                    </div>
                </div>
                <div className="label-and-input">
                    <div className="label-and-input__item">
                        <label htmlFor="item2">item 2</label>
                        <input value={item2} onChange={changeItem2} type="text" name="item2" />
                    </div>
                    <div className="label-and-input__quantity">
                        <label htmlFor="item-quantity2">Quantity</label>
                        <input
                            type="number"
                            name="item-quantity2"
                            value={itemQuantity2}
                            onChange={changeItemQuantity2}
                        />
                    </div>
                    <div className="label-and-input__price">
                        <label htmlFor="item-price2">Price (per item)</label>
                        <input
                            value={itemPrice2}
                            onChange={changeItemPrice2}
                            type="number"
                            name="item-price2"
                        />
                    </div>
                </div>
                <div className="label-and-input">
                    <div className="label-and-input__item">
                        <label htmlFor="item3">item 3</label>
                        <input value={item3} onChange={changeItem3} type="text" name="item3" />
                    </div>
                    <div className="label-and-input__quantity">
                        <label htmlFor="item-quantity3">Quantity</label>
                        <input
                            type="number"
                            name="item-quantity3"
                            value={itemQuantity3}
                            onChange={changeItemQuantity3}
                        />
                    </div>
                    <div className="label-and-input__price">
                        <label htmlFor="item-price3">Price (per item)</label>
                        <input
                            value={itemPrice3}
                            onChange={changeItemPrice3}
                            type="number"
                            name="item-price3"
                        />
                    </div>
                </div>
                <div className="label-and-input">
                    <div className="label-and-input__item">
                        <label htmlFor="item4">item 4</label>
                        <input value={item4} onChange={changeItem4} type="text" name="item4" />
                    </div>
                    <div className="label-and-input__quantity">
                        <label htmlFor="item-quantity4">Quantity</label>
                        <input
                            type="number"
                            name="item-quantity4"
                            value={itemQuantity4}
                            onChange={changeItemQuantity4}
                        />
                    </div>
                    <div className="label-and-input__price">
                        <label htmlFor="item-price4">Price (per item)</label>
                        <input
                            value={itemPrice4}
                            onChange={changeItemPrice4}
                            type="number"
                            name="item-price4"
                        />
                    </div>
                </div>
                <div className="label-and-input">
                    <div className="label-and-input__item">
                        <label htmlFor="item5">item 5</label>
                        <input value={item5} onChange={changeItem5} type="text" name="item5" />
                    </div>
                    <div className="label-and-input__quantity">
                        <label htmlFor="item-quantity5">Quantity</label>
                        <input
                            type="number"
                            name="item-quantity5"
                            value={itemQuantity5}
                            onChange={changeItemQuantity5}
                        />
                    </div>
                    <div className="label-and-input__price">
                        <label htmlFor="item-price5">Price (per item)</label>
                        <input
                            value={itemPrice5}
                            onChange={changeItemPrice5}
                            type="number"
                            name="item-price5"
                        />
                    </div>
                </div>
            </div>
            <div className="label-and-input">
                <label htmlFor="tips">Tips:</label>
                <input type="number" name="tips" value={tips} onChange={changeTips} />
            </div>
            <div id="payment__buttons-for-calculations">
                <button
                    id="pay-employees-button"
                    onClick={(e) => {
                        e.preventDefault();
                        setVisibilityEmployees(true);
                    }}
                >
                    Pay Employee(s)
                </button>
                <button
                    id="calc-store-income-button"
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmitToIncomeHistories();
                    }}
                >
                    Upload Income Information
                </button>
                <button
                    id="clear-button"
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        clearForm();
                        // setBalanceDue(0);
                    }}
                >
                    Clear Form Content
                </button>
            </div>
            <div id="payments__title-and-print-button">
                <span>Invoice Preview</span>
                <button id="payments__print-button" onClick={printDocument}>
                    Generate Invoice
                </button>
            </div>
            <div id="payments__section-for-printing">
                <div id="payments__section-for-printing__header">
                    <img src={Logo} alt="company logo" />
                    <span>pawpawpetspa@gmail.com</span>
                    <span>780-695-5866</span>
                </div>
                <div id="payments__section-for-printing__client-info">
                    <div id="payments__section-for-printing__client-info__client">
                        <span id="span-invoice">Invoice</span>
                        <span>GST Account：71877 1470 RT0001</span>
                        <span>Date: {purchase_date_for_display}</span>
                    </div>
                    <div id="payments__section-for-printing__client-info__tables">
                        <table id="payments__section-for-printing__client-info__tables__details">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Services */}
                                <tr id="service1">
                                    {service1 === "" ? <td></td> : <td>{service1}</td>}
                                    {servicePrice1 === "" || servicePrice1 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{serviceQuantity1}</td>
                                    )}
                                    {servicePrice1 === "" || servicePrice1 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{servicePrice1}</td>
                                    )}
                                    {totalService1 === 0 ? <td></td> : <td>{totalService1}</td>}
                                </tr>
                                <tr id="service2">
                                    {service2 === "" ? <td></td> : <td>{service2}</td>}
                                    {servicePrice2 === "" || servicePrice2 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{serviceQuantity2}</td>
                                    )}
                                    {servicePrice2 === "" || servicePrice2 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{servicePrice2}</td>
                                    )}
                                    {totalService2 === 0 ? <td></td> : <td>{totalService2}</td>}{" "}
                                </tr>
                                <tr id="service3">
                                    {service3 === "" ? <td></td> : <td>{service3}</td>}
                                    {servicePrice3 === "" || servicePrice3 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{serviceQuantity3}</td>
                                    )}
                                    {servicePrice3 === "" || servicePrice3 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{servicePrice3}</td>
                                    )}
                                    {totalService3 === 0 ? <td></td> : <td>{totalService3}</td>}
                                </tr>
                                <tr id="service4">
                                    {service4 === "" ? <td></td> : <td>{service4}</td>}
                                    {servicePrice4 === "" || servicePrice4 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{serviceQuantity4}</td>
                                    )}
                                    {servicePrice4 === "" || servicePrice4 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{servicePrice4}</td>
                                    )}
                                    {totalService4 === 0 ? <td></td> : <td>{totalService4}</td>}
                                </tr>
                                <tr id="service5">
                                    {service5 === "" ? <td></td> : <td>{service5}</td>}
                                    {servicePrice5 === "" || servicePrice5 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{serviceQuantity5}</td>
                                    )}
                                    {servicePrice5 === "" || servicePrice5 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{servicePrice5}</td>
                                    )}
                                    {totalService5 === 0 ? <td></td> : <td>{totalService5}</td>}
                                </tr>
                                {/* Products */}

                                <tr id="item1">
                                    {item1 === "" ? <td></td> : <td>{item1}</td>}
                                    {itemPrice1 === "" || itemPrice1 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{itemQuantity1}</td>
                                    )}
                                    {itemPrice1 === "" || itemPrice1 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{itemPrice1}</td>
                                    )}
                                    {totalItem1 === 0 ? <td></td> : <td>{totalItem1}</td>}
                                </tr>
                                <tr id="item2">
                                    {item2 === "" ? <td></td> : <td>{item2}</td>}
                                    {itemPrice2 === "" || itemPrice2 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{itemQuantity2}</td>
                                    )}
                                    {itemPrice2 === "" || itemPrice2 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{itemPrice2}</td>
                                    )}
                                    {totalItem2 === 0 ? <td></td> : <td>{totalItem2}</td>}
                                </tr>
                                <tr id="item3">
                                    {item3 === "" ? <td></td> : <td>{item3}</td>}
                                    {itemPrice3 === "" || itemPrice3 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{itemQuantity3}</td>
                                    )}
                                    {itemPrice3 === "" || itemPrice3 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{itemPrice3}</td>
                                    )}
                                    {totalItem3 === 0 ? <td></td> : <td>{totalItem3}</td>}
                                </tr>
                                <tr id="item4">
                                    {item4 === "" ? <td></td> : <td>{item4}</td>}
                                    {itemPrice4 === "" || itemPrice4 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{itemQuantity4}</td>
                                    )}
                                    {itemPrice4 === "" || itemPrice4 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{itemPrice4}</td>
                                    )}
                                    {totalItem4 === 0 ? <td></td> : <td>{totalItem4}</td>}
                                </tr>
                                <tr id="item5">
                                    {item5 === "" ? <td></td> : <td>{item5}</td>}
                                    {itemPrice5 === "" || itemPrice5 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{itemQuantity5}</td>
                                    )}
                                    {itemPrice5 === "" || itemPrice5 === 0 ? (
                                        <td></td>
                                    ) : (
                                        <td>{itemPrice5}</td>
                                    )}
                                    {totalItem5 === 0 ? <td></td> : <td>{totalItem5}</td>}
                                </tr>
                                <tr>
                                    <td>
                                        <br></br>
                                    </td>
                                </tr>
                                {discount === 0 ? null : (
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="table__font-bold">Service Discount</td>
                                        <td>{discountPercent}</td>
                                    </tr>
                                )}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className="table__font-bold">Subtotal</td>
                                    <td>{subtotalAfterDiscount}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className="table__font-bold">GST</td>
                                    <td>{gst}</td>
                                </tr>
                                {tips ? (
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="table__font-bold">Tips</td>
                                        <td>{tipsToFixed}</td>
                                    </tr>
                                ) : null}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className="table__font-bold">Total</td>
                                    <td>{balanceDue}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {selectEmployees}
        </section>
    );
}
