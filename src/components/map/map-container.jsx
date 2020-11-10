import React from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import {MapCities} from "./components/map-cities";

import {offerItem} from '../../shapes/offer-item';

import {citiesShape} from '../../shapes/citiesShape';

const MapContainer = ({currentCity, offers, cities, max, currentOffer}) => {
  return (
    <MapCities
      currentCity={currentCity}
      offers={offers}
      cities={cities}
      max={max}
      currentOffer={currentOffer}
    />
  );
};


MapContainer.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  currentCity: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
    name: PropTypes.string
  }),
  currentOffer: PropTypes.number,
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        citiesShape
      })
  ),
  max: PropTypes.number
};

const mapStateToProps = (state, props) => {
  return {
    currentCity: state.Offers.currentCity ? state.Offers.currentCity : props.currentCity,
    currentOffer: props.currentOffer
  };
};

export {MapContainer};
export default connect(mapStateToProps)(MapContainer);
