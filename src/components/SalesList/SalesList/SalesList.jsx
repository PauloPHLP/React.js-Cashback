import React from 'react';
import SaleItem from '../SaleItem/SaleItem';
import './SalesList.css';

function SalesList({ salesList }) {
  return (
    <div className="container">
      <section className="sales-list">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-full has-text-centered">
              <h1 className="sales-page-title">Suas vendas</h1>
            </div>
            {salesList
              ? salesList.map((sale) => <SaleItem sale={sale} />)
              : null}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SalesList;
