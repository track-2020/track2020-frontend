import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LoginSignup from '../pages/LoginSignup';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginSignup} />   
      </Switch> 
    </Router>
  );
}
