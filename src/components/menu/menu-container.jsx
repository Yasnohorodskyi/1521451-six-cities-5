import React from 'react';

import Menu from './components/menu';
import withActiveItem from '../../hocs/with-active-item';
const MenuWithActiveItem = withActiveItem(Menu);

import {connect} from "react-redux";
//import {ActionOffer} from "../../store/actions/offers/offers";
import {changeCity} from "../../store/actions/offers/offers";

import PropTypes from 'prop-types';
import {currentCityShape} from '../../shapes/current-city';

const MenuContainer = (props) => {
  const {currentCity, changeCityProp, cities} = props;
  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <MenuWithActiveItem
            changeCity={changeCityProp}
            cities={cities}
            currentCity={currentCity}
          />
        </section>
      </div>
    </React.Fragment>
  );
};

MenuContainer.propTypes = {
  currentCity: currentCityShape,
  changeCity: PropTypes.func,
  cities: currentCityShape,
  cityId: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  changeCityProp(currentCity) {
    dispatch(changeCity(currentCity));
  },
});

const mapStateToProps = (state) => {
  return {
    currentCity: state.Offers.currentCity,
  };
};

export {MenuContainer};
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
