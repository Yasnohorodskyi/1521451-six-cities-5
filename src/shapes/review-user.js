import PropTypes from 'prop-types';

const reviewUser = PropTypes.shape({
  id: PropTypes.number,
  ava: PropTypes.string,
  name: PropTypes.string
});

export {reviewUser};
