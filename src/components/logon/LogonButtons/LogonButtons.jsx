import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './LogonButtons.css';

function LogonButtons() {
  return (
    <div className="columns is-centered buttons">
      <div className="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd logon-buttons">
        <button
          type="submit"
          className="button primary-button is-medium is-fullwidth submit-button"
        >
          Login
        </button>
        <Link to="/registrar" className="register-link">
          Não tenho uma conta &nbsp;
          <FontAwesomeIcon icon={faArrowRight} style={{ color: '#5aacdc' }} />
        </Link>
      </div>
    </div>
  );
}

export default LogonButtons;
