import {APIRoute, OffersType, AppRoute} from '../../const';
import {redirectToRoute} from '../user/user';
import {offersAdapter, offerAdapter} from '../../../helpers/offers-adapter';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.GET_OFFER)
    .then(({data}) => dispatch({
      type: OffersType.GET_OFFERS,
      payload: offersAdapter(data)
    }))
    .catch((error) => {
      dispatch({
        type: OffersType.ERROR_LOAD,
        payload: {
          error
        }
      });
    })
);

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
              offer: offerAdapter(sendData.offer),
              nearby: offersAdapter(sendData.nearby)
            }
          });
        })
        .catch((error) => {
          dispatch({
            type: OffersType.ERROR_OFFER,
            payload: {
              error
            }
          });
        });
    });
};


export const filterOffer = (filter) => (dispatch) => {
  return (
    dispatch({
      type: OffersType.FILTER_OFFER,
      payload: {
        filter
      }
    })
  );
};


export const setFavorite = (idRoom, currentStatus) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.FAVORITE}/${idRoom}/${(currentStatus) ? 0 : 1}`).then(() => {
  }).then(() => {
    dispatch({
      type: OffersType.SET_FAVORITE,
      payload: {
        id: idRoom,
        status: !currentStatus
      }
    });
  })
    .catch(() => {
      dispatch(
          redirectToRoute(
              AppRoute.LOGIN
          )
      );
    });
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
    .catch((error) => {
      dispatch({
        type: OffersType.ERROR_GET_FAVORITE,
        payload: {
          error
        }
      });
    });
};
