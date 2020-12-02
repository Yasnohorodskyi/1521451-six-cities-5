import {extend} from "../../../helpers/extend";
import {ActionFilter, OffersType} from "../../const";

const stateOffers = {
  currentCity: null,
  baseFilter: ActionFilter.FILTER_POPULAR,
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
      const newOffer = action.payload.offer;
      const newOffers = [];
      state.data.map((offer) => {
        if (offer.id === newOffer.id) {
          newOffers.push(newOffer);
        } else {
          newOffers.push(offer);
        }
      });
      return extend(
          state,
          {
            offer: extend(state.offer, {
              isFavorite: statusFavorities
            }),
            data: newOffers
          }
      );

    case OffersType.FILTER_OFFER:
      return extend(state, {
        baseFilter: (action.payload) ? action.payload.filter : ActionFilter.FILTER_POPULAR
      });

    case OffersType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload.currentCity
      });

  }

  return state;
}

export {offersReducer};
