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
import {connect} from "react-redux";


class Room extends PureComponent {
  constructor(props) {
    super(props);
  }
  addComment() {

  }
  render() {

    const currentRoom = this.props.offers.filter(offer => offer.id == this.props.room)[0];
    const currentReviews = this.props.reviews.filter(review => review.offers == this.props.room);
    const otherRooms = this.props.offers.filter(offer => offer.city == currentRoom.city);



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
                {currentRoom.gallery.map((picture) => (
                  <div key={picture.id} className="property__image-wrapper">
                    <img className="property__image" src={picture.src} alt={picture.alt} />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  (currentRoom.premium) ? premiumTemplate(`property__mark`) : ``
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentRoom.title}
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
                    <span className="rating__stars__value" style={calcRating(currentRoom.rating)}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentRoom.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentRoom.propertyFeatures[0].value}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentRoom.propertyFeatures[1].value}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {currentRoom.propertyFeatures[2].value}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">{currentRoom.prices[0]}</b>
                  <span className="property__price-text">&nbsp;{currentRoom.prices[1]}</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {Object.keys(currentRoom.insides).map((id) => (
                      <li key={id} className="property__inside-item">
                        {currentRoom.insides[id]}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={currentRoom.host.ava} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {currentRoom.host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    {currentRoom.host.description.map((text, i) => (
                      <p key={i} className="property__text">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList
                    countComments={currentReviews.length}
                    addComment={this.addComment}
                    reviews={currentReviews}
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
              <OfferList max={MAX_OTHER_REVIEWS}  offers={otherRooms} city={this.props.currentCity}/>
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


const mapStateToProps = (state) => ({
  currentCity: state.city,
  offers: state.offers,
  room: state.room
});

export {Room};
export default connect(mapStateToProps)(Room);
