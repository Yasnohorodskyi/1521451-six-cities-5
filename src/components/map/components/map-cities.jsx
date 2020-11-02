import React, {PureComponent} from 'react';
import {Map, TileLayer} from "react-leaflet";
import L from 'leaflet';
import PropTypes from 'prop-types';
import {offerItem} from '../../../shapes/offer-item';
import {citiesShape} from '../../../shapes/citiesShape';

class MapCities extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();

  }
  filterOffers(offers, currentCity, cities, currentOffer) {
    return {
      offers: offers.filter(
          (offer) => offer.city === currentCity && offer.id !== currentOffer
      ),
      currentCityInfo: cities.filter(
          (city) => city.title === currentCity
      )[0]
    };
  }
  settingsMap(info) {
    const icon = L.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    this.map = L.map(`map`, {
      center: [info[`currentCityInfo`].lat, info[`currentCityInfo`].lon],
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView([info[`currentCityInfo`].lat, info[`currentCityInfo`].lon], zoom);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
      .addTo(this.map);

    info[`offers`].forEach((city, index) => {
      const offerCords = [city.map.lat, city.map.lon];
      if (this.props.max) {
        if (index < 3) {
          L.marker(offerCords, {icon}).addTo(this.map);
        }
      } else {
        L.marker(offerCords, {icon}).addTo(this.map)._icon.id = `marker-${city.id}`;
      }
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentCity !== prevProps.currentCity) {
      this.map.remove();
      this.settingsMap(
          this.filterOffers(
              this.props.offers,
              this.props.currentCity,
              this.props.cities
          )
      );
    }
  }
  componentDidMount() {
    const {currentCity, offers, cities, currentOffer} = this.props;

    this.settingsMap(
        this.filterOffers(
            offers,
            currentCity,
            cities,
            currentOffer
        )
    );

  }
  render() {
    return (
      <div id='map' ref={this.ref}>
        <Map
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
        </Map>
      </div>

    );
  }
}

MapCities.propTypes = {
  currentOffer: PropTypes.number,
  currentCity: PropTypes.string,
  offers: PropTypes.arrayOf(
      offerItem
  ),
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        citiesShape
      })
  ),
  max: PropTypes.number
};

export {MapCities};
