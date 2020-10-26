import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferItem from '../offer-item/offer-item';
import {offerItem} from '../../shapes/offer-item';
import {filterOffers} from '../../helpers/filter-offers';


class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {max, currentOffer, offers} = this.props;

    return (
      <div className="near-places__list places__list">
        {
          offers.map((offer) => {
            switch (filterOffers(currentOffer, max, offer.id)) {
              case `main`:
                return (<OfferItem key={offer.id} offer={offer} />);
              case `other`:
                return (<OfferItem key={offer.id} offer={offer} />);
            }
            return ``;
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
  currentOffer: PropTypes.number
};

export default OfferList;

