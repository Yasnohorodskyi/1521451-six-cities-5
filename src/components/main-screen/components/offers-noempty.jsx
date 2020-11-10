import React from 'react';
import SelectedClassOption from './selected-class-option.jsx';
import MapContainer from '../../map/map-container.jsx';
import OfferContainer from '../../../components/offer/offer-container.jsx';
import PropTypes from 'prop-types';
import {offerItem} from '../../../shapes/offer-item';
import withOpenSelect from '../../../hocs/with-open-select';

const SelectedClassOptionWithClickOutside = withOpenSelect(SelectedClassOption);


const OffersNoempty = ({currentCity, offers, filterOffer, baseFilter}) => {
  return (<div className="cities">
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found"> {offers.length} places to stay in  {currentCity.name}</b>
        <SelectedClassOptionWithClickOutside
          offers={offers}
          filterOffer={filterOffer}
          baseFilter={baseFilter}
          currentCity={currentCity}
        />
        <div className="cities__places-list places__list tabs__content">
          <OfferContainer offers={offers} currentCity={currentCity} />
        </div>
      </section>
      <div className="cities__right-section">
        <MapContainer offers={offers} />
      </div>
    </div>
  </div>);
};


OffersNoempty.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  cityId: PropTypes.string,
  currentCity: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
    name: PropTypes.string
  }),
  baseFilter: PropTypes.string,
  filterOffer: PropTypes.func,
  countOffers: PropTypes.number,
  currentOffers: PropTypes.arrayOf(offerItem)
};

export default OffersNoempty;
