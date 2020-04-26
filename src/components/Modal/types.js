import PropTypes from 'prop-types';

export const defaultProps = {
  confirmAction: () => {},
  modalId: '',
  title: '',
  message: '',
  confirmButton: '',
  cancelButton: ''
};

export const modalPropType = {
  confirmAction: PropTypes.func.isRequired,
  modalId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  confirmButton: PropTypes.string.isRequired,
  cancelButton: PropTypes.string.isRequired
};
