
import {UserType} from "../../const";

const userState = {
  authorizationStatus: UserType.NO_AUTH,
  data: null,
  error: ``
};

export default function userReducer(state = userState, action) {

  switch (action.type) {
    case UserType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        data: action.payload.data,
        authorizationStatus: action.payload.status
      });
    case UserType.AuthorizationStatus:
      return Object.assign({}, state, {
        data: action.payload.data,
        authorizationStatus: action.payload.status
      });
    case UserType.REQUIRED_ERROR:
      return Object.assign({}, state, {
        error: action.payload.error,
      });
  }

  return state;
}

export {userReducer};
