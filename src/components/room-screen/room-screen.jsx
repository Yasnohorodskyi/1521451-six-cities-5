import React from 'react';
import PropTypes from 'prop-types';

import {calcRating} from '../../helpers/calc-rating';
import {premiumTemplate} from '../../helpers/premium-template';
import {connect} from "react-redux";

import ReviewContainer from "../review/review-container";
import MapContainer from '../map/map-container.jsx';

import {MAX_OTHER_REVIEWS} from '../../const/OfferList';
import OfferContainer from '../../components/offer/offer-container.jsx';
import {offerItem} from '../../shapes/offer-item';


const RoomScreen = ({currentRoom, offers}) => {
  const currentOffer = offers.filter((offer) => Number(offer.id) === Number(currentRoom))[0];

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer.gallery.map((picture) => (
                <div key={picture.id} className="property__image-wrapper">
                  <img className="property__image" src={picture.src} alt={picture.alt} />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                (currentOffer.premium) ? premiumTemplate(`property__mark`) : ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span className="rating__stars__value" style={calcRating(currentOffer.rating)}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.propertyFeatures[0].value}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.propertyFeatures[1].value}
                </li>
                <li className="property__feature property__feature--adults">
                  {currentOffer.propertyFeatures[2].value}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">{currentOffer.prices}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {Object.keys(currentOffer.insides).map((id) => (
                    <li key={id} className="property__inside-item">
                      {currentOffer.insides[id]}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={currentOffer.host.ava} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  {currentOffer.host.description.map((text, i) => (
                    <p key={i} className="property__text">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewContainer currentOffer={currentOffer.id} />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <MapContainer
              currentCity={currentOffer.city}
              max={MAX_OTHER_REVIEWS}
              currentOffer={currentOffer.id}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferContainer
              max={MAX_OTHER_REVIEWS}
              currentCity={currentOffer.city}
              currentOffer={currentOffer.id}
            />
          </section>
        </div>
      </main>

    </div>
  );
};


RoomScreen.propTypes = {
  currentCity: PropTypes.string,
  currentRoom: PropTypes.string,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  )
};
const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offers: state.offers
});


export {RoomScreen};
export default connect(mapStateToProps)(RoomScreen);
