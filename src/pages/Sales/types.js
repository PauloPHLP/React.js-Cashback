import PropTypes from 'prop-types';

export const defaultProps = {
  getSales: () => {},
  sales: []
};

export const salesPropType = {
  getSales: PropTypes.func,
  sales: PropTypes.arrayOf(PropTypes.shape({}))
};
