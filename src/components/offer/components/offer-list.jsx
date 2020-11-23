import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferItem from './offer-item.jsx';
import {offerItem} from '../../../shapes/offer-item';
import {currentCityShape} from '../../../shapes/current-city';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, currentCity, max, currentOffer, authorizationStatus} = this.props;
    let indexGloal = 0;

    return (
      <div className="near-places__list places__list">
        {
          offers.map((offer) => {
            if (max) {
              if (indexGloal < max) {
                if (currentCity.name === offer.city.name && currentOffer !== offer.id) {
                  indexGloal++;
                  return (<OfferItem authorizationStatus={authorizationStatus} key={offer.id} offer={offer} />);
                }
              }
            } else {
              return (<OfferItem authorizationStatus={authorizationStatus} key={offer.id} offer={offer} />);
            }
            return null;
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
