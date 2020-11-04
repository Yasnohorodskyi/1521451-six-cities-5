import {ActionType} from "./action";
import {extend} from "../helpers/extend";

import cities from "../mocks/cities";
import reviews from "../mocks/reviews";

export const reducerType = {
  FILTER_POPULAR: `Popular`,
  FILTER_TOP_RATED_FIRST: `Top rated first`,
  FILTER_PRICE_LOW_TO_HIGH: `Price: low to high`,
  FILTER_PRICE_HIGH_TO_LOW: `Price: high to low`
};

const initialState = {
  currentCity: cities[0].title,
  baseFilter: reducerType.FILTER_POPULAR,
  offers: [],
  cities,
  reviews,
};

const converter = function (str) {
  return +/\d+/.exec(str);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `loadOffers`:
      return extend(state, {
        offers: action.payload,
        baseFilter: reducerType.FILTER_POPULAR
      });
    case ActionType.CHANGE_CITY:
      return extend(state, {
        offers: state.offers,
        currentCity: action.payload.title,
        baseFilter: reducerType.FILTER_POPULAR
      });
    case ActionType.FILTER_OFFER:
      switch (action.payload.filter) {
        case reducerType.FILTER_POPULAR:
          return extend(state, {
            offers: state.offers,
            baseFilter: action.payload.filter
          });
        case reducerType.FILTER_TOP_RATED_FIRST:
          action.payload.offers.sort(function (a, b) {
            return b.rating - a.rating;
          });
          return extend(state, {
            offers: state.offers,
            baseFilter: action.payload.filter
          });
        case reducerType.FILTER_PRICE_LOW_TO_HIGH:
          action.payload.offers.sort(function (a, b) {
            return converter(a.price) - converter(b.price);
          });
          return extend(state, {
            offers: action.payload.offers,
            baseFilter: action.payload.filter
          });
        case reducerType.FILTER_PRICE_HIGH_TO_LOW:
          action.payload.offers.sort(function (a, b) {
            return converter(b.price) - converter(a.price);
          });
          return extend(state, {
            offers: action.payload.offers,
            baseFilter: action.payload.filter
          });
      }
      break;
  }

  return state;
};


export {reducer};
