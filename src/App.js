import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Reset from './Reset.js';
import PasswordChanged from "./PasswordChanged.js";
import Help from "./Help.js";
import MyComponent from "./Signup.js";
import Inquries from "./Inquiries.js"
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import Forgot from './Components/Forgot.js';
import SettingsHelpFaqs from './Components/SettingsHelpFaqs.js';
import SettingsHelpInquiries from './Components/SettingsHelpInquiries.js'
import SettingsAccount from './Components/SettingsAccount.js'
import Solutions from './Components/Dropdown/Solutions.js';
import Track from './Components/OurSolutions/Track.js';
import Locations from './Components/OurSolutions/Locations.js';
import Analytics from './Components/OurSolutions/Analytics.js'


const App = () => {
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
            <Route exact path='/OurSolutions'>
              <Solutions />
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
{/* Solutions */}
          <Switch>
            <Route exact path='/Track Order'>
              <Track/>
            </Route>
          </Switch>
          <Switch>
            <Route exact path='/Locations'>
              <Locations />
            </Route>
          </Switch>
          <Switch>
            <Route exact path='/Analytics'>
              <Analytics />
            </Route>
          </Switch>

          
{/* Settings */}
          <Switch>
            <Route exact path='/Account'>
              <SettingsAccount />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/FAQs'>
              < SettingsHelpFaqs />
            </Route>
          </Switch>
          
          <Switch>
            <Route exact path='/Inquiries'>
              <SettingsHelpInquiries />
            </Route>
          </Switch>
    </Router>
  );
}

export default App;