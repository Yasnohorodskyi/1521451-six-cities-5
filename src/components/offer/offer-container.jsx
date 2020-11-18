import React from 'react';
import PropTypes from 'prop-types';

import OfferList from "./components/offer-list";
import {offerItem} from '../../shapes/offer-item';
import {currentCityShape} from '../../shapes/current-city';

const OfferContainer = (props) => {
  const {offers, currentCity} = props;

  return (
    <div className="near-places__list places__list">
      <OfferList
        offers={offers}
        currentCity={currentCity}
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


export default OfferContainer;
