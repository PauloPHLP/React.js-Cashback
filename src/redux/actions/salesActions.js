import { ADD_SALE, FETCH_SALES, UPDATE_SALE, DELETE_SALE } from './actionTypes';

const fetchSales = () => ({
  type: FETCH_SALES
});

const deleteSale = (saleCode) => ({
  type: DELETE_SALE,
  saleCode
});

export const getSales = () => {
  return (dispatch) => {
    dispatch(fetchSales());
  };
};

export const removeSale = (saleCode) => {
  return (dispatch) => {
    dispatch(deleteSale(saleCode));
  };
};
