import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { CustomProvider } from './redux/provider.js';
import Login from './Login.js';
import Reset from './Reset.js';
import PasswordChanged from './PasswordChanged.js';
import Help from './Help.js';
import Signup from './Signup.js';
import Forgot from './Forgot.js';
import Success from './Success.js';
import LoginIcon from './LoginIcon.js';
import LandingPage from './LandingPage.js';
import SettingsAccount from './SettingsAccount.js';
import Solutions from './Dropdown/Solutions.js';
import Track from './OurSolutions/Track.js';
import Locations from './OurSolutions/Locations.js';
import Analytics from './OurSolutions/Analytics.js';
import SideBar from './Sidebar.js';
import Section1 from './Section1.js';
import Inquries from './Inquiries.js';
import HomeFinal from './HomeFinal.js';
import Footer from './Footer.js';
import SettingsPass from './Password.js';
import RequireAuth from './redux/features/auth/RequireAuth.js';
import Construct from './Construct.js';

function App() {
  return (
    <Router>
      <CustomProvider>
        <Switch>
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/password-changed" component={PasswordChanged} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/inquiries" component={Inquries} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/landingPage" component={LandingPage} />
          <Route exact path="/" component={HomeFinal} />
          <Route exact path="/OurSolutions" component={Solutions} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Success" component={Success} />
          <Route exact path="/Reset Password" component={Forgot} />
          <Route exact path="/Track Order" component={Track} />
          <Route exact path="/Locations" component={Locations} />
          <Route exact path="/Analytics" component={Analytics} />
          <Route exact path="/Account" component={SettingsAccount} />
          <Route exact path="/SideBar" component={SideBar} />
          <Route exact path="/Section1" component={Section1} />
          <Route exact path="/LoginIcon" component={LoginIcon} />
          <Route exact path="/Footer" component={Footer} />
          <Route exact path="/ChangePassword" component={SettingsPass} />
          <Route exact path="/Soon" component={Construct} />
          
          {/* Catch-all route or 404 page */}
          {/* <Route path="*" component={NotFoundPage} /> */}
        </Switch>
      </CustomProvider>
    </Router>
  );
}

export default App;
