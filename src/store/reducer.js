import {ActionType} from "./action";
import {extend} from "../helpers/extend";

import offers from "../mocks/offers";
import cities from "../mocks/cities";
import reviews from "../mocks/reviews";

const initialState = {
  currentCity: cities[0].title,
  baseFilter: `Popular`,
  offers,
  cities,
  reviews
};

const converter = function(str){
  return +/\d+/.exec(str);
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        offers: offers,
        currentCity: action.payload.title,
        baseFilter: `Popular`
      });
    case ActionType.FILTER_OFFER:
      switch(action.payload.filter){
        case `Popular`:
          return extend(state, {
            offers: offers,
            baseFilter: action.payload.filter
          });
        case `Top rated first`:
          action.payload.offers.sort(function(a, b) {
            return b.rating - a.rating;
           })
           return extend(state, {
            offers: action.payload.offers,
            baseFilter: action.payload.filter
          });
        case `Price: low to high`:
          action.payload.offers.sort(function(a, b) {
            return converter(a.prices) - converter(b.prices);
          })
          return extend(state, {
            offers: action.payload.offers,
            baseFilter: action.payload.filter
          });
        case `Price: high to low`:
          action.payload.offers.sort(function(a, b) {
            return  converter(b.prices) - converter(a.prices);
          })
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
