import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const handleLogOff = () => {
    localStorage.removeItem('loggedUser');
  };

  return (
    <div className="hero-foot">
      <nav className="tabs is-fullwidth">
        <div className="container">
          <ul>
            <li>
              <Link
                to="/gerenciar"
                className="primary-button add-sale-btn"
                style={{ color: '#fff' }}
              >
                Adicionar venda
              </Link>
            </li>
            <li>
              <Link
                to="/vendas"
                className="tertiary-button"
                style={{ color: '#fff' }}
              >
                Meus créditos - R$4.293,00
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="secondary-button log-off-btn"
                style={{ color: '#fff' }}
                onClick={() => handleLogOff()}
              >
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
