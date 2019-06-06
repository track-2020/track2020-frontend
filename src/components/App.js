import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup/issues" component={Issues} />
        <Route path="/signup" component={Signup} />  
        <Route exact path="/" component={Login} />
      </Switch> 
    </Router>
  );
}
