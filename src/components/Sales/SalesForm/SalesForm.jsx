import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import NumericInput from 'react-numeric-input';
import NumberFormat from 'react-number-format';
import { createSale } from '../../../redux/actions/salesActions';
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
    updateUserData: (args) => dispatch(updateUserData(args))
  };
};

function SalesForm({ sales, users, createSale, updateUserData }) {
  const [code, setCode] = useState();
  const [value, setValue] = useState();
  const [date, setDate] = useState();
  const [cashbackPercentage, setCashbackPercentage] = useState(0);
  const [cashbackValue, setCashbackValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value && cashbackPercentage) {
      // Removing all special characters and characters from the value.
      const newValue = value.replace(/[^\w\s]/gi, '').replace('R', '');

      setCashbackValue(
        (parseFloat(newValue) * (cashbackPercentage / 100)).toFixed(2)
      );
    } else if (!value || cashbackPercentage === 0 || !cashbackPercentage)
      setCashbackValue(0);
  }, [value, cashbackPercentage]);

  const updateUserCredits = () => {
    const filteredUser = users.filter(
      (user) => user.email === localStorage.getItem('loggedUserEmail')
    )[0];

    filteredUser.credits += parseFloat(cashbackValue);

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
        code,
        value,
        date,
        cashbackPercentage,
        cashbackValue,
        status: 'Em validação'
      });

      updateUserCredits();
      history.push('/');
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="field">
        <div className="control form-item">
          <input
            className="input"
            type="text"
            placeholder="Código"
            value={code}
            onChange={(e) => setCode(e.target.value)}
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
      <button
        type="submit"
        className="button primary-button is-large is-fullwidth"
      >
        Adicionar venda
      </button>
    </form>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesForm);
