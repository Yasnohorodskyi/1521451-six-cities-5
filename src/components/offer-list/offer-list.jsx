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
    const {max, currentOffer, offers, currentCity} = this.props;
    const filtredOffers = offers.filter(offer => offer.city == currentCity);
    console.log(currentCity);
    return (
      <div className="near-places__list places__list">
        {
          filtredOffers.map((offer) => {
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

import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const mapStateToProps = (state) => ({
  currentCity: state.city,
  offers: state.offers
});

export {OfferList};
export default connect(mapStateToProps)(OfferList);

