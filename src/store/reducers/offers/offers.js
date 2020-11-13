import {extend} from "../../../helpers/extend";
import {actionFilter, actionCity} from "../../const";
import browserHistory from "../../../browser-history";

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
        currentCity: (browserHistory.location.pathname.slice(1) !== ``) ? arrCity[browserHistory.location.pathname.slice(1)] : arrCity[keys[0]],
        listCities: arrCity,
        baseFilter: actionFilter.FILTER_POPULAR
      });

    case actionCity.CHANGE_CITY:

      return extend(state, {
        currentCity: action.payload.currentCity
      });

  }

  if (action.payload) {
    return extend(state, {
      baseFilter: (action.payload === `/`) ? actionFilter.FILTER_POPULAR : action.payload.filter
    });
  }


  return state;
}
