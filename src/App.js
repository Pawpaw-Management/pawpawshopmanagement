import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Appointments from "./Components/Appointments/Appointments";
import Customers from "./Components/Customers/Customers";
import Employees from "./Components/Employees/Employees";

function App(props) {
   return (
      <Router>
         <div className="app">
            <Switch>
               <Route path="/customers">
                  <Customers />
               </Route>
               <Route path="/appointments">
                  <Appointments allInfo={props.allInfo} />
               </Route>
               <Route path="/employees">
                  <Employees />
               </Route>
            </Switch>
            <nav className="nav">
               <Link to="/appointments">
                  <button>Appointments</button>
               </Link>
               <Link to="/customers">
                  <button>Customers</button>
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
