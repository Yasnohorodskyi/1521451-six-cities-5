import PropTypes from 'prop-types';
import {offerMap} from "./offer-map";
import {offerFeatures} from "./offer-features";
import {offerHost} from "./offer-host";
import {offerGallery} from "./offer-gallery";


const offerItem = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  gallery: PropTypes.arrayOf(
      offerGallery
  ),
  premium: PropTypes.bool,
  houseLevel: PropTypes.string,
  insides: PropTypes.shape(
      PropTypes.string.isRequired
  ),
  map: offerMap,
  host: offerHost,
  prices: PropTypes.string,
  propertyFeatures: offerFeatures,
  rating: PropTypes.number.isRequired
});

export {offerItem};
