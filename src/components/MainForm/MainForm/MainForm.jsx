import React from 'react';
import { mainFormPropType, defaultProps } from './types';
import './MainForm.css';

function MainForm({ form: Form }) {
  return (
    <div className="column is-full-mobile is-full-tablet is-half-desktop is-half-widescreen is-half-fullhd form-items">
      <Form />
    </div>
  );
}

MainForm.propTypes = mainFormPropType;
MainForm.defaultProps = defaultProps;

export default MainForm;
