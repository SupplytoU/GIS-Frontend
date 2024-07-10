import React from 'react';
import Account from "./Images/Account.png";
import HelpImg from "./Images/Help.png";
import Logout from "./Images/Logout.png";
import Notifications from "./Images/Notifications.png";
import Arrow2 from "./Images/Arrow-2.png";
import Arrow3 from "./Images/Arrow-3.png";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Sidebar() {
  const [ShowNav,setShowNav]=useState(true);
  onclick=()=>setShowNav(!ShowNav)
  return (
    <>
      <div className="Settingsdiv">
        <div className="vertical-line"></div>
        <div className="Settingsdiv-2">
          <div className="Settingsdiv-3">
            <div className="Settings">Settings</div>
            <div className="SettingsAccount">
              <img loading="lazy" src={Account} className="Settingsimg-1" />
              <div className="AccountTxt">Account</div>
            </div>
          </div>
          <div className="SettingsLine" />
          <div className="Settingsdiv-8">
            <div className="Settingsdiv-9">
              <div className="SettingsEditProfile">
                <div className="SettingsEdit"><Link to='/Account'>Edit Profile</Link></div>
                <div className="SettingsChangePass"><Link to='/Account'>Change Password</Link></div>
              </div>
              <div className="Settingsdiv-13">
              <Link to='/Account'><img loading="lazy" src={Arrow3} className="Settingsimg-2" /></Link>
              <Link to='/Account'><img loading="lazy" src={Arrow3} className="Settingsimg-3" /></Link>
              </div>            
            </div>
          </div>
          <div className="Settingsdiv-3">
            <div className="SettingsAccount">
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
            <div className="SettingsAccount">
              <img loading="lazy" src={HelpImg} className="Settingsimg-1" />
              <div className="AccountTxt">Help</div>
            </div>
          </div>
          <div className="SettingsLine" />
          <div className="Settingsdiv-8">
            <div className="Settingsdiv-9">
              <div className="SettingsEditProfile">
                <div className="SettingsEdit"><Link to='/Help'>FAQs</Link></div>
                <div className="SettingsChangePass"><Link to='Inquiries'>Inquiries</Link></div>
              </div>
              <div className="Settingsdiv-13">
                <Link to='/Help'><img loading="lazy" src={Arrow3} className="Settingsimg-2" /></Link>
                <Link to='Inquiries'><img loading="lazy" src={Arrow3} className="Settingsimg-3" /></Link>
              </div>
            </div>
            <div className="Settingsdiv-29"><Link to="/">SUPPLY2U</Link></div>
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
      </div>
    </>
  );
}

export default Sidebar;
