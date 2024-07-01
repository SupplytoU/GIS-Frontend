import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './Login.js';
import Reset from './Reset.js';
import PasswordChanged from "./PasswordChanged.js";
import Help from "./Help.js";
import MyComponent from "./Signup.js";
import Inquries from "./Inquiries.js"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <MyComponent />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path="/reset">
            <Reset />
          </Route>
          <Route exact path="/password-changed">
            <PasswordChanged />
          </Route>
          <Route exact path= "/help">
          <Help/>
          </Route>
          <Route exact path= "/inquiries">
         <Inquries/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;