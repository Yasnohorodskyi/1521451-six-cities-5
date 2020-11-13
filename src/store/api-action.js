import {AppRoute, APIRoute, actionCity} from "./const"
import {redirectToRoute, requireAuthorization} from "./action";
import {AuthorizationStatus} from "./const";

export const fetch = () => (dispatch, _getState, api) => (
  api.get(APIRoute.GET_OFFER)
    .then(({data}) => dispatch({
      type: actionCity.LOAD_OFFERS,
      payload: data
    }))
);


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch((error) => {
      new Error(error);
    })
);


export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => {
      console.log(response.data.token);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH, response.data))
    })
    .then(() => dispatch(redirectToRoute(AppRoute.RESULT)))
};

