import {ActionType} from "./action";
import offers from "../mocks/offers";
import {extend} from "../helpers/extend";


const initialState = {
  city: (window.location.href.split('/')[3]) ? window.location.href.split('/')[3] : `Amsterdam`,
  offers,
  room: window.location.href.split('/')[4]
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload.title,
      });
  }

  return state;
};


export {reducer};
