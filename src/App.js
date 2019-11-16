import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/" component={LandingPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
