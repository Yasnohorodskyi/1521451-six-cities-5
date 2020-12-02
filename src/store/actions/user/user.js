import {APIRoute, AppRoute, UserType} from "../../const";

const convertUser = (data) => {
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
      dispatch(requireAuthorization(UserType.AUTH, convertUser(res.data)));
    })
    .catch(() => {
      dispatch(requireAuthorization(UserType.NO_AUTH));
    })
);


export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password}
  ).then((response) => {
    switch (response.status) {
      case 200:
        dispatch(requireAuthorization(UserType.AUTH, convertUser(response.data)));
        break;
      case 401:
        dispatch(requireAuthorization(UserType.NO_AUTH, null, response.status));
        break;
      default:
        dispatch(requireError(response.request.responseText));
        break;
    }
    return response;
  })
    .then((response) => {
      return response.status === 200 ? dispatch(redirectToRoute(AppRoute.RESULT)) : ``;
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
