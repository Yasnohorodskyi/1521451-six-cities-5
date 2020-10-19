import React ,{PureComponent} from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";


class MapCity extends PureComponent {
  constructor(props) {
    super();
    this.state = {
        city: {
          lat: 52.3809553943508,
          lng: 4.739309666406198,
          zoom: 10,
        },
        idContainer: 'map',
        layer: {
          osmUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          minZoom: 8,
          maxZoom: 30,
          attribution:''
        }
    };



  }
  componentDidMount(){
    const {
      idContainer,
      city,
      layer
    } = this.state;

    const map = L.map(idContainer);

    var myIcon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const osm = new L.TileLayer(
      layer.osmUrl, {
        minZoom: layer.minZoom,
        maxZoom: layer.maxZoom,
        attribution: layer.attribution
      }
    )



    map.setView(
      new L.LatLng(
        city.lat,
        city.lng
      ),
      city.zoom
    );

    map.addLayer(osm);
    this.props.offers.forEach(element => {
      let marker = L.marker([element.map.lat, element.map.lon],{icon: myIcon})
      marker.bindPopup(element.title).openPopup();
      marker.addTo(map)
    })

  }
  render() {
    const position = [this.state.city.lat, this.state.city.lng];
    return (
      <div id='map'>
      <Map
        center={[50, 10]}
        zoom={40}
        maxZoom={100}
        attributionControl={true}
        zoomControl={true}
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
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
      </div>
    );
  }
}
export default MapCity;
