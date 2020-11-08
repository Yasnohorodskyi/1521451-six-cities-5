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

          let res2 = action.payload.offers.sort(function (a, b) {
            return  b.rating  - a.rating;
          })

          let map2 = new Map([]);

          state.fullOffers.map((offer) => {
            if(offer.city){
              map2.set(
                 offer.city.name ,
                 state.fullOffers.filter((offerCurrent) => offerCurrent.city[`name`] === offer.city.name)
              )
            }
          })
          map2.set(
            action.payload.currentCity ,
            res2
          )

          return extend(state, {
            offers: action.payload.offers ,
            baseFilter: action.payload.filter,
            sortOffers: map2
          });
        case actionFilter.FILTER_PRICE_LOW_TO_HIGH:

          let res3 = action.payload.offers.sort(function (a, b) {
            return a.price - b.price;
          })

          let map3 = new Map([]);

          state.fullOffers.map((offer) => {
            if(offer.city){
              map3.set(
                 offer.city.name ,
                 state.fullOffers.filter((offerCurrent) => offerCurrent.city[`name`] === offer.city.name)
              )
            }
          })
          map3.set(
            action.payload.currentCity ,
            res3
          )

          return extend(state, {
            offers: action.payload.offers ,
            baseFilter: action.payload.filter,
            sortOffers: map3
          });



        case actionFilter.FILTER_PRICE_HIGH_TO_LOW:

          let res4 = action.payload.offers.sort(function (a, b) {
            return b.price - a.price;
          })

          let map4 = new Map([]);

          state.fullOffers.map((offer) => {
            if(offer.city){
              map4.set(
                 offer.city.name ,
                 state.fullOffers.filter((offerCurrent) => offerCurrent.city[`name`] === offer.city.name)
              )
            }
          })
          map4.set(
            action.payload.currentCity ,
            res4
          )

          return extend(state, {
            offers: action.payload.offers ,
            baseFilter: action.payload.filter,
            sortOffers: map4
          });
      }
  }


  return state;
}
