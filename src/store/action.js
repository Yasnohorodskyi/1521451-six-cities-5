export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  FILTER_OFFER: `FILTER_OFFER`
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

