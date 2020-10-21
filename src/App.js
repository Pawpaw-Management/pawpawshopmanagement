import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import CreateAccount from "./Components/CreateAccount/CreateAccount.js";
import SearchAccount from "./Components/SearchAccount/SearchAccount.js";
import CreateAccountButton from "./Components/NavBar/CreateAccountButton/CreateAccountButton.js";
import SearchAccountButton from "./Components/NavBar/SearchAccountButton/SearchAccountButton.js";


function App(props) {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/createAccount">
              <CreateAccount />
            </Route>
            <Route path="/searchAccount">
              <SearchAccount allInfo={props.allInfo} />
            </Route>
          </Switch>
          <nav className="NavButtons">
            <Link to="/createAccount">
              <CreateAccountButton />
            </Link>

            <Link to="/searchAccount">
              <SearchAccountButton allInfo={props.allInfo} />
            </Link>
          </nav>
        </header>
      </div>
    </Router>
  );
}

export default App;