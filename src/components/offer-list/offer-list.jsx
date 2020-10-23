import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferItem from '../offer-item/offer-item';
import offerItem from '../../shapes/offer-item';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {offers} = this.props;

    return (
      <div className="near-places__list places__list">
        { offers.map((offer) => (
          <OfferItem key={offer.id} offer={offer} />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  )
};

export default OfferList;
