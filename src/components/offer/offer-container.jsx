import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import OfferList from "./components/offer-list";
import {offerItem} from '../../shapes/offer-item';

const OfferContainer = (props) => {
  const {currentCity, offers, param, max, currentCityRoom, currentOffer} = props;
  return (
    <div className="near-places__list places__list">
      <OfferList
        param={param}
        currentCity={currentCityRoom ? currentCityRoom : currentCity}
        offers={offers}
        max={max}
        currentOffer={currentOffer}
      />
    </div>
  );
};

OfferContainer.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  max: PropTypes.number,
  currentCityRoom: PropTypes.string,
  currentCity: PropTypes.string,
  param: PropTypes.string,
  currentOffer: PropTypes.number,
};


const mapStateToProps = (state) => (
  {
    offers: state.offers,
    cities: state.cities,
    reviews: state.reviews
  }
);


export {OfferContainer};
export default connect(mapStateToProps)(OfferContainer);
