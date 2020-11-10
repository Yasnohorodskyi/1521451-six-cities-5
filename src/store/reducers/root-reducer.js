import {combineReducers} from "redux";

import Rewiew from "./reviews/reviews";
import Offers from "./offers/offers";

export const NameSpace = {
  CHANGE: `CHANGE`,
  FILTER: `FILTER`,
  GET: `GET`,
};

export default combineReducers({
  Rewiew,
  Offers
});
