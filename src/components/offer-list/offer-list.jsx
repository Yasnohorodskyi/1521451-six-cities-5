import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferItem from '../offer-item/offer-item';
import {offerItem} from '../../shapes/offer-item';
import {connect} from "react-redux";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {max, offers, room} = this.props;
    const offersFiltred = offers.filter(offer => offer.id != room);
    console.log(offers);
  
    return (
      <div className="near-places__list places__list">
      {
        offers.map((offer, index) => {
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

OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  max: PropTypes.number,
  currentOffer: PropTypes.number
};


const mapStateToProps = (state) => ({
  room: state.room
});

export {OfferList};
export default connect(mapStateToProps)(OfferList);

