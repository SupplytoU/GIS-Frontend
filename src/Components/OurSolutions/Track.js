import React from 'react'
import './Track.css'

const Track = () => {
  return (
    <>
      <div className="Trackdiv">
        <div className="Trackdiv-2">
          <div className="TrackSupply2u">SUPPLY2U</div>
          <div className="Trackdiv-4">
            <span className='Span1'>
              Food tracking made{" "}
            </span>
            <span className='Span2'>
              easy!
            </span>
          </div>
          <div className="Trackdiv-5" />
          <div className="Trackdiv-6">
            <div className="OrderNumber">Order number</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6e8c2f1ec4e635ee21ca56e786c61a68ee8b7a4124b08f6aa4035559ba790c2?"
              className="Trackimg"
            />
          </div>
          <div className="RouteDetails">Route Details</div>
          <div className="Trackdiv-9">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2473727c8f976772275e42b8a4f8d1e413d385ff78a65cad7e066fd8b613b41?"
              className="Trackimg-2"
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
  )
}

export default Track