import PropTypes from 'prop-types';

const offerGallery = PropTypes.shape({
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

export {offerGallery};
