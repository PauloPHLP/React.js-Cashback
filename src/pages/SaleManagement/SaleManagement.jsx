import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MainFormFull from '../../components/MainForm/MainFormFull/MainFormFull';
import SalesForm from '../../components/Sales/SalesForm/SalesForm';
import './SaleManagement.css';

const DESCRIPTION = {
  title: 'Adicionar venda',
  description:
    'Coloque as informações da venda para ter acesso ao seu cashback.',
  goBackMessage: 'Voltar para lista de vendas',
  goBackRoute: '/vendas'
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
