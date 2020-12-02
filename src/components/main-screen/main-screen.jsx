import React from 'react';
import MenuContainer from '../menu/menu-container.jsx';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {offerItem} from '../../shapes/offer-item';

import {filterOffer} from "../../store/actions/offers/offers";

import OffersEmpty from "./components/offers-empty";
import OffersNoempty from "./components/offers-noempty";
import {currentCityShape} from '../../shapes/current-city';

import {selectCityOffers} from "../../store/selectors/offers/select-city-offers";
import {selectCityList, selectFirstCity} from "../../store/selectors/offers/select-city-list";

import HeaderContainer from '../header/header-container';


const MainScreen = (props) => {

  const {cityId, filterOfferDispatch, baseFilter, offers, cities, currentCity} = props;

  if (!cities) {
    return null;
  }

  return (
    <div>
      <div className="page page--gray page--main">
        <HeaderContainer />
        <main className="page__main page__main--index">
          <MenuContainer cities={cities} currentCity={cityId ? cities[cityId] : currentCity} />
          {
            (offers === undefined || offers === null) ? <OffersEmpty /> : <OffersNoempty
              currentCity={currentCity}
              offers={offers}
              baseFilter={baseFilter}
              filterOffer={filterOfferDispatch}
            />
          }
        </main>
      </div>
    </div>
  );
};


MainScreen.propTypes = {
  cityId: PropTypes.string,
  currentCity: currentCityShape,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  baseFilter: PropTypes.string,
  filterOfferDispatch: PropTypes.func,
  cities: currentCityShape,
  name: PropTypes.string,
  authorizationStatus: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  filterOfferDispatch(filter, offers, currentCity) {
    dispatch(filterOffer(filter, offers, currentCity));
  }
});


const mapStateToProps = (state, props) => {

  const data = {
    state,
    props,
    listCities: selectCityList({state}),
    currentCity: selectFirstCity({state})
  };

  return {
    authorizationStatus: state.User.authorizationStatus,
    baseFilter: state.Offers.baseFilter,
    cities: selectCityList(data),
    currentCity: (data.props.cityId) ? selectCityList(data)[data.props.cityId] : selectFirstCity(data),
    offers: selectCityOffers(
        data
    ),
    user: state.User,
  };
};


export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
