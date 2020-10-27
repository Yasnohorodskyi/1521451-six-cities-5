export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

export const ActionCreator = {
  changeCity: (titleCity, cb) => ({
    type: ActionType.CHANGE_CITY,
    payload: {
      title: titleCity,
      callback: cb
    }
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
    payload: 1,
  })
};

