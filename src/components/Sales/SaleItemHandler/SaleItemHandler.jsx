import React from 'react';
import Modal, { openModal } from '../../Modal/Modal';
import './SaleItemHandler.css';

function SaleItemHandler({ saleCode }) {
  const handleDelete = () => {
    openModal();
  };

  return (
    <div className="column is-full handler-buttons-column">
      <Modal
        title="Deletar"
        message="Você tem certeza que deseja deletar esta venda?"
        confirmButton="Sim"
        cancelButton="Não"
        saleCode={saleCode}
      />
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
            onClick={() => handleDelete()}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SaleItemHandler;
