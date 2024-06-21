import React from 'react';
import Account from "./Images/Account.png";
import HelpImg from "./Images/Help.png";
import Logout from "./Images/Logout.png";
import Notifications from "./Images/Notifications.png";
import Arrow2 from "./Images/Arrow-2.png";
import Arrow3 from "./Images/Arrow-3.png";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="Settingsdiv">
        <div className="vertical-line"></div>
        <div className="Settingsdiv-2">
          <div className="Settingsdiv-3">
            <div className="Settings">
              <img loading="lazy" src={Arrow2} className="Settingsimg-1" />
              <br />Settings
            </div>
            <div className="Account">
              <img loading="lazy" src={Account} className="Settingsimg-1" />
              <div className="AccountTxt">Account</div>
            </div>
          </div>
          <div className="SettingsLine" />
          <div className="Settingsdiv-8">
            <div className="Settingsdiv-9">
              <div className="EditProfile">
                <div className="Edit">Edit Profile</div>
                <div className="ChangePass">Change Password</div>
              </div>
              <div className="Settingsdiv-13">
                <img loading="lazy" src={Arrow3} className="Settingsimg-2" />
                <img loading="lazy" src={Arrow3} className="Settingsimg-3" />
              </div>            
            </div>
          </div>
          <div className="Settingsdiv-3">
            <div className="Account">
              <img loading="lazy" src={Notifications} className="Settingsimg-1" />
              <div className="AccountTxt">Notifications</div>
            </div>
          </div>
          <div className="SettingsLine" />
          <div className="Settingsdiv-9">
            <div className="NotificationsTxt">Notifications</div>
            <div className="ToggleSwitch">
            <label className='Switch'>
                <input type="checkbox"/>
                <span className='Slider'/>
              </label>
            </div>
          </div>
          <div className="Settingsdiv-3">
            <div className="Account">
              <img loading="lazy" src={HelpImg} className="Settingsimg-1" />
              <div className="AccountTxt">Help</div>
            </div>
          </div>
          <div className="SettingsLine" />
          <div className="Settingsdiv-8">
            <div className="Settingsdiv-9">
              <div className="EditProfile">
                <div className="Edit">FAQs</div>
                <div className="ChangePass">Inquiries</div>
              </div>
              <div className="Settingsdiv-13">
                <img loading="lazy" src={Arrow3} className="Settingsimg-2" />
                <img loading="lazy" src={Arrow3} className="Settingsimg-3" />
              </div>
            </div>
            <div className="Settingsdiv-26">
              
              <div className='Settingsdiv-27'>
                <img
                  loading="lazy"
                  src={Logout}
                  className="Logoutimg"
                />
                <div className="Settingsdiv-28">Logout</div>
              </div>
            </div>
          </div>
          <div className="Settingsdiv-29"><Link to="/">SUPPLY2U</Link></div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
