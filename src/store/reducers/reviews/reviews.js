import reviews from '../../../mocks/reviews';
import {extend} from "../../../helpers/extend";

const stateReviews = {
  reviews
};

export default function Reviews(state = stateReviews) {
  return extend(state, {
    reviews: state.reviews
  });
}
