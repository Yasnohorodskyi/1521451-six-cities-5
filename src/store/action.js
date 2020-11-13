export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  FILTER_OFFER: `FILTER_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};


export const ActionCreator = {
  changeCity: (currentCity) => (
    {
      type: ActionType.CHANGE_CITY,
      payload: {
        currentCity
      }
    }
  ),
  filterOffer: (filter, offers, currentCity) => {
    return {
      type: ActionType.FILTER_OFFER,
      payload: {
        filter,
        offers,
        currentCity
      }
    };
  },
};

export const requireAuthorization = (status, data) => {
  return {
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: {
    status,
    data
  },
  }
};
export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
