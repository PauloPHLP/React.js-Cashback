import React from 'react';
import InputMask from 'react-input-mask';
import './RegisterForm.css';

function RegisterForm() {
  return (
    <div>
      <div className="field">
        <div className="control form-item">
          <input className="input" type="text" placeholder="Nome" required />
        </div>
      </div>
      <div className="field">
        <div className="control form-item">
          <InputMask
            className="input"
            type="text"
            placeholder="CPF"
            required
            mask="999.999.999-99"
            maskChar=""
          />
        </div>
      </div>
      <div className="field">
        <div className="control form-item">
          <input className="input" type="email" placeholder="Email" required />
        </div>
      </div>
      <div className="field">
        <div className="control form-item">
          <input
            className="input"
            type="Password"
            placeholder="Password"
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
    </div>
  );
}

export default RegisterForm;
