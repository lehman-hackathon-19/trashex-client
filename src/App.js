import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage'

function App() {
  

  return (
    <Router >
      <Switch>
        <Route to="/" component={LandingPage}></Route>
      </Switch>
      
    </Router>
  );
}

export default App;
