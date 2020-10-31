import React from 'react';
import Menu from './components/menu';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const MenuContainer = (props) => {
  const {currentCity, cities, changeCity, param} = props;

  return (
      <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
      <Menu
        changeCity={changeCity}
        currentCity={(param) ? param : currentCity}
        cities={cities}
      />
    </section>
    </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(titleCity) {
    dispatch(ActionCreator.changeCity(titleCity));
  },
});

const mapStateToProps = (state) => ({
  currentCity : state.currentCity,
  cities: state.cities
});

export  {MenuContainer};
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
