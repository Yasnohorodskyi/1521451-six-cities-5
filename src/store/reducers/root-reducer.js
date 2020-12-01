import {combineReducers} from "redux";

import ReviewReducer from "./reviews/reviews-reducer";
import OffersReducer from "./offers-reducer/offers-reducer";
import UserReducer from "./user/user-reducer";

export const NameSpace = {
  REVIEWS: `Review`,
  OFFERS: `Offers`,
  USER: `User`,
};

export default combineReducers({
  [NameSpace.REVIEWS]: ReviewReducer,
  [NameSpace.OFFERS]: OffersReducer,
  [NameSpace.USER]: UserReducer
});
