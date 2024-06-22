import React from 'react';
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

        </div>
    </Router>
    </div>
  );
}

export default App;