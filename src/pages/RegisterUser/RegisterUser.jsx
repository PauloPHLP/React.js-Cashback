import React from 'react';
import MainFormFull from '../../components/MainForm/MainFormFull/MainFormFull';
import './RegisterUser.css';

const DESCRIPTION = {
  title: 'Cadastro',
  description: 'Faça o seu cadastro e tenha acesso ao benefício de cashback.',
  goBackMessage: 'Voltar para o logon',
  goBackRoute: '/'
};

function RegisterUser() {
  const form = () => {
    return (
      <div>
        <div className="field">
          <div className="control form-item">
            <input className="input" type="text" placeholder="Nome" />
          </div>
        </div>
        <div className="field">
          <div className="control form-item">
            <input className="input" type="text" placeholder="CPF" />
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
  };

  return <MainFormFull description={DESCRIPTION} form={form} />;
}

export default RegisterUser;
