import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";

import HeaderContainer from '../header/header-container';
import {getFavorite} from '../../store/actions/offers/offers';
import {selectFavorites} from "../../store/selectors/offers/filter-favorites";
import {Footer} from "../share/footer/footer-container";
import {FavoritesEmpty} from "./favorites-empty";
import {offerItem} from '../../shapes/offer-item';

class FavoritesScreen extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {getFavoriteDispatch} = this.props;
    getFavoriteDispatch();
  }
  render() {
    const {favorites} = this.props;

    if (favorites === null) {
      return null;
    }


    if (favorites.length !== 0) {
      return (
        <div className="page">
          <HeaderContainer />
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {
                    Object.keys(selectFavorites(favorites)).map(function (cityName) {
                      if (selectFavorites(favorites)[cityName].length !== 0) {
                        return (
                          <li key={`id-${cityName}`}className="favorites__locations-items">
                            <div className="favorites__locations locations locations--current">
                              <div className="locations__item">
                                <a className="locations__item-link" href="#">
                                  <span>{cityName}</span>
                                </a>
                              </div>
                            </div>
                            <div className="favorites__places">
                              {selectFavorites(favorites)[cityName].map(function (favorite) {
                                return (<article key={`favorite-${favorite.id}`} className="favorites__card place-card">
                                  <div className="favorites__image-wrapper place-card__image-wrapper">
                                    <a href={`/offer/${favorite.id}`}>
                                      <img className="place-card__image" src={favorite.preview_image} width="150" height="110" alt={favorite.title} />
                                    </a>
                                  </div>
                                  <div className="favorites__card-info place-card__info">
                                    <div className="place-card__price-wrapper">
                                      <div className="place-card__price">
                                        <b className="place-card__price-value">&euro;{favorite.price}</b>
                                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                                      </div>
                                      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                        <svg className="place-card__bookmark-icon" width="18" height="19">
                                          <use xlinkHref="#icon-bookmark"></use>
                                        </svg>
                                        <span className="visually-hidden">In bookmarks</span>
                                      </button>
                                    </div>
                                    <div className="place-card__rating rating">
                                      <div className="place-card__stars rating__stars">
                                        <span className='rating__w100'></span>
                                        <span className="visually-hidden">Rating</span>
                                      </div>
                                    </div>
                                    <h2 className="place-card__name">
                                      <a href={`/offer/${favorite.id}`}>{favorite.title}</a>
                                    </h2>
                                    <p className="place-card__type">{favorite.type}</p>
                                  </div>
                                </article>
                                );
                              })
                              }
                            </div>
                          </li>
                        );
                      } else {
                        return null;
                      }
                    })}
                </ul>
              </section>
            </div>
          </main>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="page page--favorites-empty">
          <HeaderContainer />
          <FavoritesEmpty />
          <Footer />
        </div>
      );
    }

  }
}

FavoritesScreen.propTypes = {
  getFavorite: PropTypes.func,
  setFavoriteDispatch: PropTypes.func,
  getFavoriteDispatch: PropTypes.func,
  favorites: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  )
};

const mapStateToProps = (state) => {
  return {
    favorites: state.Offers.favorites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getFavoriteDispatch() {
    dispatch(getFavorite());
  },
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
