import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ReviewsList from '../reviews-list/reviews-list';

import {calcRating} from '../../helpers/calc-rating';
import {premiumTemplate} from '../../helpers/premium-template';

import OfferList from '../offer-list/offer-list';
import {offerItem} from '../../shapes/offer-item';
import {reviewsItem} from '../../shapes/reviews-item';

import {MAX_OTHER_REVIEWS} from '../../const/OfferList';

import MapCity from '../map/map';


class Room extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      room: ``,
      reviews: [],
      refrash: ``
    };

    for (let room in this.props.offers) {
      if (Number(this.props.offers[room].id) === Number(this.props.match.params.id)) {
        this.state.room = this.props.offers[room];
      }
    }
    for (let review in this.props.reviews) {
      if (Number(this.props.reviews[review].offers) === Number(this.props.match.params.id)) {
        this.state.reviews.push(
            this.props.reviews[review]
        );
      }
    }
  }
  addComment() {

  }
  render() {
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
                {this.state.room.gallery.map((picture) => (
                  <div key={picture.id} className="property__image-wrapper">
                    <img className="property__image" src={picture.src} alt={picture.alt} />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  (this.state.room.premium) ? premiumTemplate(`property__mark`) : ``
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {this.state.room.title}
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
                    <span className="rating__stars__value" style={calcRating(this.state.room.rating)}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{this.state.room.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {this.state.room.propertyFeatures[0].value}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {this.state.room.propertyFeatures[1].value}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {this.state.room.propertyFeatures[2].value}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">{this.state.room.prices[0]}</b>
                  <span className="property__price-text">&nbsp;{this.state.room.prices[1]}</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {Object.keys(this.state.room.insides).map((id) => (
                      <li key={id} className="property__inside-item">
                        {this.state.room.insides[id]}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={this.state.room.host.ava} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {this.state.room.host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    {this.state.room.host.description.map((text, i) => (
                      <p key={i} className="property__text">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList
                    countComments={this.state.reviews.length}
                    addComment={this.addComment}
                    reviews={this.state.reviews}
                  />
                </section>
              </div>
            </div>
            <section className="property__map map">
              <MapCity offers={this.props.offers} />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OfferList max={MAX_OTHER_REVIEWS} currentOffer={this.state.room.id} offers={this.props.offers} />
            </section>
          </div>
        </main>

      </div>
    );
  }
}

Room.propTypes = {
  rentCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      offerItem
  ),
  match: PropTypes.object,
  reviews: PropTypes.arrayOf(
      reviewsItem
  )
};

export default Room;
