import {extend} from "../../../helpers/extend";
import {actionFilter, OffersType} from "../../const";

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
        offer: extend(action.payload.offer, {
          isFavorite: action.payload.offer.is_favorite
        }),
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

      return extend(
          state,
          {
            offer: extend(state.offer, {
              isFavorite: action.payload.status
            })
          }
      );


    case OffersType.CHANGE_CITY:

      return extend(state, {
        currentCity: action.payload.currentCity
      });

  }

  return extend(state, {
    baseFilter: !action.payload ? actionFilter.FILTER_POPULAR : action.payload.filter
  });
}

export {Offers};
