import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount/CreateAccount";
import SearchAccount from "./SearchAndEditAccount/SearchAndEditAccount";
import "../CommonElements.css";

function Customers(props) {
    // Define states
    const [shouldShowSearchAccount, setShouldShowSearchAccount] = useState(true);

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
                            <button onClick={() => setShouldShowSearchAccount(false)}>
                                Create New Customer Account
                            </button>
                        </Link>
                        <Link to="/search">
                            <button onClick={() => setShouldShowSearchAccount(false)}>
                                Search/Edit Customer Account
                            </button>
                        </Link>
                    </nav>
                </div>
            </Router>
            {/* The following <SearchAccount> should only be shown when no other components are shown. */}
            {shouldShowSearchAccount ? (
                <SearchAccount url={props.url} scenario={scenario} />
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Customers;
