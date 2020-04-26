import PropTypes from 'prop-types';

export const defaultProps = {
  removeSale: () => {},
  updateUserData: () => {},
  selectedSale: {},
  sales: [],
  users: []
};

export const saleItemHandlerPropType = {
  removeSale: PropTypes.func,
  updateUserData: PropTypes.func,
  selectedSale: PropTypes.any,
  sales: PropTypes.arrayOf(PropTypes.any),
  users: PropTypes.arrayOf(PropTypes.any)
};
