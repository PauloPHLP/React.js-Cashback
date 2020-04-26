import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { footerPropType, defaultProps } from './types';
import './Footer.css';

const mapStateToProps = (state) => {
  return {
    users: state.usersState.users
  };
};

function Footer({ users }) {
  const [currentCredit, setCurrentCredit] = useState(0);

  useEffect(() => {
    const userEmail = localStorage.getItem('loggedUserEmail');
    const foundedUser = users.filter((user) => user.email === userEmail);

    if (foundedUser.length) setCurrentCredit(foundedUser[0].credits);
  }, [users]);

  const handleLogOff = () => {
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('loggedUserEmail');
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
                Meus créditos -{' '}
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(currentCredit)}
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

Footer.propTypes = footerPropType;
Footer.defaultProps = defaultProps;

export default connect(mapStateToProps)(Footer);
