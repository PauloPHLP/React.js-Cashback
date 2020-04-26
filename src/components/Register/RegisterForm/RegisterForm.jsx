/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { registerFormPropType, defaultProps } from './types';
import { createUser } from '../../../redux/actions/usersActions';
import './RegisterForm.css';

const mapStateToProps = (state) => {
  return {
    users: state.usersState.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (args) => dispatch(createUser(args))
  };
};

function RegisterForm({ users, createUser }) {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const validateFields = () => {
    const foundedEmail =
      users.filter((user) => user.email === email).length > 0;
    const foundedCpf = users.filter((user) => user.cpf === cpf).length > 0;
    const emailField = document.getElementById('email');
    const cpfField = document.getElementById('cpf');

    if (foundedEmail) {
      emailField.classList.remove('valid');
      emailField.classList.add('invalid');
    } else {
      emailField.classList.remove('invalid');
      emailField.classList.add('valid');
    }

    if (foundedCpf || cpf.length !== 14) {
      cpfField.classList.remove('valid');
      cpfField.classList.add('invalid');
    } else {
      cpfField.classList.remove('invalid');
      cpfField.classList.add('valid');
    }

    return foundedEmail || foundedCpf || cpf.length !== 14;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateFields()) {
      createUser({
        name,
        cpf,
        email,
        password
      });

      history.push('/');
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="field">
        <div className="control form-item">
          <input
            className="input"
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="field">
        <div className="control form-item">
          <InputMask
            className="input"
            type="text"
            placeholder="CPF"
            mask="999.999.999-99"
            maskChar=""
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <p id="cpf" className="valid">
          Verifique seu CPF!
        </p>
      </div>
      <div className="field">
        <div className="control form-item">
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p id="email" className="valid">
            Verifique seu email!
          </p>
        </div>
      </div>
      <div className="field">
        <div className="control form-item">
          <input
            className="input"
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="button primary-button is-large is-fullwidth"
      >
        Criar conta
      </button>
    </form>
  );
}

RegisterForm.propTypes = registerFormPropType;
RegisterForm.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
