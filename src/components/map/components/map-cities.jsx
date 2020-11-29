import React, {useState, useEffect} from 'react';
import {Map, TileLayer} from "react-leaflet";
import L from 'leaflet';
import PropTypes from 'prop-types';

import {offerItem} from '../../../shapes/offer-item';
import {currentCityShape} from '../../../shapes/current-city';
import {ZOOM} from '../const';

const MapCities = ({currentCity, offers}) => {
  let [map, setMap] = useState(null);

  const ref = React.createRef();

  const settingsMap = (info) => {

    const icon = L.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = ZOOM;

    let newMap = L.map(`map`, {
      center: [
        info[0].city[`location`].latitude,
        info[0].city[`location`].longitude
      ],
      zoom,
      zoomControl: false,
      marker: true
    });

    newMap.setView([info[0].city[`location`].latitude, info[0].city[`location`].longitude], zoom);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
      .addTo(newMap);


    info.forEach((offer) => {
      const offerCords = [offer.location.latitude, offer.location.longitude];
      L.marker(offerCords, {icon}).addTo(newMap)._icon.id = `marker-${offer.id}`;
    });

    return newMap;
  };

  useEffect(() => {

    if (!map) {
      setMap(
          settingsMap(offers)
      );
    } else {
      map.remove();

      setMap(
          settingsMap(offers)
      );

    }

  }, [currentCity]);

  return (
    <div id='map' ref={ref}>
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
};


/*
class MapCities extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  settingsMap(info) {
    console.log(this.map);
    const icon = L.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = ZOOM;

    this.map = L.map(`map`, {
      center: [
        info[0].city[`location`].latitude,
        info[0].city[`location`].longitude
      ],
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView([info[0].city[`location`].latitude, info[0].city[`location`].longitude], zoom);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
      .addTo(this.map);

    info.forEach((offer) => {
      const offerCords = [offer.location.latitude, offer.location.longitude];
      L.marker(offerCords, {icon}).addTo(this.map)._icon.id = `marker-${offer.id}`;
    });
  }
  componentDidUpdate(prevProps) {

    if (this.props.currentCity !== prevProps.currentCity) {
      this.map.remove();
      this.settingsMap(
          this.props.offers
      );
    }
  }
  componentDidMount() {
    const {offers} = this.props;

    this.settingsMap(
        offers
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
*/

MapCities.propTypes = {
  currentOffer: PropTypes.number,
  currentCity: currentCityShape,
  offers: PropTypes.arrayOf(
      offerItem
  ),
  cities: PropTypes.arrayOf(
      currentCityShape
  ),
  max: PropTypes.number
};

export {MapCities};
