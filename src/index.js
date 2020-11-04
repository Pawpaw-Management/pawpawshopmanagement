import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Define database url for easier modification in the future
const url = "http://localhost:1337/";

//Fetch data from server
//1. customers and their pets information.
const getCustomersAndPetsInfo = async function () {
   const response = await fetch(`${url}customers-and-pets`);
   var info = await response.json();
   return info;
};

//2. employees information.
const getEmployeesInfo = async function () {
   const response = await fetch(`${url}employees`);
   var info = await response.json();
   return info;
};

//3. items for sale information.
const getItemsForSaleInfo = async function () {
   const response = await fetch(`${url}items-for-sales`);
   var info = await response.json();
   return info;
};

//4. pets for sale information.
const getPetsForSaleInfo = async function () {
   const response = await fetch(`${url}pets-for-sales`);
   var info = await response.json();
   return info;
};

//5. daily appointments information.
const getAppointmentsInfo = async function () {
    const response = await fetch(`${url}daily-appointments`);
    var info = await response.json();
    return info;
 };

//6. store income statistics information.
const getIncomeStatisticsInfo = async function () {
    const response = await fetch(`${url}income-statistics`);
    var info = await response.json();
    return info;
 };

// Render <App> if all data is successfully retrived from local Strapi
Promise.all([
   getCustomersAndPetsInfo(),
   getEmployeesInfo(),
   getItemsForSaleInfo(),
   getPetsForSaleInfo(),
   getAppointmentsInfo(),
   getIncomeStatisticsInfo()
]).then((allInfo) => {
   console.log(allInfo);
   ReactDOM.render(<App allInfo={allInfo} />, document.getElementById("root"));
});

serviceWorker.unregister();
