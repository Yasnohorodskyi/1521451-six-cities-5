export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  GET_OFFER: `GET_OFFER`,
  FILTER_OFFER: `FILTER_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  GET_REVIEWS: `GET_REVIEWS`,
};

export const AppRoute = {
  RESULT: `/`,
  LOGIN: `/login`
};

const baseUrl = `https://5.react.pages.academy/six-cities/`;

export const APIRoute = {
  GET_OFFER: baseUrl + `hotels`,
  GET_REVIEWS: baseUrl + `comments`,
  LOGIN: baseUrl + `login`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const actionFilter = {
  FILTER_POPULAR: `Popular`,
  FILTER_TOP_RATED_FIRST: `Top rated first`,
  FILTER_PRICE_LOW_TO_HIGH: `Price: low to high`,
  FILTER_PRICE_HIGH_TO_LOW: `Price: high to low`,
};

export const actionCity = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`
};
