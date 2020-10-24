import PropTypes from 'prop-types';

const offerHost = PropTypes.shape({
  ava: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(
      PropTypes.string
  )
});

export {offerHost};
