import {extend} from "../../../helpers/extend";
import {actionFilter, OffersType} from "../../const";

const stateOffers = {
  currentCity: null,
  baseFilter: actionFilter.FILTER_POPULAR,
  offers: [],
  offer: null,
  nearby: [],
  favorites: null,
  listCities: []
};


export default function offersReducer(state = stateOffers, action) {

  switch (action.type) {
    case OffersType.GET_OFFER:

      return extend(state, {
        offer: action.payload.offer,
        nearby: action.payload.nearby
      });

    case OffersType.GET_OFFERS:

      return extend(state, {
        data: action.payload,
      });

    case OffersType.GET_FAVORITE:
      return extend(state, {
        favorites: action.payload.favorites,
      });

    case OffersType.SET_FAVORITE:
      const statusFavorities = action.payload.status;
      return extend(
          state,
          {
            offer: extend(state.offer, {
              isFavorite: statusFavorities
            })
          }
      );

    case OffersType.FILTER_OFFER:
      return extend(state, {
        baseFilter: (action.payload) ? action.payload.filter : actionFilter.FILTER_POPULAR
      });

    case OffersType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload.currentCity
      });

  }

  return state;
}

export {offersReducer};
