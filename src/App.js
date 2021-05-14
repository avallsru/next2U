import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home,  LastConfirmation, StoreDetails, StoresResults } from './containers';
import './App.css';

function App() {
  return (
    <div className="App-page-next2u">
      <Router>
        <Switch>
        <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/stores_results" component={StoresResults}>
            <StoresResults />
          </Route>
          <Route path="/store_details" component={StoreDetails}>
            <StoreDetails />
          </Route>
          <Route path="/last_confirmation" component={LastConfirmation}>
            <LastConfirmation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
