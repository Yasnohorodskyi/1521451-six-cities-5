import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferItem from './offer-item.jsx';
import {offerItem} from '../../../shapes/offer-item';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, currentCity, max, currentOffer} = this.props;

    let indexGloal = 0;
    return (
      <div className="near-places__list places__list">
        {
          offers.map((offer) => {
            if (max) {
              if (indexGloal < max) {
                if (currentCity.name === offer.city.name && currentOffer !== offer.id) {
                  indexGloal++;
                  return (<OfferItem key={offer.id} offer={offer} />);
                }
              }
            } else {
              return (<OfferItem key={offer.id} offer={offer} />);
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
  currentCity: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
    name: PropTypes.string
  }),
  cityId: PropTypes.string,
  currentOffer: PropTypes.number,
};

export default OfferList;
