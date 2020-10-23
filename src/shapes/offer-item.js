import PropTypes from 'prop-types';
import offerMap from "./offer-map";
import offerFeatures from "./offer-features";
import offerHost from "./offer-host";

const offerItem = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  gallery: PropTypes.string.isRequired,
  premium: PropTypes.bool.isRequired,
  houseLevel: PropTypes.string.isRequired,
  insides: PropTypes.object.isRequired,
  map: PropTypes.shape(
      offerMap
  ),
  host: PropTypes.shape(
      offerHost
  ),
  prices: PropTypes.string.isRequired,
  propertyFeatures: PropTypes.shape(
      offerFeatures
  ),
  rating: PropTypes.string.isRequired
};

export {offerItem};
