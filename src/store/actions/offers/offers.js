import {APIRoute} from '../../const';
import {OffersType} from '../const';

export const fetchOffers = () => (dispatch, _getState, api) => {

  api.get(APIRoute.GET_OFFER)
    .then(({data}) => dispatch({
      type: OffersType.GET_OFFERS,
      payload: data
    }))
};

export const changeCity = (currentCity) => (dispatch) => {
  dispatch({
    type: OffersType.CHANGE_CITY,
    payload: {
      currentCity
    }
  })
}

export const getOffer = (idRoom) => (dispatch, _getState, api) => {
  const sendData = {};
  api.get(`${APIRoute.GET_OFFER}/${idRoom}`)
    .then(({data}) => {
      sendData.offer = data;
      api.get(`${APIRoute.GET_OFFER}/${idRoom}/nearby`)
      .then(({data}) => {
        sendData.nearby = data;
        dispatch({
          type: OffersType.GET_OFFER,
          payload:{
            offer: sendData.offer,
            nearby: sendData.nearby
          }
        })
      })
    })
}


export const filterOffer = (filter, offers, currentCity) => (dispatch) => {
  dispatch({
    type: OffersType.FILTER_OFFER,
    payload: {
      filter,
      offers,
      currentCity
    }
  })
}


export const setFavorite = (idRoom) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.FAVORITE}/${idRoom}/1`).then((response) => {
    console.log(response);
  })
  .then(() => {console.log('as')});
}


export const getFavorite = () => (dispatch, _getState, api) => {
  api.get(`${APIRoute.FAVORITE}`).then((response) => {
    console.log(OffersType);
    dispatch({
      type: OffersType.GET_FAVORITE,
      payload:{
        favorites: response.data
      }
    })
  })
  .then(() => {console.log('as')});
}
