import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount/CreateAccount";
import SearchAccount from "./SearchAndEditAccount/SearchAndEditAccount";
import "../CommonElements.css";

function Customers(props) {
    // Define scenario to conditionally render content in <SearchAccount>
    const scenario = "Customers";

    return (
        <div>
            <Router>
                <div className="customers">
                    <Switch>
                        <Route path="/create">
                            <CreateAccount url={props.url} />
                        </Route>
                        <Route path="/search">
                            <SearchAccount url={props.url} scenario={scenario} />
                        </Route>
                    </Switch>
                    <nav className="nav-components">
                        <Link to="/create">
                            <button>Create New Customer Account</button>
                        </Link>
                        <Link to="/search">
                            <button>Search/Edit Customer Account</button>
                        </Link>
                    </nav>
                </div>
            </Router>
            <SearchAccount url={props.url} scenario={scenario} />
        </div>
    );
}

export default Customers;
