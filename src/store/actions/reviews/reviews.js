import {APIRoute} from '../../const';
import {ReviewType} from '../const';
import {ActionType} from "../../const";

export const getReviews = (idRoom) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.GET_REVIEWS}/${idRoom}`)
    .then(({data}) => {
      dispatch({
        type: ReviewType.GET_REVIEWS,
        payload:{
          data: data
        }
      })
    })
}


export const addReviews = (comment, rating, idRoom) => (dispatch, _getState, api) => {

  api.post(`${APIRoute.GET_REVIEWS}/${idRoom}`, {comment, rating}
    ).then((response) => {

    })
    .then(() => {console.log('asdsad')});
  /*
  api.post(`${APIRoute.GET_REVIEWS}/${idRoom}`)
  .then(({data}) => {
    dispatch({
      type: ReviewType.GET_REVIEWS,
      payload:{
        data: data
      }
    })
  })
  */
}
