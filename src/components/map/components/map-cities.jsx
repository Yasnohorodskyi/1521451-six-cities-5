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
  filterOffers(offers, currentCity, cities){
    return {
      offers: offers.filter(
        offer => offer.city == currentCity
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
    this.map = L.map(`map`, {
      center: [info['currentCityInfo'].lat, info['currentCityInfo'].lon],
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView([info['currentCityInfo'].lat, info['currentCityInfo'].lon], zoom);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
      .addTo(this.map);


      info['offers'].map((city) => {
        const offerCords = [city.map.lat, city.map.lon];
        L.marker(offerCords, {icon}).addTo(this.map);
      })
  }
  componentDidUpdate(prevProps) {
    console.log(`componentDidUpdate ${this.props.currentCity}`);
/*Вынести в отдельную функцию с параметрами
    if(this.props.currentCity !== prevProps.currentCity){

      console.log(`prevProps ${prevProps.currentCity}`);



      let cites = this.props.offers.filter(
        offer => offer.id !=  window.location.href.split('/')[4] && offer.city == this.props.currentCity
      );


      this.map.remove();
      console.log(cites);
      const icon = L.icon({
        iconUrl: `/img/pin.svg`,
        iconSize: [30, 30]
      });

      const zoom = 12;
      const map = L.map(`map`, {
        center: [info[0].lat, info[0].lon],
        zoom,
        zoomControl: false,
        marker: true
      });
      this.map = map;
      map.setView([info[0].lat, info[0].lon], zoom);

      L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
        .addTo(map);


        cites.map((city) => {
          const offerCords = [city.map.lat, city.map.lon];
          L.marker(offerCords, {icon}).addTo(map);
        })
        /
    }*/
  }
  componentDidMount() {
    const {currentCity, offers, cities} = this.props;
    this.settingsMap(
      this.filterOffers(
        offers,
        currentCity,
        cities
      )
    )
    /*let cites = offers.filter(
      offer => offer.id !=  window.location.href.split('/')[4] && offer.city == currentCity
    );*/



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
