import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AddPet from "./AddNewPet/AddPet"
import EditPet from "./ListOfPets/ListOfPets"
import SellPet from "./SellPet/SellPet"
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
