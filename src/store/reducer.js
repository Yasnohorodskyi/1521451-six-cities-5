import {ActionType} from "./action";
import {extend} from "../helpers/extend";

import offers from "../mocks/offers";
import cities from "../mocks/cities";
import reviews from "../mocks/reviews";

const initialState = {
  currentCity: cities[0].title,
  offers,
  cities,
  reviews
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload.title,
      });
  }

  return state;
};


export {reducer};
