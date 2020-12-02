import React, {useState, useEffect} from 'react';
import {Map, TileLayer} from "react-leaflet";
import L from 'leaflet';
import PropTypes from 'prop-types';

import {offerItem} from '../../../shapes/offer-item';
import {currentCityShape} from '../../../shapes/current-city';
import {ZOOM} from '../const';

const MapCities = ({currentCity, offers, currentOffer}) => {
  let [map, setMap] = useState(null);

  const mapRef = React.createRef();

  const mapSettings = (info) => {


    const LeafIcon = L.Icon.extend({
      options: {
        center: [
          info[0].city[`location`].latitude,
          info[0].city[`location`].longitude
        ],
        ZOOM,
        zoomControl: false,
        marker: true
      }
    });

    let icon = new LeafIcon({iconUrl: `/img/pin-active.svg`});

    let newMap = L.map(`map`, {
      center: [
        info[0].city[`location`].latitude,
        info[0].city[`location`].longitude
      ],
      ZOOM,
      zoomControl: false,
      marker: true
    });


    newMap.setView([info[0].city[`location`].latitude, info[0].city[`location`].longitude], ZOOM);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
      .addTo(newMap);

    if (currentOffer) {
      const currentOfferCord = [currentOffer.location.latitude, currentOffer.location.longitude];

      L.marker(currentOfferCord, {icon}).addTo(newMap);
      info.forEach((offer) => {
        let icon = new LeafIcon({iconUrl: `/img/pin.svg`});
        const offerCords = [offer.location.latitude, offer.location.longitude];
        L.marker(offerCords, {icon}).addTo(newMap);
      });
    } else {
      info.forEach((offer) => {
        let icon = new LeafIcon({iconUrl: `/img/pin.svg`});
        const offerCords = [offer.location.latitude, offer.location.longitude];
        L.marker(offerCords, {icon}).addTo(newMap)._icon.id = `marker-${offer.id}`;
      });
    }

    return newMap;
  };

  useEffect(() => {

    if (!map) {
      setMap(
          mapSettings(offers)
      );
    } else {
      map.remove();

      setMap(
          mapSettings(offers)
      );

    }

  }, [currentCity]);

  return (
    <div id='map' ref={mapRef}>
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
