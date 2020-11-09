
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

// Заготовка


      return state;
}
