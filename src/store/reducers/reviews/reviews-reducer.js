import {extend} from "../../../helpers/extend";
import {ReviewType} from "../../const";

const stateReviews = {
  reviews: []
};

export default function reviewsReducer(state = stateReviews, action) {

  switch (action.type) {
    case ReviewType.GET_REVIEWS:
      return extend(state, {
        reviews: action.payload.data
      });
    case ReviewType.ADD_REVIEWS:
      return extend(state, {
        reviews: action.payload.data
      });
  }

  return extend(state, {
    reviews: state.reviews
  });
}

export {reviewsReducer};
