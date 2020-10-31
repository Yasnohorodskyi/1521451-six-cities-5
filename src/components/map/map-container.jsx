import React from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import {MapCities} from "./components/map-cities"

const MapContainer = ({currentCity, offers, cities, currentOffer, max}) =>{
  return (
            <MapCities
              currentOffer={currentOffer}
              currentCity={currentCity}
              offers={offers}
              cities={cities}
              max={max}
            />
    );
}


MapContainer.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({

      })
  )
};




const mapStateToProps = (state) => ({
  offers: state.offers,
  cities: state.cities,
});


export {MapContainer};
export default connect(mapStateToProps)(MapContainer);
