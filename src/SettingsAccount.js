import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './SettingsAccount.css';
import { CiEdit } from "react-icons/ci"; 
import { VscAccount } from "react-icons/vsc";
import useLocalStorage from "use-local-storage";

const SettingsAccount = ({ page }) => { // Add page prop to determine which page is active
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isDark] = useLocalStorage("isDark", false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={`settings-account-container ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      {(page === 'ChangePassword') && (
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {sidebarCollapsed ? 'Open Sidebar' : 'Close Sidebar'}
        </div>
      )}
      <div className="Accountdiv" data-theme={isDark ? "dark" : "light"}>
        <div className="AccountBody">
          <div className="Accountdiv-3">
            <div className="Accountcolumn">
              <VscAccount className='Profile' />
            </div>
            <div className="Accountcolumn-2">
              <div className="Account">Account</div>
            </div>
          </div>
        </div>
        <div className='SettingsAccountBody'>
          <div className="EditProfile" onClick={handleEditClick}>
            Edit Profile <CiEdit className="EditIcon" />
          </div>
          <div className="Accountdiv-6">
            <div className="Accountdiv-7">
              <div className="AccountFirstName">Firstname</div>
              {isEditable ? (
                <input
                  type="text" // Updated type
                  className="Accountdiv-9"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              ) : (
                <div className="Accountdiv-9">{formData.firstName}</div>
              )}
            </div>
            <div className="Accountdiv-10">
              <div className="AccountFirstName">Lastname</div>
              {isEditable ? (
                <input
                  type="text" // Updated type
                  className="Accountdiv-9"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              ) : (
                <div className="Accountdiv-9">{formData.lastName}</div>
              )}
            </div>
          </div>
          <div className="Accountdiv-6">
            <div className="Accountdiv-7">
              <div className="AccountFirstName">Email</div>
              {isEditable ? (
                <input
                  type="email"
                  className="Accountdiv-9"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              ) : (
                <div className="Accountdiv-9">{formData.email}</div>
              )}
            </div>
          </div>
          <div className="Accountdiv-23">
            <div className="AccountSave">Save Changes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsAccount;
