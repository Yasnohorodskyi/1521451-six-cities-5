import React from 'react';

import Menu from './components/menu';
import wihActiveItem from '../../hocs/wih-active-item';
const MenuWihActiveItem = wihActiveItem(Menu);

import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from 'prop-types';
import {citiesShape} from '../../shapes/citiesShape';


const MenuContainer = (props) => {
  const {currentCity, cities, changeCity, cityId} = props;

  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <MenuWihActiveItem
            changeCity={changeCity}
            currentCity={(cityId) ? cityId : currentCity}
            cities={cities}
          />
        </section>
      </div>
    </React.Fragment>
  );
};

MenuContainer.propTypes = {
  currentCity: PropTypes.string,
  changeCity: PropTypes.func,
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        citiesShape
      })
  ),
  cityId: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(titleCity) {
    dispatch(ActionCreator.changeCity(titleCity));
  },
});

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  cities: state.cities
});

export {MenuContainer};
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
