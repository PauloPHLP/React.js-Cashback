import PropTypes from 'prop-types';

export const defaultProps = {
  users: []
};

export const footerPropType = {
  users: PropTypes.arrayOf(PropTypes.shape({}))
};
