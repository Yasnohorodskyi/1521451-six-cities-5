import {APIRoute} from '../../const';
import {OffersType} from '../const';

export const fetchOffers = () => (dispatch, _getState, api) => {

  api.get(APIRoute.GET_OFFER)
    .then(({data}) => dispatch({
      type: OffersType.GET_OFFERS,
      payload: data
    }));
};

export const changeCity = (currentCity) => (dispatch) => {
  dispatch({
    type: OffersType.CHANGE_CITY,
    payload: {
      currentCity
    }
  });
};

export const getOffer = (idRoom) => (dispatch, _getState, api) => {
  const sendData = {};
  api.get(`${APIRoute.GET_OFFER}/${idRoom}`)
    .then(({data}) => {
      sendData.offer = data;
      api.get(`${APIRoute.GET_OFFER}/${idRoom}/nearby`)
        .then((response) => {
          sendData.nearby = response.data;
          dispatch({
            type: OffersType.GET_OFFER,
            payload: {
              offer: sendData.offer,
              nearby: sendData.nearby
            }
          });
        });
    });
};


export const filterOffer = (filter, offers, currentCity) => (dispatch) => {
  dispatch({
    type: OffersType.FILTER_OFFER,
    payload: {
      filter,
      offers,
      currentCity
    }
  });
};


export const setFavorite = (idRoom) => (_getState, api) => {
  api.post(`${APIRoute.FAVORITE}/${idRoom}/1`).then(() => {
  })
    .then(() => { });
};


export const getFavorite = () => (dispatch, _getState, api) => {
  api.get(`${APIRoute.FAVORITE}`).then((response) => {
    dispatch({
      type: OffersType.GET_FAVORITE,
      payload: {
        favorites: response.data
      }
    });
  })
    .then(() => { });
};
