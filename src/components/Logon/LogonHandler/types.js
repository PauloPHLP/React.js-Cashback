import PropTypes from 'prop-types';

export const defaultProps = {
  updateUserData: () => {},
  loginInfo: {},
  users: []
};

export const logonHandlerPropType = {
  updateUserData: PropTypes.func,
  loginInfo: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }),
  users: PropTypes.arrayOf(PropTypes.shape({}))
};
