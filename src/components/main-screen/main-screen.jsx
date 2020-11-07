import React from 'react';
import MenuContainer from '../menu/menu-container.jsx';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {offerItem} from '../../shapes/offer-item';
import {ActionCreator} from "../../store/action";
import OffersEmpty from "./components/offers-empty";
import OffersNoempty from "./components/offers-noempty";

const MainScreen = ({cityId, currentCity, offers, filterOffer, sortOffers, baseFilter}) => {

  if(offers){

    const filter = (cityId) ? cityId : currentCity;
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
            <MenuContainer cityId={cityId} />
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
  }else return(<h1>LOADING</h1>)

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
    dispatch(ActionCreator.filterOffer(filter, offers, dispatch));
  }
})




const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentCity: 'Amsterdam',
    offers: state.getOffers.offers,
    baseFilter: state.getOffers.baseFilter,
    sortOffers: state.getOffers.sortOffers
  }
}






export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
