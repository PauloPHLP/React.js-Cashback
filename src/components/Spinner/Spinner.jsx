import React from 'react';
import Loader from 'react-loader-spinner';

function Spinner() {
  return (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#5aacdc" height={80} width={80} />
    </div>
  );
}

export default Spinner;
