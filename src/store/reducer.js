import {ActionType} from "./action";
import offers from "../mocks/offers";
import {extend} from "../helpers/extend";


const initialState = {
  city: `Amsterdam`,
  offers,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      console.log('CHANGE_CITY');
      console.log(action);
      console.log(state);
      return extend(state, {
        city: action.payload.title,
      });
  }

  return state;
};


export {reducer};
