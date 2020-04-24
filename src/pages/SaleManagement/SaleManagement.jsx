import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MainFormFull from '../../components/MainForm/MainFormFull/MainFormFull';
import './SaleManagement.css';

const DESCRIPTION = {
  title: 'Adicionar venda',
  description:
    'Coloque as informações da venda para ter acesso ao seu cashback.',
  goBackMessage: 'Voltar para lista de vendas',
  goBackRoute: '/vendas'
};

function SaleManagement() {
  const form = () => {
    return (
      <div>
        <div className="field">
          <div className="control form-item">
            <input className="input" type="text" placeholder="Código" />
          </div>
        </div>
        <div className="field">
          <div className="control form-item">
            <input className="input" type="text" placeholder="Valor" />
          </div>
        </div>
        <div className="field">
          <div className="control form-item">
            <input className="input" type="text" placeholder="Data" />
          </div>
        </div>
        <div className="field">
          <div className="control form-item">
            <input
              className="input"
              type="text"
              placeholder="Porcentagem de cashback"
            />
          </div>
        </div>
        <div className="field">
          <div className="control form-item">
            <input
              className="input"
              type="text"
              placeholder="Valor do cashback"
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
  };

  return (
    <section className="hero is-fullheight">
      <Navbar />
      <MainFormFull description={DESCRIPTION} form={form} />
      <Footer />
    </section>
  );
}

export default SaleManagement;
