import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import OfferList from "./components/offer-list";
import {offerItem} from '../../shapes/offer-item';

const OfferContainer = (props) => {
  const {currentCity, offers, cityId, max, currentRoomCity, currentOffer} = props;
  return (
    <div className="near-places__list places__list">
      <OfferList
        cityId={cityId}
        currentCity={currentRoomCity ? currentRoomCity : currentCity}
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
  cityId: PropTypes.string,
  currentOffer: PropTypes.number,
  currentRoomCity: PropTypes.string,
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
