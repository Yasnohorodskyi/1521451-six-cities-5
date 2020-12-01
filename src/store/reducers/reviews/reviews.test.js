import {
  ReviewType,
} from "../../const";

import {reviews} from "../../../mocks-for-tests/mocks";
import {Reviews} from "./reviews";

const initialState = {
  reviews: []
};
/*
describe(`Reducers works correctly`, () => {

  it(`GET_REVIEWS`, () => {
      expect(Reviews(initialState, {
        type: ReviewType.GET_REVIEWS,
        payload: reviews,
      })).toEqual({
        reviews
      });
  });
  it(`ADD_REVIEWS`, () => {
    expect(Reviews(initialState, {
      type: ReviewType.ADD_REVIEWS,
      payload: reviews[0],
    })).toEqual({
      reviews: reviews[0]
    });
  });

})




it(`Reducer without additional parameters should return initial state`, () => {
  expect(Reviews(void 0, {})).toEqual({
    reviews: []
  });
});
*/
