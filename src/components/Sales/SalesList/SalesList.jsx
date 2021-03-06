import React, { useEffect, useState } from 'react';
import { salesListPropType, defaultProps } from './types';
import Spinner from '../../Spinner/Spinner';
import SaleItem from '../SaleItem/SaleItem';
import './SalesList.css';

function SalesList({ salesList }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fake loader.
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, [salesList, isLoaded]);

  return (
    <div className="container">
      <section className="sales-list">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-full has-text-centered">
              <h1 className="sales-page-title">Suas compras</h1>
            </div>
            {salesList && isLoaded ? (
              salesList.map((sale) => <SaleItem key={sale.code} sale={sale} />)
            ) : (
              <div className="column is-full has-text-centered">
                <Spinner />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

SalesList.propTypes = salesListPropType;
SalesList.defaultProps = defaultProps;

export default SalesList;
