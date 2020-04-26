import React from 'react';
import { connect } from 'react-redux';
import { removeSale } from '../../redux/actions/salesActions';
import { updateUserData } from '../../redux/actions/usersActions';
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
    sales: state.salesState.sales,
    users: state.usersState.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeSale: (args) => dispatch(removeSale(args)),
    updateUserData: (args) => dispatch(updateUserData(args))
  };
};

function Modal({
  title,
  message,
  confirmButton,
  cancelButton,
  saleCode,
  sales,
  users,
  removeSale,
  updateUserData
}) {
  const updateUserCredits = () => {
    const saleCashbackValue = sales.filter((sale) => sale.code === saleCode)[0]
      .cashbackValue;
    const currentUser = users.filter(
      (user) => user.email === localStorage.getItem('loggedUserEmail')
    )[0];

    currentUser.credits -= saleCashbackValue;
    // Prevent negative values.
    currentUser.credits = currentUser.credits > 0 ? currentUser.credits : 0;

    updateUserData(currentUser);
  };

  const handleDelete = () => {
    removeSale(saleCode);
    updateUserCredits();
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
