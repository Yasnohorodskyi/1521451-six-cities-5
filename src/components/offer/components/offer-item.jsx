import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';

import PremiumTemplate from '../../premium-template/premium-template';
import {calcRating} from '../../../helpers/calc-rating';
import {offerItem} from '../../../shapes/offer-item';

const hoverCard = (id) => {
  const markerSelect = L.DomUtil.get(`marker-${id}`);
  markerSelect.src = `/img/pin-active.svg`;
};

const hoverOff = (id) => {
  const markerSelect = L.DomUtil.get(`marker-${id}`);
  markerSelect.src = `/img/pin.svg`;
};

const OfferItem = (props) => {

  const {offer, setFavorite} = props;
  return (
    <article
      key={offer.id}
      onMouseLeave={() => hoverOff(offer.id)}
      onMouseEnter={() => hoverCard(offer.id)}
      className="near-places__card place-card"
    >
      {
        (offer.isPremium) ? <PremiumTemplate className={`place-card__mark`} /> : ``
      }
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button place-card__bookmark-button${offer.isFavorite ? `--active` : ``} button`}
            type="button"
            onClick={() => setFavorite(offer.id, offer.isFavorite)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
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
          <a href={`/offer/${offer.id}`}>
            {offer.title}
          </a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferItem.propTypes = {
  offer: offerItem,
  max: PropTypes.number,
  currentCityRoom: PropTypes.string,
  currentCity: PropTypes.string,
  param: PropTypes.string,
  currentOffer: PropTypes.number,
  authorizationStatus: PropTypes.string,
  setFavorite: PropTypes.func,
};

export default OfferItem;
