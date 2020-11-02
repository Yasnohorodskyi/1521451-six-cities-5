import React, {PureComponent} from 'react';
import {premiumTemplate} from '../../../helpers/premium-template';
import {calcRating} from '../../../helpers/calc-rating';
import PropTypes from 'prop-types';
import {offerItem} from '../../../shapes/offer-item';

import {Map} from "react-leaflet";
import L from 'leaflet';

class OfferItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  hoverCard(id){
    const marker_select = L.DomUtil.get(`marker-${id}`);
    marker_select.src = `/img/pin-active.svg`;
  }
  hoverOff(id){
    const marker_select = L.DomUtil.get(`marker-${id}`);
    marker_select.src = `/img/pin.svg`;
  }
  render() {
    const {offer} = this.props;
    console.log(Map);
    return (
      <article
          key={offer.id}
          onMouseLeave={() => this.hoverOff(offer.id)}
          onMouseEnter={() => this.hoverCard(offer.id)}
          className="near-places__card place-card"
        >
        {
          (offer.premium) ? premiumTemplate(`place-card__mark`) : ``
        }
        <div className="near-places__image-wrapper place-card__image-wrapper">
          <a href={`/offer/${offer.id}`}>
            <img className="place-card__image" src={offer.gallery[0].src} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">{offer.prices}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinhref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span className="rating__stars__value" style={calcRating(offer.rating)}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.houseLevel}</p>
        </div>
      </article>
    );
  }
}

OfferItem.propTypes = {
  offer: offerItem,
  max: PropTypes.number,
  currentCityRoom: PropTypes.string,
  currentCity: PropTypes.string,
  param: PropTypes.string,
  currentOffer: PropTypes.number,
};

export default OfferItem;
