import {AuthorizationStatus} from "../../const";
import {ActionType} from "../../action";
import {set_cookie} from '../../../helpers/cookie';

const userState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  data: null
};

export default function User(state = userState, action) {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      set_cookie ("userData", JSON.stringify(action.payload.data));
      return Object.assign({}, state, {
        authorizationStatus: state.authorizationStatus,
        data: action.payload.data
      });
    case 'REDIRECT_TO_ROUTE':
      return Object.assign({}, state, {
        authorizationStatus: 'AUTH'
      });
  }

  return state;
};
