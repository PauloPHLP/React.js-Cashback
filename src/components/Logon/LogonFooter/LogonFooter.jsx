import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './LogonFooter.css';

function LogonFooter() {
  return (
    <nav className="tabs">
      <div className="container">
        <a
          className="footer-link"
          href="https://paulophlp.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site do desenvolvedor &nbsp;
          <FontAwesomeIcon icon={faArrowUp} style={{ color: '#5aacdc' }} />
        </a>
      </div>
    </nav>
  );
}

export default LogonFooter;
