import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import SalesProducts from "./SalesProducts/SalesProducts";
import SalesPets from "./SalesPets/SalesPets";
import Payments from "./Payment/Payment";

export default function Sales(props) {
    return (
        <Router>
            <section className="appointments">
                <Switch>
                    <Route path="/products">
                        <SalesProducts url={props.url} />
                    </Route>
                    <Route path="/pets">
                        <SalesPets url={props.url} />
                    </Route>
                    <Route path="/payments">
                        <Payments url={props.url} />
                    </Route>
                </Switch>
                <nav className="nav-components">
                    <Link to="/products">
                        <button>Products</button>
                    </Link>
                    <Link to="/pets">
                        <button>Pets</button>
                    </Link>
                    <Link to="/payments">
                        <button>Invoice Generator</button>
                    </Link>
                </nav>
            </section>
        </Router>
    );
}
