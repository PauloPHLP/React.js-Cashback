import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import NumericInput from 'react-numeric-input';
import NumberFormat from 'react-number-format';
import './SalesForm.css';

function SalesForm() {
  const [value, setValue] = useState();
  const [percentage, setPercentage] = useState(0);
  const [cashback, setCashback] = useState(0);

  useEffect(() => {
    if (value && percentage) {
      // Removing all special characters and characters from the value.
      const newValue = value.replace(/[^\w\s]/gi, '').replace('R', '');

      setCashback((parseFloat(newValue) * (percentage / 100)).toFixed(2));
    } else if (!value || percentage === 0 || !percentage) setCashback(0);
  }, [value, percentage]);

  return (
    <div>
      <div className="field">
        <div className="control form-item">
          <input className="input" type="text" placeholder="Código" />
        </div>
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
          <InputMask className="input" placeholder="Data" mask="99/99/9999" />
        </div>
      </div>
      <div className="field">
        <div className="control form-item">
          <NumericInput
            className="input numeric-input"
            min={0}
            max={100}
            placeholder="Porcentagem de cashback"
            value={percentage}
            onChange={(e) => setPercentage(e)}
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
            value={cashback}
            onChange={(e) => setCashback(e.target.value)}
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
    </div>
  );
}

export default SalesForm;
