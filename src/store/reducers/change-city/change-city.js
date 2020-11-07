
import {extend} from "../../../helpers/extend";

const actionCity = {
  CHANGE_CITY: `CHANGE_CITY`,
  BASE_CITY: `Amsterdam`,
};

const stateCity = {
  baseCity: actionCity.BASE_CITY,
};


export default function reducerCity(state = stateCity, action){

  switch (action.type) {
    case actionCity.CHANGE_CITY:
      console.log(action);
      return extend(state, {
        currentCity: action.payload.title,
        offers: action.payload.offers
      });
  }

  return state;
};
