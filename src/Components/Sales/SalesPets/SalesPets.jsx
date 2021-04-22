import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AddPet from "./Add New Pet/AddPet"
import EditPet from "./Edit Pet/EditPet"
import SellPet from "./Sell Pet/SellPet"
import "./SalesPets.css";

export default function SalesPets(props) {
    // Define states

    return (
        <Router>
            <section className="appointments">
                <Switch>
                    <Route path="/addpet">
                        <AddPet
                            url={props.url}
                        />
                    </Route>
                    <Route path="/editpet">
                        <EditPet
                            url={props.url}
                        />
                    </Route>
                    <Route path="/sellpet">
                        <SellPet
                            url={props.url}
                        />
                    </Route>
                </Switch>
                <nav className="nav-components-left-screen">
                    <Link to="/addpet">
                        <button>Add Pet</button>
                    </Link>
                    <Link to="/editpet">
                        <button>Edit Pet</button>
                    </Link>
                    <Link to="/sellpet">
                        <button>Sell Pet</button>
                    </Link>
                </nav>
            </section>
        </Router>
    );
}
