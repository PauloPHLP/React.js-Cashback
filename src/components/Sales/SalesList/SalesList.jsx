import React, { useEffect, useState } from 'react';
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
  }, []);

  return (
    <div className="container">
      <section className="sales-list">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-full has-text-centered">
              <h1 className="sales-page-title">Suas vendas</h1>
            </div>
            {salesList && isLoaded ? (
              salesList.map((sale) => <SaleItem sale={sale} />)
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

export default SalesList;
