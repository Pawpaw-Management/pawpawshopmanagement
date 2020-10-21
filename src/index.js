import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Fetch data from server
const getCustomersInfo = async function () {
  const response = await fetch("http://localhost:1337/customers", {
    "method": "GET",
    "headers": {
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk3Nzc0NTgxLCJleHAiOjE2MDAzNjY1ODF9.unQELe_ldBhcVIzj3Jf9TQd7l3X6v62Jtr0zamJ3P14"
    }
  });
  var customersInfo = await response.json();
  return customersInfo;
}

Promise.all([
  getCustomersInfo()
]).then(allInfo => {
  ReactDOM.render(<App allInfo = {allInfo} />, document.getElementById("root"));
})

serviceWorker.unregister();
