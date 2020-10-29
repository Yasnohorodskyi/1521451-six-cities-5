import React, {PureComponent} from 'react';
import TopMenu from '../top-menu/top-menu';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import cities from '../../mocks/cities';
import ListCities from '../list-cities/list-cities';

class CityPage extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      offers,
      currentCity
    } = this.props;

    return (
        <React.Fragment>
          <TopMenu cities={cities} currentCity={currentCity}/>
          <ListCities offers={offers} history={history} currentCity={currentCity}/>
        </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCity: state.city,
  offers: state.offers
});

CityPage.propTypes = {
  changeCity: PropTypes.func
};

export {CityPage};
export default connect(mapStateToProps)(CityPage);
