import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import OfferList from "./components/offer-list";

const OfferContainer = (props) => {
    const {currentCity, offers, param, max, currentCityRoom, currentOffer} = props;
    //const current = (param) ? param : (currentCity) ? currentCity : currentCityRedux;
    return (
      <div className="near-places__list places__list">
          <OfferList
            param={param}
            currentCity={ currentCityRoom ? currentCityRoom : currentCity}
            offers={offers}
            max={max}
            currentOffer={currentOffer}
          />
      </div>
    );
}

/*
OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  max: PropTypes.number,
  currentOffer: PropTypes.number
};
*/

const mapStateToProps = (state) => (
  {
    currentCityRedux: state.currentCity,
    offers: state.offers,
    cities: state.cities,
    reviews: state.reviews
  }
);


export {OfferContainer};
export default connect(mapStateToProps)(OfferContainer);
