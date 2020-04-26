import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MainFormFull from '../../components/MainForm/MainFormFull/MainFormFull';
import SalesForm from '../../components/Sales/SalesForm/SalesForm';
import './SaleManagement.css';

const DESCRIPTION = {
  title: 'Gerenciar compra',
  description:
    'Coloque as informações da compra para ter acesso ao seu cashback.',
  goBackMessage: 'Voltar para lista de compras',
  goBackRoute: '/compras'
};

function SaleManagement() {
  return (
    <section className="hero is-fullheight">
      <Navbar />
      <MainFormFull description={DESCRIPTION} form={SalesForm} />
      <Footer />
    </section>
  );
}

export default SaleManagement;
