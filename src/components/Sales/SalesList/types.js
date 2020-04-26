import PropTypes from 'prop-types';

export const defaultProps = {
  salesList: []
};

export const salesListPropType = {
  salesList: PropTypes.arrayOf(PropTypes.shape({}))
};
