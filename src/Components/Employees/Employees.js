import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import CreateEmployeeAccount from "./CreateEmployeeAccount/CreateEmployeeAccount";
import SearchAndEditEmployee from "./SearchAndEditEmployee/SearchAndEditEmployee";
import "../CommonElements.css";

function Employees(props) {
    return (
        <Router>
            <div className="customers">
                <Switch>
                    <Route path="/create">
                        <CreateEmployeeAccount url={props.url} />
                    </Route>
                    <Route path="/search">
                        <SearchAndEditEmployee url={props.url} />
                    </Route>
                </Switch>
                <nav className="nav-components">
                    <Link to="/create">
                        <button>Create New Employee Account</button>
                    </Link>
                    <Link to="/search">
                        <button>Search/Edit Employee Account</button>
                    </Link>
                </nav>
            </div>
        </Router>
    );
}

export default Employees;
