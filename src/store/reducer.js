import {ActionType} from "./action";
import offers from "../mocks/offers";
import {extend} from "../helpers/extend";


const initialState = {
  town: `Amsterdam`,
  offers,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      action.payload.callback(
          action.payload.title
      );
      return extend(state, {
        town: action.payload.title,
      });
  }

  return state;
};


export {reducer};
