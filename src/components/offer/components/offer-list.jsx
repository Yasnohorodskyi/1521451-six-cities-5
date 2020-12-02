import React from 'react';
import PropTypes from 'prop-types';

import OfferItem from './offer-item.jsx';
import {offerItem} from '../../../shapes/offer-item';
import {currentCityShape} from '../../../shapes/current-city';
import {offerAdapter} from '../../../helpers/offers-adapter';

const OfferList = (props) => {

  const {offers, authorizationStatus, setFavoriteDispatch} = props;
  return (
    <div className="near-places__list places__list">
      {
        offers.map((offer) => {
          return (<OfferItem
            authorizationStatus={authorizationStatus}
            key={offer.id}
            offer={offerAdapter(offer)}
            setFavorite={setFavoriteDispatch}
          />);
        })
      }
    </div>
  );
};


OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  max: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  currentCityRoom: PropTypes.string,
  currentCity: currentCityShape,
  cityId: PropTypes.string,
  currentOffer: PropTypes.number,
  authorizationStatus: PropTypes.string,
  setFavoriteDispatch: PropTypes.func
};

export default OfferList;
