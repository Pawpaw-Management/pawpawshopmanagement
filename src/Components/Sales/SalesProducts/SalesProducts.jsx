import React from "react";
import AddProduct from "./AddNewProduct/AddProduct";
import EditProduct from "./ListOfProducts/ListOfProducts";
import ListOfSoldProduct from "./ListOfSoldProduct/ListOfSoldProduct";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "./SalesProducts.css";

export default function SalesProducts(props) {
    return (
        <Router>
            <section className="sell-products">
                <Switch>
                    <Route path="/addproduct">
                        <AddProduct url={props.url} />
                    </Route>
                    <Route path="/editproduct">
                        <EditProduct url={props.url} />
                    </Route>
                    <Route path="/soldproduct">
                        <ListOfSoldProduct url={props.url} />
                    </Route>
                </Switch>
                <nav className="nav-components-left-screen">
                    <Link to="/addproduct">
                        <button>
                            Add<br></br>Product
                        </button>
                    </Link>
                    <Link to="/editproduct">
                        <button>
                            Edit<br></br>Product
                        </button>
                    </Link>
                    <Link to="/soldproduct">
                        <button>
                            Sold<br></br>Product
                        </button>
                    </Link>
                </nav>
            </section>
        </Router>
    );
}
