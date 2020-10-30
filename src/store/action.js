export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

export const ActionCreator = {
  changeCity: (titleCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: {
      title: titleCity
    }
  })
};

