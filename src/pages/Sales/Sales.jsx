import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SalesList from '../../components/SalesList/SalesList/SalesList';
import Footer from '../../components/Footer/Footer';
import './Sales.css';

const salesList = [
  {
    code: '0001',
    value: '1000',
    date: '12/01/2020',
    cashbackPercentage: '10',
    cashbackValue: '100',
    status: 'Em validação'
  },
  {
    code: '0002',
    value: '2000',
    date: '15/02/2020',
    cashbackPercentage: '10',
    cashbackValue: '200',
    status: 'Reprovado'
  },
  {
    code: '0003',
    value: '2656',
    date: '22/03/2020',
    cashbackPercentage: '60',
    cashbackValue: '1593',
    status: 'Em validação'
  },
  {
    code: '0004',
    value: '9000',
    date: '30/03/2020',
    cashbackPercentage: '15',
    cashbackValue: '1350',
    status: 'Aprovado'
  },
  {
    code: '0005',
    value: '6000',
    date: '12/04/2020',
    cashbackPercentage: '30',
    cashbackValue: '1800',
    status: 'Aprovado'
  }
];

function Sales() {
  return (
    <section className="hero is-fullheight">
      <Navbar />
      <SalesList salesList={salesList} />
      <Footer />
    </section>
  );
}

export default Sales;
