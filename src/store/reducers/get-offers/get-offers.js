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
    console.log(action);
    switch (action.payload.filter) {
        case actionFilter.FILTER_POPULAR:

          let res = action.payload.offers.sort(function (a, b) {
            return  b.rating  - a.rating;
          })
          stateOffers.sortOffers.set(
            action.currentCity ,
            res
          )

          return extend(state, {
            //offers: action.payload.offers,
            baseFilter: action.payload.filter,
            sortOffers: stateOffers.sortOffers
          });


        case actionFilter.FILTER_TOP_RATED_FIRST:
          return extend(state, {
            offers: action.payload.offers ,
            baseFilter: action.payload.filter,
            sortOffers: state.sortOffers
          });
        case actionFilter.FILTER_PRICE_LOW_TO_HIGH:

          let resA =  action.payload.offers.sort(function (a, b) {
              return a.price - b.price;
            })

            const s = stateOffers.sortOffers.set(
              action.payload.currentCity ,
              resA
            )

          return extend(state, {
            sortOffers: s,
            baseFilter: action.payload.filter
          });


        case actionFilter.FILTER_PRICE_HIGH_TO_LOW:
          return extend(state, {
            offers: action.payload.offers.sort(function (a, b) {
              return b.price - a.price;
            }),
            baseFilter: action.payload.filter
          });
      }
  }


  return state;
}
