import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './SettingsAccount.css';
import { MdOutlinePassword } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useLocalStorage from "use-local-storage";

const SettingsPass = ({ page }) => { // Add page prop to determine which page is active
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
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

  const handleSaveChanges = () => {
    // Save changes logic here
    console.log("Password changed:", formData);
    setIsEditable(false);
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
              <MdOutlinePassword className='PasswordImg' />
            </div>
            <div className="Accountcolumn-2">
              <div className="Account">Account</div>
            </div>
          </div>
        </div>
        <div className='SettingsAccountBody'>
          <div className="EditProfile2" onClick={handleEditClick}>
            Change Password <CiEdit className="EditIcon2" />
          </div>
          <div className="Accountdiv-6">
            <div className="Accountdiv-7">
              <div className="AccountFirstName">Enter the previously used password</div>
              {isEditable ? (
                <input
                  type="password"
                  className="Accountdiv-9"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                />
              ) : (
                <div className="Accountdiv-9">{formData.oldPassword}</div>
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
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
              ) : (
                <div className="Accountdiv-9">{formData.newPassword}</div>
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
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              ) : (
                <div className="Accountdiv-9">{formData.confirmPassword}</div>
              )}
            </div>
          </div>
          {isEditable && (
            <div className="Accountdiv-23">
              <div className="AccountSave" onClick={handleSaveChanges}>
                Save Changes
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPass;
