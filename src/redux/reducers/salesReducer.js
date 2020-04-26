import {
  ADD_SALE,
  FETCH_SALES,
  UPDATE_SALE,
  DELETE_SALE
} from '../actions/actionTypes';

const initialState = {
  sales: []
};

export const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SALE:
      return {
        sales: (state.sales || []).concat([action.newSale])
      };

    case FETCH_SALES:
      return {
        sales: state.sales
      };

    case UPDATE_SALE:
      return {
        sales: state.sales.map((sale) =>
          sale.id !== action.updatedSale.id ? sale : action.updatedSale
        )
      };

    case DELETE_SALE:
      return {
        sales: state.sales.filter((sale) => sale.id !== action.saleId)
      };

    default:
      return state;
  }
};
