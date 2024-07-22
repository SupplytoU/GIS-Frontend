import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
// import { useMediaQuery } from 'react-responsive';
import { CustomProvider } from "./redux/provider.js";
import Login from "./Login.js";
import Reset from "./Reset.js";
import PasswordChanged from "./PasswordChanged.js";
import Help from "./Help.js";
// import Home from './Home.js';
import Signup from "./Signup.js";
import Forgot from "./Forgot.js";
import Success from "./Success.js";
import LoginIcon from "./LoginIcon.js";
import LandingPage from "./LandingPage.js";
import SettingsAccount from "./SettingsAccount.js";
import Solutions from "./Dropdown/Solutions.js";
import Track from "./OurSolutions/Track.js";
import Locations from "./OurSolutions/Locations.js";
import Analytics from "./OurSolutions/Analytics.js";
import SideBar from "./Sidebar.js";
import Section1 from "./Section1.js";
import Inquries from "./Inquiries.js";
import HomeFinal from "./HomeFinal.js";
import Footer from "./Footer.js";
import SettingsPass from "./Password.js";
import RequireAuth from "./redux/features/auth/RequireAuth.js";
import Construct from "./Construct.js";
function App() {
  // const isMobileDevice = useMediaQuery({ query: "(min-device-width: 480px)" });
  // const isTabletDevice = useMediaQuery({ query: "(min-device-width: 768px)" });
  // const isLaptop = useMediaQuery({ query: "(min-device-width: 1024px)" });
  // const isDesktop = useMediaQuery({ query: "(min-device-width: 1200px)" });
  // const isBigScreen = useMediaQuery({ query: "(min-device-width: 1201px)" });

  return (
    <>
      <Router>
        <Switch>
          <CustomProvider>
            <RequireAuth>
              <Route exact path="/reset">
                <Reset />
              </Route>
              <Route exact path="/password-changed">
                <PasswordChanged />
              </Route>
              <Route exact path="/help">
                <Help />
              </Route>
              <Route exact path="/inquiries">
                <Inquries />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/landingPage">
                <LandingPage />
              </Route>

              <Route exact path="/inquiries">
                <Inquries />
              </Route>

              <Route exact path="/">
                <HomeFinal />
              </Route>
              <Route exact path="/OurSolutions">
                <Solutions />
              </Route>
              <Route exact path="/Signup">
                <Signup />
              </Route>
              <Route exact path="/Success">
                <Success />
              </Route>
              <Route exact path="/Reset Password">
                <Forgot />
              </Route>
              {/* Solutions */}
              <Route exact path="/Track Order">
                <Track />
              </Route>
              <Route exact path="/Locations">
                <Locations />
              </Route>
              <Route exact path="/Analytics">
                <Analytics />
              </Route>
              {/* Settings */}
              <Route exact path="/Account">
                <SettingsAccount />
              </Route>
              <Route exact path="/SideBar">
                <SideBar />
              </Route>
              <Route exact path="/Section1">
                <Section1 />
              </Route>
              <Route exact path="/LoginIcon">
                <LoginIcon />
              </Route>
              <Route exact path="/Footer">
                <Footer />
              </Route>
              <Route exact path="/Change Password">
                <SettingsPass />
              </Route>
              <Route exact path="/Soon">
                <Construct />
              </Route>
            </RequireAuth>
          </CustomProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
