/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./Test1.css";

const Test1 = (props) => {
  return (
      <>
        <div className="headerComponent">
          <div className="headerLogo">Welcome To Our Website</div>
          <ul className="ul-header">
            <li>Home</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div style={{ padding: '2rem' }}>
          <div>Hi</div>
        </div>
      </>
  )
}

export default Test1;