/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Modal, { openModal } from '../../Modal/Modal';
import { removeSale } from '../../../redux/actions/salesActions';
import { updateUserData } from '../../../redux/actions/usersActions';
import { saleItemHandlerPropType, defaultProps } from './types';
import './SaleItemHandler.css';

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

function SaleItemHandler({
  selectedSale,
  sales,
  users,
  removeSale,
  updateUserData
}) {
  const history = useHistory();

  const updateUserCredits = () => {
    const saleCashbackValue = sales.filter(
      (sale) => sale.code === selectedSale.code
    )[0].cashbackValue;
    const currentUser = users.filter(
      (user) => user.email === localStorage.getItem('loggedUserEmail')
    )[0];

    if (typeof currentUser.credits === 'string') currentUser.credits = 0;

    currentUser.credits -= saleCashbackValue;
    // Preventing negative values.
    currentUser.credits = currentUser.credits > 0 ? currentUser.credits : 0;

    updateUserData(currentUser);
  };

  const handleDelete = () => {
    removeSale(selectedSale.id);
    updateUserCredits();
  };

  const editSale = () => {
    history.push({
      pathname: '/gerenciar',
      state: {
        toEdit: selectedSale
      }
    });
  };

  return (
    <div className="column is-full handler-buttons-column">
      <Modal
        modalId={selectedSale.code}
        title={`Deletar compra ${selectedSale.code}?`}
        message="Você tem certeza que deseja deletar esta compra?"
        confirmButton="Sim"
        cancelButton="Não"
        confirmAction={() => handleDelete()}
      />
      <div className="columns handler-buttons">
        <div className="column is-half">
          <button
            type="submit"
            className="button tertiary-button is-fullwidth edit-button"
            onClick={() => editSale()}
          >
            Editar
          </button>
        </div>
        <div className="column is-half">
          <button
            type="submit"
            className="button delete-button is-fullwidth delete-button"
            onClick={() => openModal(selectedSale.code)}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

SaleItemHandler.propTypes = saleItemHandlerPropType;
SaleItemHandler.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(SaleItemHandler);
