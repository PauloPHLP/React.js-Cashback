import PropTypes from 'prop-types';

export const defaultProps = {
  createSale: () => {},
  updateSaleData: () => {},
  updateUserData: () => {},
  sales: [],
  users: []
};

export const salesFormPropType = {
  createSale: PropTypes.func,
  updateSaleData: PropTypes.func,
  updateUserData: PropTypes.func,
  sales: PropTypes.arrayOf(PropTypes.shape({})),
  users: PropTypes.arrayOf(PropTypes.shape({}))
};
