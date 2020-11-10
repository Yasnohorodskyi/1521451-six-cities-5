import React, {PureComponent} from 'react';
import MenuContainer from '../menu/menu-container.jsx';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {offerItem} from '../../shapes/offer-item';
import {ActionCreator} from "../../store/action";
import OffersEmpty from "./components/offers-empty";
import OffersNoempty from "./components/offers-noempty";

import {selectCityOffers} from "../../store/selects/offers/select-city-offers";

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {cityId, filterOffer, baseFilter, offers, cities, currentCity} = this.props;
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
            <MenuContainer cities={cities} currentCity={currentCity} />
            {
              (offers === undefined || offers.length === 0) ? <OffersEmpty /> : <OffersNoempty
                currentCity={cityId ? cities[cityId] : currentCity}
                offers={offers}
                baseFilter={baseFilter}
                filterOffer={filterOffer}
              />
            }
          </main>
        </div>
      </div>
    );
  }
}

MainScreen.propTypes = {
  cityId: PropTypes.string,
  currentCity:  PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
    name: PropTypes.string
  }),
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  baseFilter: PropTypes.string,
  filterOffer: PropTypes.func,
  cities: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
  }),
  name: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  filterOffer(filter, offers, currentCity) {
    dispatch(ActionCreator.filterOffer(filter, offers, currentCity));
  }
});


const mapStateToProps = (state) => {
  return {
    offers: selectCityOffers(state),
    cities: state.Offers.listCities,
    currentCity: state.Offers.currentCity,
    baseFilter: state.Offers.baseFilter,
  };
};


export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
