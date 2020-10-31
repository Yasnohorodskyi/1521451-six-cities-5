import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferItem from './offer-item.jsx';


class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, currentCity, param, max, currentOffer} = this.props;

    const currentParam = (param) ? param : currentCity;

    const offersFiltred = offers.filter(
      offer => offer.city == currentParam && offer.id != currentOffer
    )


    return (
      <div className="near-places__list places__list">
      {
        offersFiltred.map((offer, index) => {
          if(max){
            if(index < max){
              return (<OfferItem key={offer.id} offer={offer} />);
            }
          }else{
            return (<OfferItem key={offer.id} offer={offer} />);
          }
        })
      }
    </div>
    );
  }
}

/*
OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  max: PropTypes.number,
  currentOffer: PropTypes.number
};
*/


export default OfferList
