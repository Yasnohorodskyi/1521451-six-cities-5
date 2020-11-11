import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import OfferList from "./components/offer-list";
import {offerItem} from '../../shapes/offer-item';


const OfferContainer = (props) => {
  const {currentCity, offers, max, currentOffer} = props;

  return (
    <div className="near-places__list places__list">
      <OfferList
        currentCity={currentCity}
        offers={offers}
        max={max ? max : ``}
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
  currentCity: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
    name: PropTypes.string
  }),
  cityId: PropTypes.string,
  currentOffer: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  currentRoomCity: PropTypes.string,
};


const mapStateToProps = (state, props) => {
  return {
    currentOffer: props.currentOffer
  };
};


export {OfferContainer};
export default connect(mapStateToProps)(OfferContainer);
