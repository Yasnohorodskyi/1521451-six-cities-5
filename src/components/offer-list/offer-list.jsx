import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferItem from '../offer-item/offer-item';
import {offerItem} from '../../shapes/offer-item';

const data = {
  index: 0
};

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentRoom: window.location.href.split(`/`)[4]
    };
  }
  renderOffer(offer) {
    const {max} = this.props;
    if (!max) {
      return (<OfferItem key={offer.id} offer={offer} />);
    } else if (max && data.index < max) {
      if (Number(offer.id) !== Number(this.state.currentRoom)) {
        data.index++;
        return (<OfferItem key={offer.id} offer={offer} />);
      }
    }

    return null;

  }
  render() {
    const {offers} = this.props;

    return (
      <div className="near-places__list places__list">
        { offers.map((offer) =>
          this.renderOffer(offer)
        )
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
  max: PropTypes.number
};

export default OfferList;

