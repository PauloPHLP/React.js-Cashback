import React from 'react';
import LogonLogoImage from '../../components/Logon/LogonLogoImage/LogonLogoImage';
import LogonForm from '../../components/Logon/LogonForm/LogonForm';
import LogonFooter from '../../components/Logon/LogonFooter/LogonFooter';
import './Logon.css';

function Logon() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container is-fluid has-text-centered">
          <LogonLogoImage />
          <LogonForm />
        </div>
      </div>
      <div className="hero-foot">
        <LogonFooter />
      </div>
    </section>
  );
}

export default Logon;
