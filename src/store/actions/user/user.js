import {APIRoute, AppRoute, AuthorizationStatus, ActionType} from "../../const";

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((res) => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH, res.data));
    })
    .catch(() => {
    })
);


export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password}
  ).then((response) => {
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
