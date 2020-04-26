import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { mainFormDescriptionPropType, defaultProps } from './types';
import icon from '../../../assets/images/icon.png';
import './MainFormDescription.css';

function MainFormDescription({ description }) {
  return (
    <div className="column is-full-mobile is-full-tablet is-half-desktop is-half-widescreen is-half-fullhd">
      <img src={icon} alt="O Boticário icon" className="logo-icon" />
      <h1 className="form-title">{description.title}</h1>
      <p className="form-description">{description.description}</p>
      <Link to={description.goBackRoute} className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#5aacdc' }} />
        &nbsp; {description.goBackMessage}
      </Link>
    </div>
  );
}

MainFormDescription.propTypes = mainFormDescriptionPropType;
MainFormDescription.defaultProps = defaultProps;

export default MainFormDescription;
