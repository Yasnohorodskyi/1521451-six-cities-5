import React from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";

import {MapCities} from "./components/map-cities"

const MapScreen = ({currentCity, offers, cities}) =>{
  console.log(currentCity);
  return (


            <MapCities
              currentCity={currentCity}
              offers={offers}
              cities={cities}
            />

    );
}


MapScreen.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({

      })
  )
};




const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offers: state.offers,
  cities: state.cities,
});


export {MapScreen};
export default connect(mapStateToProps)(MapScreen);
