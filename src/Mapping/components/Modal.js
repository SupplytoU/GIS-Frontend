import React from 'react';
import './Modal.css';
import useLocalStorage from 'use-local-storage';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Modal = ({ isOpen, onClose }) => {
  // Move the hook call to the top level of the component
  const [isDark] = useLocalStorage("isDark", false);

  // Early return if the modal is not open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" data-theme={isDark ? "dark" : "light"}>
      <div className="modal-content">
        <div className='checkmark'><IoIosCheckmarkCircleOutline /></div>
        <p>Location details saved successfully!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
