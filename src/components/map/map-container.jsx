import React from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import {MapCities} from "./components/map-cities";

import {offerItem} from '../../shapes/offer-item';

import {citiesShape} from '../../shapes/citiesShape';

const MapContainer = ({currentCity, offers, cities, currentOffer, max}) => {
  return (
    <MapCities
      currentOffer={currentOffer}
      currentCity={currentCity}
      offers={offers}
      cities={cities}
      max={max}
    />
  );
};


MapContainer.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  currentCity: PropTypes.string,
  currentOffer: PropTypes.number,
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        citiesShape
      })
  ),
  max: PropTypes.number
};


const mapStateToProps = (state) => ({
  offers: state.offers,
  cities: state.cities,
});


export {MapContainer};
export default connect(mapStateToProps)(MapContainer);
