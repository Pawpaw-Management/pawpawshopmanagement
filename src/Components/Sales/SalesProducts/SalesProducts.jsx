import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "./SalesProducts.css"

export default function SalesProducts() {
    return (
        <Router>
        <section className="sell-products">
            <Switch>
                <Route path="/addproduct">
                    <Addproduct
                        url={props.url}
                    />
                </Route>
                <Route path="/editproduct">
                    <Editproduct
                        url={props.url}
                    />
                </Route>
                <Route path="/soldproduct">
                    <ListOfSoldproduct
                        url={props.url}
                    />
                </Route>
            </Switch>
            <nav className="nav-components-left-screen">
                <Link to="/addproduct">
                    <button>Add product</button>
                </Link>
                <Link to="/editproduct">
                    <button>Edit product</button>
                </Link>
                <Link to="/soldproduct">
                    <button>Sold product</button>
                </Link>
            </nav>
        </section>
    </Router>
    )
}
