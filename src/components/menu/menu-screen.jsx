import React from 'react';
import Menu from './components/menu';
import {connect} from "react-redux";

const MenuScreen = (props) => {
  const {currentCity, cities} = props;

  return (
      <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
      <Menu
        currentCity={currentCity}
        cities={cities}
      />
    </section>
    </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentCity : state.currentCity,
  cities: state.cities
});

export  {MenuScreen};
export default connect(mapStateToProps)(MenuScreen);
