import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AddPet from "./AddNewPet/AddPet"
import EditPet from "./ListOfPets/ListOfPets"
import ListOfSoldPet from "./ListOfSoldPet/ListOfSoldPet"
import "./SalesPets.css";

export default function SalesPets(props) {
    return (
        <Router>
            <section className="sell-pets">
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
                    <Route path="/soldpet">
                        <ListOfSoldPet
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
                    <Link to="/soldpet">
                        <button>Sold Pet</button>
                    </Link>
                </nav>
            </section>
        </Router>
    );
}
