import React from 'react'
import Sidebar from './Sidebar'
import './SettingsAccount.css'
import Profile from "./Images/ProfileIcon.png"

const SettingsAccount = () => {
  return (
    <>
    <div><Sidebar></Sidebar></div>
      <div className="Accountdiv">
        <div className="AccountBody">
          <div className="Accountdiv-3">
            <div className="Accountcolumn">
              <img
                loading="lazy"
                src={Profile}
                className="ProfileImg"
              />
            </div>
            <div className="Accountcolumn-2">
              <div className="Account">Account</div>
            </div>
          </div>
        </div>
        <div className='SettingsAccountBody'>
        <div className="EditProfile">Edit Profile</div>
        <div className="Accountdiv-6">
          <div className="Accountdiv-7">
            <div className="AccountFirstName">Firstname</div>
            <div className="Accountdiv-9" />
          </div>
          <div className="Accountdiv-10">
            <div className="AccountFirstName">Lastname</div>
            <div className="Accountdiv-9" />
          </div>
        </div>
        <div className="Accountdiv-6">
          <div className="Accountdiv-7">
            <div className="AccountFirstName">Email</div>
            <div className="Accountdiv-9" />
          </div>
          <div className="Accountdiv-7">
            <div className="AccountFirstName">
              Phone Number
              <br />
            </div>
            <div className="Accountdiv-9" />
          </div>
        </div>

        <div className="EditProfile">Change Password</div>
        <div className="Accountdiv-6">
          <div className="Accountdiv-7">
            <div className="AccountFirstName">Enter the previously used password</div>
            <div className="Accountdiv-9" />
          </div>
          <div className="Accountdiv-10" />
        </div>
        <div className="Accountdiv-6">
          <div className="Accountdiv-7">
            <div className="AccountFirstName">New Password</div>
            <div className="Accountdiv-9" />
          </div>
          <div className="Accountdiv-7">
            <div className="AccountFirstName">
              Confirm Password
            </div>
            <div className="Accountdiv-9" />
          </div>
        </div>
        
          <div className="Accountdiv-23">
          <div className="AccountSave">Save Changes</div>
          </div>
          </div>
        </div>
      </>
  )
}

export default SettingsAccount