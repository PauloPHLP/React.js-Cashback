import React from 'react';
import { mainFormFullPropType, defaultProps } from './types';
import MainFormDescription from '../MainFormDescription/MainFormDescription';
import MainForm from '../MainForm/MainForm';
import './MainFormFull.css';

function MainFormFull({ description, form }) {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="form-container columns is-vcentered form-elements">
            <MainFormDescription description={description} />
            <MainForm form={form} />
          </div>
        </div>
      </div>
    </section>
  );
}

MainFormFull.propTypes = mainFormFullPropType;
MainFormFull.defaultProps = defaultProps;

export default MainFormFull;
