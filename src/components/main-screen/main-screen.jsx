import React from 'react';

import MenuContainer from '../menu/menu-container.jsx';

import OfferEmpty from './components/offer-empty';
import OfferNoempty from './components/offers-noempty';

import {connect} from "react-redux";
import PropTypes from 'prop-types';
import offerItem from '../../shapes/offer-item';

import {ActionCreator} from "../../store/action";


const MainScreen = ({cityId, currentCity, offers, filterOffer, baseFilter}) => {
  const filter = (cityId) ? cityId : currentCity;
  const countOffers = offers.filter((offer) => offer.city === filter).length;
  const currentOffers = offers.filter((offer) => offer.city === filter);
  const currentCityFilter = (cityId) ? cityId : currentCity;
  return (
    <div>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-linkheader__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
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
        <main className="page__main page__main--index">
          <MenuContainer cityId={cityId} />
          {
            (countOffers === 0) ? <OfferEmpty /> : <OfferNoempty
              countOffers={countOffers}
              currentCityFilter={currentCityFilter}
              baseFilter={baseFilter}
              filterOffer={filterOffer}
              currentOffers={currentOffers}
              cityId={cityId}
            />
          }
        </main>
      </div>
    </div>
  );
};

MainScreen.propTypes = {
  cityId: PropTypes.string,
  currentCity: PropTypes.string,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  baseFilter: PropTypes.string,
  filterOffer: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  filterOffer(filter, offers) {
    dispatch(ActionCreator.filterOffer(filter, offers));
  },
});

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offers: state.offers,
  baseFilter: state.baseFilter
});


export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
