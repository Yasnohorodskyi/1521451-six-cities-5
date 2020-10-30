import {ActionType} from "./action";
import {extend} from "../helpers/extend";

import offers from "../mocks/offers";
import cities from "../mocks/cities";
import reviews from "../mocks/reviews";

console.log(cities[0].title);
const initialState = {
  currentCity: cities[0].title,
  offers,
  cities,
  reviews
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      console.log(state);
      return extend(state, {
        city: action.payload.title,
      });
  }

  return state;
};


export {reducer};
