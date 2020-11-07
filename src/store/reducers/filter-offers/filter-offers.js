
import {extend} from "../../../helpers/extend";


export const actionOffers = {
  FILTER_POPULAR: `Popular`,
  FILTER_TOP_RATED_FIRST: `Top rated first`,
  FILTER_PRICE_LOW_TO_HIGH: `Price: low to high`,
  FILTER_PRICE_HIGH_TO_LOW: `Price: high to low`
};

const stateOffers = {
  baseFilter: actionOffers.FILTER_POPULAR
};

const converter = function (str) {
  return +/\d+/.exec(str);
};

export default function reducerChangeOffers(state = stateOffers, action){
  console.log(state);
  console.log(action);
  if(action.payload){
    switch (action.payload.filter) {
        case actionOffers.FILTER_POPULAR:
          return extend(state, {
            offers: state.offers,
            baseFilter: action.payload.filter
          });
        case actionOffers.FILTER_TOP_RATED_FIRST:
          action.payload.offers.sort(function (a, b) {
            return b.rating - a.rating;
          });
          return extend(state, {
            offers: state.offers,
            baseFilter: action.payload.filter
          });
        case actionOffers.FILTER_PRICE_LOW_TO_HIGH:
          console.log('FILTER_PRICE_LOW_TO_HIGH');
          /*
          action.payload.offers.sort(function (a, b) {
            return a.price - b.price;
          });
          */
          return extend(state, {
            //offers: action.payload.offers,
            baseFilter: action.payload.filter
          });
        case actionOffers.FILTER_PRICE_HIGH_TO_LOW:
          action.payload.offers.sort(function (a, b) {
            return converter(b.price) - converter(a.price);
          });

          return extend(state, {
            offers: action.payload.offers,
            baseFilter: action.payload.filter
          });
      }
  }


      return state;
  }
