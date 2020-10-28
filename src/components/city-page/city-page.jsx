import React, {PureComponent} from 'react';
import TopMenu from '../top-menu/top-menu';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {filterCityClass, filterArrCities} from "../../helpers/filter-city";
import PropTypes from 'prop-types';
import cities from '../../mocks/cities';
import ListCities from '../list-cities/list-cities';

class CityPage extends PureComponent {
  constructor(props) {
    super(props);

    const {
      offers,
      currentCity
    } = this.props;


    this.state = {
      rentCount: filterArrCities(offers, currentCity).length
    };

    this.changeCity = this.changeCity.bind(this);
    this.filterCityClass = filterCityClass.bind(this);
  }
  changeCity(title) {
    const {
      changeCityStore
    } = this.props;
    console.log(this.props);
    changeCityStore(title, (newTitle) => {
      this.setState({
        currentCity: newTitle,
        rentCount: filterArrCities(this.props.offers, newTitle).length
      });
    });

  }
  render() {
    const {
      offers,
      currentCity
    } = this.props;
    console.log(this.props);
    return (
        <React.Fragment>
          <TopMenu cities={cities} currentCity={currentCity}/>
          <ListCities offers={offers} currentCity={currentCity}/>
        </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCity: state.city,
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  getOffers() {
    dispatch(ActionCreator.getOffers());
  },
  changeCityStore(titleCity, cb) {
    dispatch(ActionCreator.changeCity(titleCity, cb));
  },
});

CityPage.propTypes = {
  changeCity: PropTypes.func
};

export {CityPage};
export default connect(mapStateToProps, mapDispatchToProps)(CityPage);
