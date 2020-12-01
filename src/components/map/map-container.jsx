import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {MapCities} from "./components/map-cities";
import {offerItem} from '../../shapes/offer-item';
import {currentCityShape} from '../../shapes/current-city';

const MapContainer = ({currentCity, offers}) => {
  return (
    <MapCities
      currentCity={currentCity}
      offers={offers}
    />
  );
};


MapContainer.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  currentCity: currentCityShape,
  cities: PropTypes.arrayOf(
      currentCityShape
  ),
  max: PropTypes.number
};

const mapStateToProps = (state, props) => {
  return {
    currentCity: state.Offers.currentCity ? state.Offers.currentCity : props.currentCity,
  };
};

export {MapContainer};
export default connect(mapStateToProps)(MapContainer);
