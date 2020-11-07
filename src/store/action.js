export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  FILTER_OFFER: `FILTER_OFFER`
};

import axios from "axios";
const get = async (titleCity) => {
  return await axios({
    method: 'GET',
    url: `https://5.react.pages.academy/six-cities/hotels`
  });

}
export const ActionCreator = {
  changeCity: (titleCity, dispatch) => {
    return (dispatch) => {
      dispatch({
        type: ActionType.CHANGE_CITY,
        payload: {
          title: titleCity
        }
      })

      axios({
        method: 'GET',
        url: `https://5.react.pages.academy/six-cities/hotels`
      }).then(response => {

          dispatch({
            type: ActionType.CHANGE_CITY,
            payload: {
              title: titleCity,
              offers: response.data
            }
          })
        })

      }
  },
  filterOffer: (filter, offers, dispatch) => {
    console.log(offers);
    return {
      type: ActionType.FILTER_OFFER,
        payload: {
          filter,
          offers
        }
    }
  },
};

