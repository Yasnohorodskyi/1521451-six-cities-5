import PropTypes from 'prop-types';

const offerMap = PropTypes.shape({
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired
});

export {offerMap};
