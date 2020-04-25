import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getUsers } from '../../../redux/actions/usersActions';
import './LogonHandler.css';

const mapStateToProps = (state) => {
  return {
    users: state.usersState.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (args) => dispatch(getUsers(args))
  };
};

function LogonHandler({ users, loginInfo }) {
  const [errorField, setSetErrorField] = useState('error-message-hidden');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    const filteredUser = users.filter(
      (user) =>
        user.email === loginInfo.email && user.password === loginInfo.password
    );

    if (filteredUser.length) {
      setSetErrorField('error-message-hidden');
      localStorage.setItem('loggedUser', filteredUser[0].name);
      history.push('/vendas');
    } else setSetErrorField('error-message-show');
  };

  return (
    <div className="columns is-centered buttons">
      <div className="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd logon-buttons">
        <p className={errorField}>Por favor verifique seus dados!</p>
        <button
          type="submit"
          className="button primary-button is-medium is-fullwidth submit-button"
          onClick={(e) => handleLogin(e)}
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

export default connect(mapStateToProps, mapDispatchToProps)(LogonHandler);
