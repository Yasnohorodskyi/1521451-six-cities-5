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
  baseCity: 'Amsterdam',
  baseFilter: actionFilter.FILTER_POPULAR,
  sortOffers: new Map([]),
  fullOffers: []
};


const setFilter = (state, action, sortFunction) => {
  let map = new Map([]);
  state.fullOffers.map((offer) => {
      map.set(
         offer.city.name ,
         state.fullOffers.filter((offerCurrent) => offerCurrent.city[`name`] === offer.city.name)
      )
    }
  )

  let res = action.payload.offers.sort(sortFunction)
  map.set(
    action.payload.currentCity ,
    res
  )

  return map
}

export default function reducerGetOffers(state = stateOffers, action) {

  switch (action.type) {
    case actionCity.LOAD_OFFERS:
      action.payload.map((offer) => {
        if(offer.city){
          stateOffers.sortOffers.set(
             offer.city.name ,
             action.payload.filter((offerCurrent) => offerCurrent.city[`name`] === offer.city.name)
          )
        }
      });
      return extend(state, {
        sortOffers: state.sortOffers,
        baseCity: state.baseCity,
        fullOffers: action.payload
      });

    case actionCity.CHANGE_CITY:
      return extend(state, {
          currentCity: action.payload.title,
          offers: state.sortOffers,
          baseFilter: actionFilter.FILTER_POPULAR
        });
  }

  if(action.payload){

    switch (action.payload.filter) {
        case actionFilter.FILTER_POPULAR:

          let map = new Map([]);

          state.fullOffers.map((offer) => {
            if(offer.city){
              map.set(
                 offer.city.name ,
                 state.fullOffers.filter((offerCurrent) => offerCurrent.city[`name`] === offer.city.name)
              )
            }
          })
          return extend(state, {
            baseFilter: action.payload.filter,
            sortOffers: map
          });
        case actionFilter.FILTER_TOP_RATED_FIRST:
          return extend(state, {
            offers: action.payload.offers ,
            baseFilter: action.payload.filter,
            sortOffers: setFilter(state, action, function (a, b) {
              return  b.rating  - a.rating;
            })
          });
        case actionFilter.FILTER_PRICE_LOW_TO_HIGH:
          return extend(state, {
            offers: action.payload.offers ,
            baseFilter: action.payload.filter,
            sortOffers: setFilter(state, action, function (a, b) {
              return a.price - b.price;
            })
          });
        case actionFilter.FILTER_PRICE_HIGH_TO_LOW:
          return extend(state, {
            offers: action.payload.offers ,
            baseFilter: action.payload.filter,
            sortOffers:  setFilter(state, action, function (a, b) {
              return b.price - a.price;
            })
          });
      }
  }


  return state;
}
