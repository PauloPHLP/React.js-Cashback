import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCheck, faLock } from '@fortawesome/free-solid-svg-icons';
import LogonHandler from '../LogonHandler/LogonHandler';
import './LogonForm.css';

function LogonForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className="columns is-centered">
        <div className="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd logon-form">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input logon-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: '#5aacdc' }}
                />
              </span>
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon={faCheck} style={{ color: '#5aacdc' }} />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input logon-input"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faLock} style={{ color: '#5aacdc' }} />
              </span>
            </p>
          </div>
        </div>
      </div>
      <LogonHandler loginInfo={{ email, password }} />
    </>
  );
}

export default LogonForm;
