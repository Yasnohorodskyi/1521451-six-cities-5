import {extend} from "../../../helpers/extend";
import {actionFilter, OffersType} from "../../const";
import {offerAdapter} from '../../../helpers/offer-adapter';

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
    case OffersType.GET_OFFER:
      return extend(state, {
        offer: offerAdapter(action.payload.offer),
        nearby: action.payload.nearby
      });

    case OffersType.GET_OFFERS:

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

    case OffersType.GET_FAVORITE:
      return extend(state, {
        favorites: action.payload.favorites,
      });

    case OffersType.SET_FAVORITE:

      return {
        ...state,
        offer: {
          ...state.offer,
          isFavorite: action.payload.status
        }
      };

    case OffersType.CHANGE_CITY:

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
