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
