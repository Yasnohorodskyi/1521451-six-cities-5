import {combineReducers} from "redux";

import changeCity from "./change-city/change-city";
import filterOffers from "./filter-offers/filter-offers";
import getOffers from "./get-offers/get-offers";

export const NameSpace = {
  CHANGE: `CHANGE`,
  FILTER: `FILTER`,
  GET: `GET`,
};

export default combineReducers({
  //filterOffers,
  //changeCity,
  getOffers
});
