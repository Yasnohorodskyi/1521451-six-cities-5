import {APIRoute, AppRoute, AuthorizationStatus, ActionType} from "../../const";

const converterUser = (data) => {
  return {
    avatarUrl: data.avatar_url,
    email: data.email,
    id: data.id,
    isPro: data.is_pro,
    name: data.name
  };
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((res) => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH, converterUser(res.data)));
    })
    .catch(() => {
    })
);


export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password}
  ).then((response) => {
    dispatch(requireAuthorization(AuthorizationStatus.AUTH, converterUser(response.data)));
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
