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
          sale.code !== action.updatedSale.code ? sale : action.updatedSale
        )
      };

    case DELETE_SALE:
      return {
        sales: state.sales.filter((sale) => sale.code !== action.saleCode)
      };

    default:
      return state;
  }
};
