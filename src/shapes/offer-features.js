import PropTypes from 'prop-types';

const offerFeatures = PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
);


export {offerFeatures};
