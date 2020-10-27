import React, {PureComponent} from 'react';
import MapCity from '../map/map';
import cities from '../../mocks/cities';
import OfferList from '../../components/offer-list/offer-list';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {filterCityClass, filterArrCities} from "../../helpers/filter-city";
import PropTypes from 'prop-types';
import {offerItem} from '../../shapes/offer-item';

class ListCities extends PureComponent {
  constructor(props) {
    super(props);
    let currentCity = this.props.currentCity;
    this.state = {
      currentCity,
      rentCount: filterArrCities(this.props.offers, currentCity).length
    };


  }
  change(title) {
    const {
      changeCity
    } = this.props;
    changeCity(title, (newTitle) => {
      this.setState({
        currentCity: newTitle,
        rentCount: filterArrCities(this.props.offers, newTitle).length
      });
    });
  }
  render() {
    const {
      offers
    } = this.props;

    return (
      <React.Fragment>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) => (
                <li key={city.id} className="locations__item">
                  <a onClick={
                    () => {
                      this.change(city.title);
                    }
                  }
                  className={
                    filterCityClass(city, this.state.currentCity)
                  }
                  href={city.link}>
                    <span>{city.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found"> {this.state.rentCount} places to stay in {this.state.currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
                <select defaultValue={`Popular`} className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferList
                  offers={
                    filterArrCities(offers, this.state.currentCity)
                  }
                />
              </div>
            </section>
            <div className="cities__right-section">
              <MapCity offers={offers} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ListCities.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ).isRequired,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.town,
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  getOffers() {
    dispatch(ActionCreator.getOffers());
  },
  changeCity(titleCity, cb) {
    dispatch(ActionCreator.changeCity(titleCity, cb));
  },
});

ListCities.propTypes = {
  changeCity: PropTypes.func
};

export {ListCities};
export default connect(mapStateToProps, mapDispatchToProps)(ListCities);
