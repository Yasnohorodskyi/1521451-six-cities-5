import {extend} from "../../../helpers/extend";
import {actionFilter, actionCity} from "../../const";
import browserHistory from "../../../browser-history";

const stateOffers = {
  currentCity: null,
  baseFilter: actionFilter.FILTER_POPULAR,
  offers: []
};


export default function Offers(state = stateOffers, action) {

  console.log(action);

  switch (action.type) {
    case actionCity.LOAD_OFFERS:
      const arrCity = {};
      action.payload.map((offer) => {
        arrCity[offer.city.name] = offer.city;
      });

      const keys = Object.keys(arrCity);
      console.log(arrCity[keys[0]]);
      return extend(state, {
        data: action.payload,
        currentCity: (browserHistory.location.pathname.slice(1) !== '') ? arrCity[browserHistory.location.pathname.slice(1)] : arrCity[keys[0]],
        listCities: arrCity,
        baseFilter: actionFilter.FILTER_POPULAR
      });

    case actionCity.CHANGE_CITY:

      return extend(state, {
        currentCity: action.payload.currentCity
      });

  }
  //Тут проблема!
  let d = '';

  if(action.payload == '/'){
     d = actionFilter.FILTER_POPULAR;
  }else if(action.payload){
    d = action.payload.filter;
  }

  if (action.payload) {
    return extend(state, {
      baseFilter: d
    });
  }

  return state;
}
