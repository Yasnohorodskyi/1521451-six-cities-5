import React, {PureComponent} from 'react';
import {Map, TileLayer} from "react-leaflet";
import L from 'leaflet';
import PropTypes from 'prop-types';
import {offerItem} from '../../../shapes/offer-item';
import {citiesShape} from '../../../shapes/citiesShape';
import {ZOOM} from '../const';

class MapCities extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  filterOffers(offers, currentCity, currentOffer) {
    const current = currentCity.name ? currentCity.name : currentCity;
    console.log(offers);
    console.log(current);
    console.log(offers.get(current));
    return offers.get(current);
      /*
      offers.filter(
          (offer) => offer.city[`name`] === current && offer.id !== currentOffer
      )*/
    //);
  }
  settingsMap(info) {
    const icon = L.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = ZOOM;
    this.map = L.map(`map`, {
      center: [info[0].city[`location`].latitude, info[0].city[`location`].longitude],
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView([info[0].city[`location`].latitude, info[0].city[`location`].longitude], zoom);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
      .addTo(this.map);

    info.forEach((city, index) => {
      const offerCords = [city.location.latitude, city.location.longitude];
      if (this.props.max) {
        if (index < 3) {
          L.marker(offerCords, {icon}).addTo(this.map)._icon.id = `marker-${city.id}`;
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
              this.props.currentCity
          )
      );
    }
  }
  componentDidMount() {
    const {currentCity, offers, currentOffer} = this.props;

    this.settingsMap(
        this.filterOffers(
            offers,
            currentCity,
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
