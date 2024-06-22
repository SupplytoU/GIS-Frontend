import React from 'react';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import Forgot from './Components/Forgot.js';
import Settings from './Components/Settings.js';
import Solutions from './Components/Dropdown/Solutions.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
    <Router>
        <div className='HomePage'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
      
          <Switch>
            <Route exact path='/Login'>
              <Login />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/Signup'>
              <Signup />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/Reset Password'>
              <Forgot />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/Help'>
              < Settings />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/OurSolutions'>
              <Solutions />
            </Route>
          </Switch>

        </div>
    </Router>
    </div>
  );
}

export default App;