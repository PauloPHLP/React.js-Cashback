import { ADD_SALE, FETCH_SALES, UPDATE_SALE, DELETE_SALE } from './actionTypes';

const addSale = (newSale) => ({
  type: ADD_SALE,
  newSale
});

const fetchSales = () => ({
  type: FETCH_SALES
});

const updateSale = (newSaleInfo) => ({
  type: UPDATE_SALE,
  updatedSale: newSaleInfo
});

const deleteSale = (saleCode) => ({
  type: DELETE_SALE,
  saleCode
});

export const createSale = (newSale) => {
  return (dispatch) => {
    dispatch(addSale(newSale));
  };
};

export const getSales = () => {
  return (dispatch) => {
    dispatch(fetchSales());
  };
};

export const updateSaleDate = (updatedSale) => {
  return (dispatch) => {
    dispatch(updateSale(updatedSale));
  };
};

export const removeSale = (saleCode) => {
  return (dispatch) => {
    dispatch(deleteSale(saleCode));
  };
};
