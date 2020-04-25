import React from 'react';
import MainFormFull from '../../components/MainForm/MainFormFull/MainFormFull';
import RegisterForm from '../../components/Register/RegisterForm/RegisterForm';
import './RegisterUser.css';

const DESCRIPTION = {
  title: 'Cadastro',
  description: 'Faça o seu cadastro e tenha acesso ao benefício de cashback.',
  goBackMessage: 'Voltar para o logon',
  goBackRoute: '/'
};

function RegisterUser() {
  return <MainFormFull description={DESCRIPTION} form={RegisterForm} />;
}

export default RegisterUser;
