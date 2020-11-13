import {AppRoute, APIRoute, actionCity} from "./const";
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
      const errorDisplay = new Error(error);
      errorDisplay();
    })
);


export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH, response.data));
    })
    .then(() => dispatch(redirectToRoute(AppRoute.RESULT)));
};

