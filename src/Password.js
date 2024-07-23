import React from 'react'
import Sidebar from './Sidebar'
import './SettingsAccount.css'
import { MdOutlinePassword } from "react-icons/md";
import { CiEdit } from "react-icons/ci"; 
import { useState } from 'react';
import useLocalStorage from "use-local-storage"

const SettingsPass = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [isDark, setIsDark]=useLocalStorage("isDark",false);

  return (
    <>
    <div><Sidebar></Sidebar></div>
      <div className="Accountdiv" data-theme={isDark?"dark":"light"}>
        <div className="AccountBody">
          <div className="Accountdiv-3">
            <div className="Accountcolumn">
            <MdOutlinePassword className='PasswordImg'/>
            </div>
            <div className="Accountcolumn-2">
              <div className="Account">Account</div>
            </div>
          </div>
        </div>
        <div className='SettingsAccountBody'>

        <div className="EditProfile2"onClick={handleEditClick}>
          Change Password<CiEdit className="EditIcon2" /></div>
          
        <div className="Accountdiv-6">
          <div className="Accountdiv-7">
            <div className="AccountFirstName">Enter the previously used password</div>
            {isEditable ? (
                <input
                  type="password"
                  className="Accountdiv-9"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              ) : (
                <div className="Accountdiv-9">{formData.firstName}</div>
              )}
          </div>
          <div className="Accountdiv-10" />
        </div>
        <div className="Accountdiv-6">
          <div className="Accountdiv-7">
            <div className="AccountFirstName">New Password</div>
            {isEditable ? (
                <input
                  type="password"
                  className="Accountdiv-9"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              ) : (
                <div className="Accountdiv-9">{formData.firstName}</div>
              )}
          </div>
          <div className="Accountdiv-7">
            <div className="AccountFirstName">
              Confirm Password
            </div>
            {isEditable ? (
                <input
                  type="password"
                  className="Accountdiv-9"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              ) : (
                <div className="Accountdiv-9">{formData.firstName}</div>
              )}
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

export default SettingsPass;