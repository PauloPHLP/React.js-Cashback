import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import icon from '../../../assets/images/icon.png';
import './RegisterDescription.css';

function RegisterDescription() {
  return (
    <div className="column is-full-mobile is-full-tablet is-half-desktop is-half-widescreen is-half-fullhd">
      <img src={icon} alt="O Boticário icon" className="logo-icon" />
      <h1 className="register-title">Cadastro</h1>
      <p className="register-description">
        Faça o seu cadastro e tenha acesso ao benefício de cashback.
      </p>
      <Link to="/" className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#5aacdc' }} />
        &nbsp; Voltar para o logon
      </Link>
    </div>
  );
}

export default RegisterDescription;
