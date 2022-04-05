import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Appointments from "./Components/Appointments/Appointments";
import Customers from "./Components/Customers/Customers";
import Employees from "./Components/Employees/Employees";
import Sales from "./Components/Sales/Sales"
import Statistics from "./Components/Statistics/Statistics"
import DailyStatistics from "./Components/Statistics/DailyStatistics/DailyStatistics"
import Logo from "./images/logo.png"

function App(props) {
    // console.log(props.allInfo);
    // console.log(props.url);

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/customers">
                        <Customers url={props.url} />
                    </Route>
                    <Route path="/appointments">
                        <Appointments url={props.url} />
                    </Route>
                    <Route path="/employees">
                        <Employees url={props.url} />
                    </Route>
                    <Route path="/sales">
                        <Sales url={props.url} />
                    </Route>
                    <Route path="/statistics">
                        <Statistics url={props.url} />
                    </Route>
                </Switch>
                <nav className="nav">
                    <img src={Logo} />
                    <Link to="/appointments">
                        <button>Appointments</button>
                    </Link>
                    <Link to="/customers">
                        <button>Customers</button>
                    </Link>
                    <Link to="/employees">
                        <button>Employees</button>
                    </Link>
                    <Link to="/sales">
                        <button>Sales</button>
                    </Link>
                    <Link to="/statistics">
                        <button>Statistics</button>
                    </Link>
                </nav>
            </div>
        </Router>
    );
}

export default App;
