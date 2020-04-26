import React, { useEffect, useState } from 'react';
import SaleItemHandler from '../SaleItemHandler/SaleItemHandler';
import './SaleItem.css';

// Used to convert the keys of the sale object to the correct card titles.
const DEFAULT_TITLES = {
  id: 'ID',
  code: 'Código de venda',
  value: 'Valor',
  date: 'Data',
  cashbackPercentage: 'Porcentagem de cashback',
  cashbackValue: 'Valor do cashback',
  status: 'Status'
};

function SaleItem({ sale }) {
  const [color, setColor] = useState('');

  const checkStatusColor = (value) => {
    if (value === 'Aprovado') return 'green-status';
    if (value === 'Reprovado') return 'red-status';

    return 'blue-status';
  };

  const formatValues = (value, key) => {
    switch (key) {
      case 'cashbackValue':
        return Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(value);

      case 'cashbackPercentage':
        return `${value}%`;

      default:
        return value;
    }
  };

  const columnItem = (key) => {
    return (
      <div key={key} className="column is-full">
        <p className="item-title">{DEFAULT_TITLES[key]}:</p>
        <h1 className={key === 'status' ? `${color} item-value` : 'item-value'}>
          {formatValues(sale[key], key)}
        </h1>
      </div>
    );
  };

  useEffect(() => {
    setColor(checkStatusColor(sale.status));
  }, [sale]);

  return (
    <div className="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen  is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
      <div className="sale-item">
        <div className="columns is-multiline">
          {Object.keys(sale).map((key) => columnItem(key))}
          <SaleItemHandler selectedSale={sale} />
        </div>
      </div>
    </div>
  );
}

export default SaleItem;
