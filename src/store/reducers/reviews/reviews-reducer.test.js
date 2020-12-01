import {
  ReviewType,
} from "../../const";

import {reviews} from "../../../mocks-for-tests/mocks";
import {reviewsReducer} from "./reviews-reducer";

const initialState = {
  reviews: []
};

describe(`Reducers works correctly`, () => {
  it(`GET_REVIEWS`, () => {
    expect(reviewsReducer(initialState, {
      type: ReviewType.GET_REVIEWS,
      payload: {
        data: reviews
      }
    })).toEqual({
      reviews
    });
  });
  it(`ADD_REVIEWS`, () => {
    expect(reviewsReducer(initialState, {
      type: ReviewType.ADD_REVIEWS,
      payload: {
        data: reviews[0]
      }
    })).toEqual({
      reviews: reviews[0]
    });
  });
});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reviewsReducer(void 0, {})).toEqual({
    reviews: []
  });
});

