import PropTypes from 'prop-types';

export const defaultProps = {
  createUser: () => {},
  users: []
};

export const registerFormPropType = {
  createUser: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.shape({}))
};
