import React from 'react';
import './RegisterForm.css';

function RegisterForm() {
  return (
    <div className="column is-full-mobile is-full-tablet is-half-desktop is-half-widescreen is-half-fullhd form-items">
      <div className="field">
        <div className="control form-item">
          <input className="input" type="text" placeholder="Nome" />
        </div>
      </div>
      <div className="field">
        <div className="control form-item">
          <input className="input" type="email" placeholder="CPF" />
        </div>
      </div>
      <div className="field">
        <div className="control form-item">
          <input className="input" type="email" placeholder="Email" />
        </div>
      </div>
      <div className="field">
        <div className="control form-item">
          <input className="input" type="Password" placeholder="Password" />
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
