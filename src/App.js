import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Login from './Login.js';
import Reset from './Reset.js';
import PasswordChanged from "./PasswordChanged.js";
import Help from "./Help.js";
import MyComponent from "./Signup.js";
import Home from './Home.js';
import Signup from './Signup.js';
import Forgot from './Forgot.js';
import SettingsHelpFaqs from './SettingsHelpFaqs.js';
import SettingsHelpInquiries from './SettingsHelpInquiries.js'
import SettingsAccount from './SettingsAccount.js'
import Solutions from './Dropdown/Solutions.js';
import Track from './OurSolutions/Track.js';
import Locations from './OurSolutions/Locations.js';
import Analytics from './OurSolutions/Analytics.js'
import SideBar from './Sidebar.js'
import Footer from './Footer.js';
import Reset from './Reset.js';
import PasswordChanged from "./PasswordChanged.js";
import Help from "./Help.js";
import Inquries from "./Inquiries.js"

function App() {
  return (
    <>
      <Router>

      <Switch>
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
        
        </Switch>
      </Router>
          <Route exact path= "/inquiries">
         <Inquries/>
          </Route>
     
          <Route exact path='/'><Home /></Route>
          <Route exact path='/OurSolutions'><Solutions /></Route>
          <Route exact path='/Signup'><Signup /></Route>
          <Route exact path='/Reset Password'><Forgot /></Route>
{/* Solutions */}
          <Route exact path='/Track Order'><Track/></Route>
          <Route exact path='/Locations'><Locations /></Route>
          <Route exact path='/Analytics'><Analytics /></Route>
{/* Settings */}
          <Route exact path='/Account'><SettingsAccount /></Route>
          <Route exact path='/FAQs'>< SettingsHelpFaqs /></Route>
          <Route exact path='/Inquiries'><SettingsHelpInquiries /></Route>
          <Route exact path='/SideBar'><SideBar /></Route>
          <Route exact path='/Footer'><Footer /></Route>
          </Switch>

    </Router>
    </>
  );
}

export default App;