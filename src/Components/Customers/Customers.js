import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount/CreateAccount"
import SearchAccount from "./SearchAccount/SearchAccount"
import "../CommonElements.css"

export default class Customers extends Component {
   render() {
      return (
         <Router>
            <div className="customers">
               <Switch>
                  <Route path="/create">
                     <CreateAccount />
                  </Route>
                  <Route path="/search">
                     <SearchAccount />
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
      );
   }
}
