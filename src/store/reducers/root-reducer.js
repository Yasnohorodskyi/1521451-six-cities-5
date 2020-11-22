import {combineReducers} from "redux";

import Review from "./reviews/reviews";
import Offers from "./offers/offers";
import User from "./user/user";
/**
 * Сделать как в классной работе
 */
export const NameSpace = {
  CHANGE: `CHANGE`,
  FILTER: `FILTER`,
  GET: `GET`,
};

export default combineReducers({
  Review,
  Offers,
  User
});
