import {extend} from "../../../helpers/extend";
import {ActionType} from "../../const";

const stateReviews = {
  reviews: []
};

export default function Reviews(state = stateReviews, action) {

  switch (action.type) {
    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews: action.payload.data
      });
    case ActionType.ADD_REVIEWS:
      return extend(state, {
        reviews: action.payload.data
      });
  }

  return extend(state, {
    reviews: state.reviews
  });
}
