import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import OfferList from "./components/offer-list";
import {offerItem} from '../../shapes/offer-item';
import {currentCityShape} from '../../shapes/current-city';

const OfferContainer = (props) => {
  const {currentCity, offers, max, currentOffer} = props;

  return (
    <div className="near-places__list places__list">
      <OfferList
        currentCity={currentCity}
        offers={offers}
        max={max || ``}
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
  currentCity: currentCityShape,
  cityId: PropTypes.string,
  currentOffer: PropTypes.number,
  currentRoomCity: PropTypes.string,
};


const mapStateToProps = (state, props) => {
  return {
    currentOffer: props.currentOffer
  };
};


export {OfferContainer};
export default connect(mapStateToProps)(OfferContainer);
