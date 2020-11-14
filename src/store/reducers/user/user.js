
import {AuthorizationStatus} from "../../const";
import {UserType} from "../../actions/const";

const userState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  data: null
};

export default function User(state = userState, action) {
  switch (action.type) {
    case UserType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        data: action.payload.data,
        authorizationStatus: `AUTH`
      });
    case UserType.AuthorizationStatus:
      return Object.assign({}, state, {
        data: action.payload.data,
        authorizationStatus: `AUTH`
      });
  }

  return state;
}
