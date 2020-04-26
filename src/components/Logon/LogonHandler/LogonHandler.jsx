/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getUsers, updateUserData } from '../../../redux/actions/usersActions';
import api from '../../../services/api';
import './LogonHandler.css';

const mapStateToProps = (state) => {
  return {
    users: state.usersState.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (args) => dispatch(getUsers(args)),
    updateUserData: (args) => dispatch(updateUserData(args))
  };
};

function LogonHandler({ users, loginInfo, updateUserData }) {
  const [errorField, setSetErrorField] = useState('error-message-hidden');
  const history = useHistory();

  const finishLogin = (user) => {
    setSetErrorField('error-message-hidden');
    localStorage.setItem('loggedUser', user.name);
    localStorage.setItem('loggedUserEmail', user.email);
    history.push('/vendas');
  };

  async function updateUserCredits(user) {
    try {
      const formmatedCpf = user.cpf.replace(/[^\w\s]/gi, '');

      const response = await api.get(`cashback?cpf=${formmatedCpf}`, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        withCredentials: false,
        credentials: 'cross-origin'
      });

      const newUserInfo = user;
      newUserInfo.credits = response.data.body.credit;

      updateUserData(newUserInfo);
      finishLogin(newUserInfo);
    } catch {
      alert('Erro no login. Por favor tente novamente!');
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const filteredUser = users.filter(
      (user) =>
        user.email === loginInfo.email && user.password === loginInfo.password
    );

    if (filteredUser.length) updateUserCredits(filteredUser[0]);
    else setSetErrorField('error-message-show');
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
