import React ,{PureComponent} from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const city = [52.38333, 4.9];

class MapCity extends PureComponent {
  constructor(props) {
    super();
  }
  componentDidMount(){

    const icon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = L.map(`map`, {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  })
  .addTo(map);

  const offerCords = [52.3709553943508, 4.89309666406198];
  L.marker(offerCords, {icon}).addTo(map);

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
        {
          this.props.offers.map((offer) => (
              offer.lat
          ))
        }
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </Map>
      </div>
    );
  }
}
export default MapCity;
