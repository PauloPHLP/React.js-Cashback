import React from 'react';
import SaleItemButtons from '../SaleItemButtons/SaleItemButtons';
import './SaleItem.css';

// Used to convert the keys of the sale object to the correct card titles.
const DEFAULT_TITLES = {
  code: 'Código de venda',
  value: 'Valor',
  date: 'Data',
  cashbackPercentage: 'Porcentagem de cashback',
  cashbackValue: 'Valor do cashback',
  status: 'Status'
};

function SaleItem({ sale }) {
  const checkStatusColor = (value) => {
    if (value === 'Aprovado') return 'green-status';

    if (value === 'Reprovado') return 'red-status';

    if (value === 'Em validação') return 'blue-status';

    return 'green-status';
  };

  const columnItem = (key) => {
    return (
      <div className="column is-full">
        <p className="item-title">{DEFAULT_TITLES[key]}:</p>
        <h1
          className={
            key === 'status'
              ? `${checkStatusColor(sale.status)} item-value`
              : 'item-value'
          }
        >
          {sale[key]}
        </h1>
      </div>
    );
  };

  return (
    <div className="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen  is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
      <div className="sale-item">
        <div className="columns is-multiline">
          {Object.keys(sale).map((key) => columnItem(key))}
          <SaleItemButtons />
        </div>
      </div>
    </div>
  );
}

export default SaleItem;
