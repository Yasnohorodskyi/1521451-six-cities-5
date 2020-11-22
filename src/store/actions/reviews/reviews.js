import {APIRoute, ReviewType} from '../../const';

export const getReviews = (idRoom) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.GET_REVIEWS}/${idRoom}`)
    .then(({data}) => {
      dispatch({
        type: ReviewType.GET_REVIEWS,
        payload: {
          data
        }
      });
    })
    .catch((error) => {
      dispatch({
        type: ReviewType.ERROR_LOAD,
        payload: {
          error
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
          data: JSON.parse(response.request.response),
          status: response.request.status
        }
      });
    }
  })
  .catch((error) => {
    dispatch({
      type: ReviewType.ERROR_ADD,
      payload: {
        error
      }
    });
  });
};
