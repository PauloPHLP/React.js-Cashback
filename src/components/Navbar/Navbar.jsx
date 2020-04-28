import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className="hero-head">
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/compras" className="navbar-item">
              <img src={logo} alt="O Boticário logo." />
            </Link>
            <p className="greeting-message">
              Seja bem-vindo(a), {localStorage.getItem('loggedUser')}!
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
