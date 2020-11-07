import {extend} from "../../../helpers/extend";



export const actionOffers = {
  FILTER_POPULAR: `Popular`,
  FILTER_TOP_RATED_FIRST: `Top rated first`,
  FILTER_PRICE_LOW_TO_HIGH: `Price: low to high`,
  FILTER_PRICE_HIGH_TO_LOW: `Price: high to low`,
  LOAD_OFFERS: `loadOffers`
};


const actionCity = {
  CHANGE_CITY: `CHANGE_CITY`,
  BASE_CITY: `Amsterdam`,
  LOAD_OFFERS: `loadOffers`
};

const stateOffers = {
  offers: [],
  baseCity: '',
  baseFilter: actionOffers.FILTER_POPULAR,
  sortOffers: new Map([])
};




export default function reducerGetOffers(state = stateOffers, action) {
  switch (action.type) {
    case actionCity.LOAD_OFFERS:
      action.payload.map((x) => {
        if(x.city){
          stateOffers.sortOffers.set(
             x.city.name ,
             action.payload.filter((offer) => offer.city[`name`] === x.city.name)
          )
        }
      });
      return extend(state, {
        offers: action.payload,
        baseCity: actionCity.BASE_CITY
      });

    case actionCity.CHANGE_CITY:
      return extend(state, {
          currentCity: action.payload.title,
          offers: action.payload.offers,
          baseFilter: actionOffers.FILTER_POPULAR
        });
  }

  if(action.payload){

    switch (action.payload.filter) {
        case actionOffers.FILTER_POPULAR:
          return extend(state, {
            offers: state.offers,
            baseFilter: actionOffers.FILTER_POPULAR
          });
        case actionOffers.FILTER_TOP_RATED_FIRST:
          return extend(state, {
            offers: action.payload.offers.sort(function (a, b) {
              return b.rating - a.rating;
            }),
            baseFilter: action.payload.filter
          });


        case actionOffers.FILTER_PRICE_LOW_TO_HIGH:
          console.log(action)
          action.payload.offers.sort(function (a, b) {
            return a.price - b.price;
          });
          return extend(state, {
            offers: action.payload.offers,
            baseFilter: action.payload.filter
          });


        case actionOffers.FILTER_PRICE_HIGH_TO_LOW:
          action.payload.offers.sort(function (a, b) {
            return b.price - a.price;
          });
          return extend(state, {
            offers:action.payload.offers,
            baseFilter: action.payload.filter
          });
      }
  }


  return state;
}
