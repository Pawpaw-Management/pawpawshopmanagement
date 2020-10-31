import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import CreateAccount from "./Components/Customers/CreateAccount/CreateAccount.js";
import SearchAccount from "./Components/Customers/SearchAccount/SearchAccount.js";
import Employees from "./Components/Employees/Employees.js";

function App(props) {
   return (
      <Router>
         <div className="App">
            <Switch>
               <Route path="/createAccount">
                  <CreateAccount />
               </Route>
               <Route path="/searchAccount">
                  <SearchAccount allInfo={props.allInfo} />
               </Route>
               <Route path="/employees">
                  <Employees />
               </Route>
            </Switch>
            <nav className="NavButtons">
               <Link to="/createAccount">
                  <button>Appointment</button>
               </Link>
               <Link to="/searchAccount">
                  <button>Customer</button>
               </Link>
               <Link to="/employees">
                  <button>Employees</button>
               </Link>
            </nav>
         </div>
      </Router>
   );
}

export default App;
