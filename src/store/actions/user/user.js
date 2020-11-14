import {UserType} from '../const';
import {APIRoute, AppRoute, AuthorizationStatus, ActionType} from "../../const";


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN, {withCredentials: true})
    .then((res) => {
      console.log(res.data);
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH, res.data))
    })
    .catch((error) => {
      //const errorDisplay = new Error(error);
      //errorDisplay();
    })
);


export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {withCredentials: true}
    ).then((response) => {
      console.log(response);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH, response.data));
    })
    .then(() => dispatch(redirectToRoute(AppRoute.RESULT)));
};

export const requireAuthorization = (status, data) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {
      status,
      data
    }
  });

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
