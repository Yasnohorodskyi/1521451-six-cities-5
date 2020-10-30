import React from 'react';
import MapCity from '../map/map';
import OfferList from '../../components/offer-list/offer-list';
import PropTypes from 'prop-types';
import {offerItem} from '../../shapes/offer-item';




const ListCities = ({offers, currentCity}) => {

  const offersCity = offers.filter(offer => offer.city == currentCity);

  const count = offersCity.length
  return(
    <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found"> {count} places to stay in {currentCity} </b>
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
                    offersCity
                  }
                />
              </div>
            </section>
            <div className="cities__right-section">
              <MapCity offers={offersCity} />
            </div>
          </div>
        </div>
  )
}


ListCities.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ).isRequired,
  currentCity: PropTypes.string.isRequired
};


ListCities.propTypes = {
  changeCity: PropTypes.func
};

export default ListCities;
