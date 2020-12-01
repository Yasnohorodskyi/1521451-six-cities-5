import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferItem from './offer-item.jsx';
import {offerItem} from '../../../shapes/offer-item';
import {currentCityShape} from '../../../shapes/current-city';
import {offerAdapter} from '../../../helpers/offers-adapter';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, authorizationStatus} = this.props;
    return (
      <div className="near-places__list places__list">
        {
          offers.map((offer) => {
            return (<OfferItem authorizationStatus={authorizationStatus} key={offer.id} offer={offerAdapter(offer)} />);
          })
        }
      </div>
    );
  }
}

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
};

export default OfferList;
