import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import SalesProducts from "./SalesProducts/SalesProducts";
import SalesPets from "./SalesPets/SalesPets"

export default function Sales(props) {
    // Define states

    return (
        <Router>
            <section className="appointments">
                <Switch>
                    <Route path="/products">
                        <SalesProducts
                            url={props.url}
                        />
                    </Route>
                    <Route path="/pets">
                        <SalesPets
                            url={props.url}
                        />
                    </Route>
                </Switch>
                <nav className="nav-components">
                    <Link to="/products">
                        <button>Products</button>
                    </Link>
                    <Link to="/pets">
                        <button>Pets</button>
                    </Link>
                </nav>
            </section>
        </Router>
    );
}
