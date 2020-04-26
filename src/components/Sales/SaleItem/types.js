import PropTypes from 'prop-types';

export const defaultProps = {
  sales: []
};

export const saleItemPropType = {
  sales: PropTypes.arrayOf(PropTypes.any)
};
