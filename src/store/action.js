export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  FILTER_OFFER: `FILTER_OFFER`
};

export const ActionCreator = {
  changeCity: (titleCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: {
      title: titleCity
    }
  }),
  filterOffer: (filter, offers) => ({
    type: ActionType.FILTER_OFFER,
    payload: {
      filter,
      offers
    }
  }),
};

