import React from 'react';
import { connect } from 'react-redux';
import { removeSale } from '../../redux/actions/salesActions';
import './Modal.css';

export const openModal = () => {
  const modal = document.getElementById('modal');
  if (modal) modal.classList.add('is-active');
};

export const closeModal = () => {
  const modal = document.getElementById('modal');
  if (modal) modal.classList.remove('is-active');
};

const mapStateToProps = (state) => {
  return {
    sales: state.salesState.sales
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeSale: (args) => dispatch(removeSale(args))
  };
};

function Modal({
  title,
  message,
  confirmButton,
  cancelButton,
  saleCode,
  sales,
  removeSale
}) {
  const handleDelete = () => {
    removeSale(saleCode);
  };

  return (
    <div id="modal" className="modal">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head modal-head">
          <p className="modal-card-title">{title}</p>
          <button
            type="button"
            className="delete modal-close-button"
            aria-label="close"
            onClick={() => closeModal()}
          />
        </header>
        <section className="modal-card-body">{message}</section>
        <footer className="modal-card-foot modal-foot">
          <button
            type="button"
            className="button primary-button is-medium is-fullwidth"
            onClick={() => handleDelete()}
          >
            {confirmButton}
          </button>
          <button
            type="button"
            className="button delete-button is-medium is-fullwidth delete-button-modal"
            onClick={() => closeModal()}
          >
            {cancelButton}
          </button>
        </footer>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
