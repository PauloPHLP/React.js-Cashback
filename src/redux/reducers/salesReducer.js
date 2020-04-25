import {
  ADD_SALE,
  FETCH_SALES,
  UPDATE_SALE,
  DELETE_SALE
} from '../actions/actionTypes';

const initialState = {
  sales: [
    {
      code: '0005',
      value: '6000',
      date: '12/04/2020',
      cashbackPercentage: '30',
      cashbackValue: '1800',
      status: 'Aprovado'
    }
  ]
};

export const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SALES:
      return {
        sales: state.sales
      };

    case DELETE_SALE:
      return {
        sales: state.sales.filter((sale) => sale.code !== action.saleCode)
      };

    default:
      return state;
  }
};
