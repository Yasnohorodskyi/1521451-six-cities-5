import React from 'react';
import MenuContainer from '../menu/menu-container.jsx';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {offerItem} from '../../shapes/offer-item';
import {ActionCreator} from "../../store/action";
import OffersEmpty from "./components/offers-empty";
import OffersNoempty from "./components/offers-noempty";

const MainScreen = ({cityId, baseCity, sortOffers, filterOffer, baseFilter}) => {

    const filter = (cityId) ? cityId : baseCity;
    const currentOffers = sortOffers.get(filter);

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
            <MenuContainer cityId={filter} />
              {
                ( currentOffers === undefined || currentOffers.length === 0) ? <OffersEmpty /> : <OffersNoempty
                  filterOffer={filterOffer}
                  currentCity={filter}
                  offers={currentOffers}
                  baseFilter={baseFilter}
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
  filterOffer(filter, offers, currentCity) {
    console.log(currentCity);
    dispatch(ActionCreator.filterOffer(filter, offers, currentCity));
  }
})




const mapStateToProps = (state) => {
  return {
    fullOffers: state.getOffers.fullOffers,
    sortOffers: state.getOffers.sortOffers,
    baseCity: state.getOffers.baseCity,
    baseFilter: state.getOffers.baseFilter,
  }
}






export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
