import React, { useState } from 'react';
import './Track.css';
import ArrowBtn from './ArrowBtn.png';
import {Link} from "react-router-dom";

const Track = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [error, setError] = useState('');

  const handleOrderNumberChange = (e) => {
    setOrderNumber(e.target.value);
    setError(''); // Clear any previous error message
  };

  const handleArrowClick = () => {
    if (orderNumber.trim() === '' || isNaN(orderNumber)) {
      setError('Please enter a valid order number.');
    } else {
      alert(`Order number: ${orderNumber}`);
      setOrderNumber(''); // Clear the input field
      setError('');
    }
  };

  return (
    <>
      <div className="Trackdiv">
        <div className="Trackdiv-2">
          <div className="TrackSupply2u"><Link to="/">SUPPLY2U</Link></div>
          <div className="Trackdiv-4">
            <span className="Span1">
              Food tracking made{' '}
            </span>
            <span className="Span2">
              easy!
            </span>
          </div>
          <div className="Trackdiv-5" />
          <div className="Trackdiv-6">
            <div className="OrderNumber">
              <input
                type="text"
                value={orderNumber}
                onChange={handleOrderNumberChange}
                placeholder="Enter order number"
              />
              
            </div>
            <img
              loading="lazy"
              src={ArrowBtn}
              className="Trackimg"
              alt="Arrow Button"
              onClick={handleArrowClick}
              style={{ cursor: 'pointer' }}
            />
          </div>
          {error && <div style={{ color: 'red', fontSize:14, marginTop:10, fontFamily:'Inter',}}>{error}</div>}
          <div className="RouteDetails">Route Details</div>
          <div className="Trackdiv-9">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2473727c8f976772275e42b8a4f8d1e413d385ff78a65cad7e066fd8b613b41?"
              className="Trackimg-2"
              alt="Route"
            />
            <div className="Trackdiv-10">
              <div className="PickupPoint">Pick-up point</div>
              <div className="Destination">Destination</div>
            </div>
          </div>
          <div className="Trackdiv-13">
            <div className="Trackdiv-14">
              <div className="OrderStatus">Order Status</div>
              <div className="Trackdiv-16" />
            </div>
            <div className="Trackdiv-17">
              <div className="ETA">ETA</div>
              <div className="Trackdiv-19" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Track;
