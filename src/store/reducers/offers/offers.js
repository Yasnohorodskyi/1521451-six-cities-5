import {extend} from "../../../helpers/extend";
import {actionFilter, actionCity} from "./const";


const stateOffers = {
  currentCity: null,
  baseFilter: actionFilter.FILTER_POPULAR,
  offers: []
};


export default function Offers(state = stateOffers, action) {

  switch (action.type) {
    case actionCity.LOAD_OFFERS:
      const arrCity = {};
      action.payload.map((offer) => {
        arrCity[offer.city.name] = offer.city;
      });
      const keys = Object.keys(arrCity);
      return extend(state, {
        data: action.payload,
        currentCity: (window.location.href.split(`/`)[3]) ? arrCity[window.location.href.split(`/`)[3]] : arrCity[keys[0]],
        listCities: arrCity
      });

    case actionCity.CHANGE_CITY:

      return extend(state, {
        currentCity: action.payload.currentCity
      });

  }

  if (action.payload) {
    return extend(state, {
      baseFilter: action.payload.filter
    });
  }

  return state;
}
