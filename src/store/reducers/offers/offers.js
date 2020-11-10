import {extend} from "../../../helpers/extend";


export const actionFilter = {
  FILTER_POPULAR: `Popular`,
  FILTER_TOP_RATED_FIRST: `Top rated first`,
  FILTER_PRICE_LOW_TO_HIGH: `Price: low to high`,
  FILTER_PRICE_HIGH_TO_LOW: `Price: high to low`,
};

const actionCity = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`
};


const stateOffers = {
  currentCity: ``,
  baseFilter: actionFilter.FILTER_POPULAR,
  offers: ``
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
        currentCity: (window.location.href.split(`/`)[3]) ? arrCity[window.location.href.split(`/`)[3]] : arrCity[keys[0]],
        listCities: arrCity
      });

    case actionCity.CHANGE_CITY:

      return extend(state, {
        currentCity: action.payload.currentCity
      });

  }

  if (action.payload) {
    return extend(state, {
      baseFilter: action.payload.filter
    });
  }

  return state;
}
