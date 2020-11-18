import {APIRoute, AppRoute, AuthorizationStatus, ActionType} from "../../const";

const convertUser = (data) => {
  return {
    avatarUrl: data.avatar_url,
    email: data.email,
    id: data.id,
    isPro: data.is_pro,
    name: data.name
  };
};

const global = {};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((res) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH, convertUser(res.data)));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);


export const login = ({email, password}, setWarning) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password}
  ).then((response) => {
    global.status = response.status;
    switch (response.status) {
      case 200:
        dispatch(requireAuthorization(AuthorizationStatus.AUTH, convertUser(response.data)));
        break;
      case 401:
        dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
        break;
      default:
        setWarning(`Error login: ${response.status}`);
    }

  })
    .then(() => {
      return global.status === 200 ? dispatch(redirectToRoute(AppRoute.RESULT)) : ``;
    })
    .catch((error) => {
      setWarning(`Error axios: ${error}`);
    });
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
