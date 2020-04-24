import React from 'react';
import LogonLogoImage from '../../components/logon/LogonLogoImage/LogonLogoImage';
import LogonForm from '../../components/logon/LogonForm/LogonForm';
import LogonFooter from '../../components/logon/LogonFooter/LogonFooter';
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
