import React from 'react';
import { modalPropType, defaultProps } from './types';
import './Modal.css';

export const openModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('is-active');
};

export const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('is-active');
};

function Modal({
  modalId,
  title,
  message,
  confirmButton,
  cancelButton,
  confirmAction
}) {
  return (
    <div id={modalId} className="modal">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head modal-head">
          <p className="modal-card-title">{title}</p>
          <button
            type="button"
            className="delete modal-close-button"
            aria-label="close"
            onClick={() => closeModal(modalId)}
          />
        </header>
        <section className="modal-card-body">{message}</section>
        <footer className="modal-card-foot modal-foot">
          <button
            type="button"
            className="button primary-button is-medium is-fullwidth"
            onClick={() => confirmAction()}
          >
            {confirmButton}
          </button>
          <button
            type="button"
            className="button delete-button is-medium is-fullwidth delete-button-modal"
            onClick={() => closeModal(modalId)}
          >
            {cancelButton}
          </button>
        </footer>
      </div>
    </div>
  );
}

Modal.propTypes = modalPropType;
Modal.defaultProps = defaultProps;

export default Modal;
