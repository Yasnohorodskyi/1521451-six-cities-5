import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferItem from './offer-item.jsx';
import {offerItem} from '../../../shapes/offer-item';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, currentCity, cityId, max, currentOffer} = this.props;

    const currentId = (cityId) ? cityId : currentCity;

    const offersFiltred = offers.filter(
        (offer) => offer.city === currentId && offer.id !== currentOffer
    );


    return (
      <div className="near-places__list places__list">
        {
          offersFiltred.map((offer, index) => {
            if (max) {
              if (index < max) {
                return (<OfferItem key={offer.id} offer={offer} />);
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
  max: PropTypes.number,
  currentCityRoom: PropTypes.string,
  currentCity: PropTypes.string,
  cityId: PropTypes.string,
  currentOffer: PropTypes.number,
};

export default OfferList;
