import {extend} from "../../../helpers/extend";
import {actionFilter, actionCity, ActionType} from "../../const";

const stateOffers = {
  currentCity: null,
  baseFilter: actionFilter.FILTER_POPULAR,
  offers: [],
  offer: null,
  nearby: [],
  favorites: null
};


export default function Offers(state = stateOffers, action) {

  switch (action.type) {
    case ActionType.GET_OFFER:
      return extend(state, {
        offer: action.payload.offer,
        nearby: action.payload.nearby
      });

    case ActionType.GET_OFFERS:

      const firstCity = action.payload[0].city;
      const listCity = {};

      action.payload.map((offer) => offer.city)
      .filter((city) => {
        listCity[city.name] = city;
      });

      return extend(state, {
        data: action.payload,
        currentCity: firstCity,
        listCities: listCity,
        baseFilter: actionFilter.FILTER_POPULAR
      });

    case ActionType.GET_FAVORITE:
      return extend(state, {
        favorites: action.payload.favorites,
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
