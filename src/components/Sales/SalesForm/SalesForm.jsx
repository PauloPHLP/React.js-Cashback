/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import nextId from 'react-id-generator';
import NumericInput from 'react-numeric-input';
import NumberFormat from 'react-number-format';
import { salesFormPropType, defaultProps } from './types';
import {
  createSale,
  updateSaleData
} from '../../../redux/actions/salesActions';
import { updateUserData } from '../../../redux/actions/usersActions';
import './SalesForm.css';

const mapStateToProps = (state) => {
  return {
    sales: state.salesState.sales,
    users: state.usersState.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSale: (args) => dispatch(createSale(args)),
    updateSaleData: (args) => dispatch(updateSaleData(args)),
    updateUserData: (args) => dispatch(updateUserData(args))
  };
};

function SalesForm({
  sales,
  users,
  createSale,
  updateSaleData,
  updateUserData
}) {
  const [id, setId] = useState();
  const [code, setCode] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [cashbackPercentage, setCashbackPercentage] = useState(0);
  const [initialCashbackValue, setInitialCashbackValue] = useState(null);
  const [cashbackValue, setCashbackValue] = useState(0);
  const [status, setStatus] = useState(null);
  const [buttonText, setButtonText] = useState('Adicionar venda');
  const history = useHistory();

  const setEditMode = (sale) => {
    setId(sale.id);
    setCode(sale.code);
    setValue(sale.value.toString());
    setDate(sale.date);
    setCashbackPercentage(sale.cashbackPercentage);
    setInitialCashbackValue(sale.cashbackValue);
    setCashbackValue(sale.cashbackValue);
    setStatus(sale.status);
    setButtonText('Salvar alterações');
  };

  const getCurrentUser = () => {
    return users.filter(
      (user) => user.email === localStorage.getItem('loggedUserEmail')
    )[0];
  };

  const updateUserCredits = () => {
    const filteredUser = getCurrentUser();

    if (filteredUser.credits !== -1)
      filteredUser.credits += parseFloat(cashbackValue);
    else {
      filteredUser.credits = parseFloat(cashbackValue);
    }

    updateUserData(filteredUser);
  };

  const updateUserCreditsEditMode = () => {
    const filteredUser = getCurrentUser();

    if (filteredUser.credits !== -1)
      filteredUser.credits =
        filteredUser.credits - initialCashbackValue + parseFloat(cashbackValue);
    else
      filteredUser.credits =
        initialCashbackValue + parseFloat(cashbackValue) + 1;

    updateUserData(filteredUser);
  };

  const validateCode = () => {
    const foundedCode = sales.filter((sale) => sale.code === code).length > 0;
    const codeField = document.getElementById('code');

    if (foundedCode) {
      codeField.classList.remove('valid');
      codeField.classList.add('invalid');
    } else {
      codeField.classList.remove('invalid');
      codeField.classList.add('valid');
    }

    return foundedCode;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateCode()) {
      createSale({
        id: nextId(),
        code,
        value,
        date,
        cashbackPercentage,
        cashbackValue,
        status: 'Em validação'
      });

      updateUserCredits();
      history.push('/compras');
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();

    updateSaleData({
      id,
      code,
      value,
      date,
      cashbackPercentage,
      cashbackValue,
      status
    });

    updateUserCreditsEditMode();
    history.push('/compras');
  };

  // Checking if is edit mode.
  useEffect(() => {
    if (history.location.state) setEditMode(history.location.state.toEdit);
  }, [history.location.state]);

  // Formating and calculating cashback value and percentage every time that the values are updated.
  useEffect(() => {
    if (value && cashbackPercentage) {
      // Removing all special characters and characters from the value.
      const newValue = value.replace(/[^\w\s]/gi, '').replace('R', '');

      setCashbackValue(
        (parseFloat(newValue) * (cashbackPercentage / 100)).toFixed(2)
      );
    } else if (!value || cashbackPercentage === 0 || !cashbackPercentage)
      setCashbackValue(0);
  }, [value, cashbackPercentage, cashbackValue]);

  return (
    <form onSubmit={(e) => (status ? handleEdit(e) : handleSubmit(e))}>
      <div className="field">
        <div className="control form-item">
          <input
            className="input"
            type="text"
            placeholder="Código"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <p id="code" className="valid">
          Este código já existe!
        </p>
      </div>
      <div className="field">
        <div className="control form-item">
          <NumberFormat
            placeholder="Valor"
            className="currency-input"
            prefix="R$"
            thousandSeparator
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="field">
        <div className="control form-item">
          <InputMask
            className="input"
            placeholder="Data"
            mask="99/99/9999"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="field">
        <div className="control form-item">
          <NumericInput
            className="input numeric-input"
            min={0}
            max={100}
            placeholder="Porcentagem de cashback"
            value={cashbackPercentage}
            onChange={(e) => setCashbackPercentage(e)}
            required
          />
        </div>
      </div>
      <div className="field">
        <div className="control form-item">
          <NumberFormat
            thousandSeparator
            prefix="R$"
            className="currency-input-disabled"
            placeholder="Valor do cashback"
            value={cashbackValue}
            onChange={(e) => setCashbackValue(e.target.value)}
            disabled
          />
        </div>
      </div>
      {status ? (
        <div className="field">
          <div className="control">
            <div className="select is-large status-select">
              <select
                value={status}
                className="select-item"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Em validação</option>
                <option>Aprovado</option>
                <option>Reprovado</option>
              </select>
            </div>
          </div>
        </div>
      ) : null}
      <button
        type="submit"
        className="button primary-button is-large is-fullwidth"
      >
        {buttonText}
      </button>
    </form>
  );
}

SalesForm.propTypes = salesFormPropType;
SalesForm.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(SalesForm);
