import React from 'react';
import logo from '../../../assets/images/logo.png';
import './LogonLogoImage.css';

function LogonLogoImage() {
  return (
    <div className="columns">
      <div className="column is-full">
        <img src={logo} alt="O Boticário logo." className="logo-img" />
      </div>
    </div>
  );
}

export default LogonLogoImage;
