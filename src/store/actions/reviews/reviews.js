import {APIRoute} from '../../const';
import {ReviewType} from '../const';

export const getReviews = (idRoom) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.GET_REVIEWS}/${idRoom}`)
    .then(({data}) => {
      dispatch({
        type: ReviewType.GET_REVIEWS,
        payload: {
          data
        }
      });
    });
};


export const addReviews = (comment, rating, idRoom) => (dispatch, _getState, api) => {

  api.post(`${APIRoute.GET_REVIEWS}/${idRoom}`, {comment, rating}
  ).then((response) => {
    if (response.request.status === 200) {

      dispatch({
        type: ReviewType.ADD_REVIEWS,
        payload: {
          data: JSON.parse(response.request.response)
        }
      });

    }

  })
  .then(() => {});

};
