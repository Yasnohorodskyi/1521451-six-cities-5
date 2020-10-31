import React, {PureComponent} from 'react';
import {Map, TileLayer} from "react-leaflet";
//import {offerItem} from '../../shapes/offer-item';
import PropTypes from 'prop-types';
import L from 'leaflet';


const city = [52.38333, 4.9];

class MapCities extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      map: ''
    }

  }
  filterOffers(offers, currentCity, cities, currentOffer){
    return {
      offers: offers.filter(
        offer => offer.city == currentCity && offer.id != currentOffer
      ),
      currentCityInfo: cities.filter(
        city => city.title == currentCity
      )[0]
    }
  }
  settingsMap(info){
    const icon = L.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    this.state.map = L.map(`map`, {
      center: [info['currentCityInfo'].lat, info['currentCityInfo'].lon],
      zoom,
      zoomControl: false,
      marker: true
    });
    this.state.map.setView([info['currentCityInfo'].lat, info['currentCityInfo'].lon], zoom);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
      .addTo(this.state.map);

       info['offers'].forEach((city, index) => {
        const offerCords = [city.map.lat, city.map.lon];
         if(this.props.max){
            if(index<3){
              L.marker(offerCords, {icon}).addTo(this.state.map);
            }
          }else{
            L.marker(offerCords, {icon}).addTo(this.state.map);
          }
       });



  }
  componentDidUpdate(prevProps) {
    if(this.props.currentCity !== prevProps.currentCity){
        this.state.map.remove();
        this.settingsMap(
          this.filterOffers(
            this.props.offers,
            this.props.currentCity,
            this.props.cities
          )
        )

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
    )

  }
  render() {
    return (
      <div id='map'>
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
/*
MapCity.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  )
};*/

export {MapCities};
