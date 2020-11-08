export const fetch = () => (dispatch, _getState, api) => (
  api.get(`https://5.react.pages.academy/six-cities/hotels`)
    .then(({data}) => dispatch({
      type: `LOAD_OFFERS`,
      payload: data
    }))
);
