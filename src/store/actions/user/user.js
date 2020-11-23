import {APIRoute, AppRoute, AuthorizationStatus, UserType} from "../../const";

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


export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password}
  ).then((response) => {
    global.status = response.status;
    switch (response.status) {
      case 200:
        dispatch(requireAuthorization(AuthorizationStatus.AUTH, convertUser(response.data)));
        break;
      case 401:
        dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH, null, response.status));
        break;
      default:
        dispatch(requireError(response.request.responseText));
        break;
    }

  })
    .then(() => {
      return global.status === 200 ? dispatch(redirectToRoute(AppRoute.RESULT)) : ``;
    })
    .catch((error) => {
      dispatch(redirectToRoute(error));
    });
};

export const requireError = (error) => ({
  type: UserType.REQUIRED_ERROR,
  payload: {
    error
  }
});

export const requireAuthorization = (status, data, error) => ({
  type: UserType.REQUIRED_AUTHORIZATION,
  payload: {
    status,
    data,
    error
  }
});

export const redirectToRoute = (url) => ({
  type: APIRoute.REDIRECT_TO_ROUTE,
  payload: url,
});
