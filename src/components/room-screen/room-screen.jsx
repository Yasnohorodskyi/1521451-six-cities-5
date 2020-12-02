import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {calcRating} from '../../helpers/calc-rating';
import {premiumTemplate} from '../../helpers/premium-template';
import {connect} from "react-redux";

import ReviewContainer from "../review/review-container";
import MapContainer from '../map/map-container.jsx';
import {MAX_OTHER_REVIEWS} from '../offer/const';
import OfferContainer from '../../components/offer/offer-container.jsx';
import {offerItem} from '../../shapes/offer-item';
import {currentCityShape} from '../../shapes/current-city';
import {getOffer, setFavorite} from '../../store/actions/offers/offers';
import HeaderContainer from '../header/header-container';


class RoomScreen extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {currentRoom, getOfferDispatch} = this.props;
    getOfferDispatch(currentRoom);
  }
  render() {
    const {offer, nearby, setFavoriteDispatch} = this.props;

    if (offer === null) {
      return null;
    }

    return (

      <div className="page">

        <HeaderContainer />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.images.map((picture, index) => (
                  <div key={index} className="property__image-wrapper">
                    <img className="property__image" src={picture} />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  (offer.premium) ? premiumTemplate(`property__mark`) : ``
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button
                    onClick={() => setFavoriteDispatch(offer.id, offer.isFavorite)}
                    className={`property__bookmark-button ${offer.isFavorite} ${offer.isFavorite ? `active` : ``} button`}
                    type="button"
                  >
                    <svg className={`property__bookmark-icon`} width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span className="rating__stars__value" style={calcRating(offer.rating)}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {offer.maxAdults}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">€{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.goods.map((good, index) => (
                      <li key={index} className="property__inside-item">
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <img
                      className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper"
                      src={`/${offer.host.avatar_url}`} alt={offer.host.name}
                    />
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>{offer.isFavorite}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewContainer currentOffer={offer.id} />
                </section>
              </div>
            </div>
            <section className="property__map map">
              <MapContainer
                currentCity={offer.city}
                currentOffer={offer}
                offers={nearby}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OfferContainer
                max={MAX_OTHER_REVIEWS}
                currentCity={offer.city}
                currentOffer={offer.id}
                offers={nearby}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}


RoomScreen.propTypes = {
  currentCity: currentCityShape,
  currentRoom: PropTypes.string,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  offer: offerItem,
  authorizationStatus: PropTypes.string,
  nearby: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  getOfferDispatch: PropTypes.func,
  setFavoriteDispatch: PropTypes.func,
};


const mapDispatchToProps = (dispatch) => ({
  getOfferDispatch(id) {
    dispatch(getOffer(id));
  },
  setFavoriteDispatch(id, currentStatus) {
    dispatch(setFavorite(id, currentStatus));
  }
});


const mapStateToProps = (state) => {
  return {
    listCities: state.Offers.listCities,
    offer: state.Offers.offer,
    nearby: state.Offers.nearby,
    offers: state.Offers.data,
    authorizationStatus: state.User.authorizationStatus
  };
};

export {RoomScreen};
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
