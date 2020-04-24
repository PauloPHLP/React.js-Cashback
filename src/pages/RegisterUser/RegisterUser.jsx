import React from 'react';
import RegisterDescription from '../../components/register/RegisterDescription/RegisterDescription';
import RegisterForm from '../../components/register/RegisterForm/RegisterForm';
import './RegisterUser.css';

function RegisterUser() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="register-container columns is-vcentered register-form-elements">
            <RegisterDescription />
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterUser;
