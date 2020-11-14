import React, {PureComponent} from 'react';
import MenuContainer from '../menu/menu-container.jsx';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {offerItem} from '../../shapes/offer-item';

//import {ActionOffer} from "../../store/actions/offers/offers";
import {filterOffer} from "../../store/actions/offers/offers";

import OffersEmpty from "./components/offers-empty";
import OffersNoempty from "./components/offers-noempty";
import {currentCityShape} from '../../shapes/current-city';

import {selectCityOffers} from "../../store/selectors/offers/select-city-offers";


import HeaderContainer from '../header/header-container';


class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {cityId, filterOffer, baseFilter, offers, cities, currentCity, user} = this.props;


      return (
      <div>
        <div className="page page--gray page--main">
          <HeaderContainer />
          <main className="page__main page__main--index">
            <MenuContainer cities={cities} currentCity={cityId ? cities[cityId] : currentCity} />
            {
              (offers === undefined || offers === null) ? <OffersEmpty /> : <OffersNoempty
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

/**
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
                      { (user.authorizationStatus === AuthorizationStatus.NO_AUTH) ?
                        <div className="header__nav-link header__nav-link--profile">
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__user-name user__name">
                            <Link to='/login'> Sign In </Link>
                          </span>
                        </div>
                        :
                        <div className="header__nav-link header__nav-link--profile">
                          <img className="header__avatar-wrapper" src={user.data.avatar_url}/>
                          <span className="header__user-name user__name">
                            <Link to='/favorites'> {user.data.name} </Link>
                          </span>
                        </div>
                      }
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
 */
MainScreen.propTypes = {
  cityId: PropTypes.string,
  currentCity: currentCityShape,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  baseFilter: PropTypes.string,
  filterOffer: PropTypes.func,
  cities: currentCityShape,
  name: PropTypes.string,
  authorizationStatus: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  filterOffer(filter, offers, currentCity) {
    dispatch(filterOffer(filter, offers, currentCity));
  }
});


const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.User.authorizationStatus,
    cities: state.Offers.listCities,
    currentCity: state.Offers.currentCity,
    baseFilter: state.Offers.baseFilter,
    offers: selectCityOffers(state),
    user: state.User,
  };
};


export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
