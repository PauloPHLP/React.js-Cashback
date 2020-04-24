import React from 'react';
import './SalesButtons.css';

function SalesButtons() {
  return (
    <div className="column is-full handler-buttons-column">
      <div className="columns handler-buttons">
        <div className="column is-half">
          <button
            type="submit"
            className="button tertiary-button is-fullwidth edit-button"
          >
            Editar
          </button>
        </div>
        <div className="column is-half">
          <button
            type="submit"
            className="button delete-button is-fullwidth delete-button"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SalesButtons;
