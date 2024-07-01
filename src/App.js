import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './Footer.js';

const App = () => {
  return (
    <div className='App'>
    <Router>
        <div className='HomePage'>
          <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/Login'><Login /></Route>
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
        </div>
    </Router>
    </div>
  );
}

export default App;