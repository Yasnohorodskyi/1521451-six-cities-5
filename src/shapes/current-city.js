import PropTypes from 'prop-types';

const currentCityShape = PropTypes.shape({
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
  name: PropTypes.string
});


export {currentCityShape};
