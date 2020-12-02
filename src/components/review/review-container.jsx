import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import ReviewList from "./components/reviews-list.jsx";
import {reviewsItem} from '../../shapes/reviews-item';
import {appUser} from '../../shapes/app-user';
import {getReviews, addReviews} from '../../store/actions/reviews/reviews';
import {MAX_REVIEWS} from './const';

const ReviewContainer = (props) => {

  const {reviews, user, addReviewsDispatch, currentOffer, getReviewsDispatch} = props;
  getReviewsDispatch(currentOffer);

  return (
    <React.Fragment>
      <ReviewList
        reviews={reviews.reverse()}
        user={user}
        addReviews={addReviewsDispatch}
        currentOffer={currentOffer}
        maxReviews={MAX_REVIEWS}
      />
    </React.Fragment>
  );
};


ReviewContainer.propTypes = {
  reviews: PropTypes.arrayOf(
      reviewsItem
  ),
  currentOffer: PropTypes.number,
  user: appUser,
  getReviewsDispatch: PropTypes.func,
  addReviewsDispatch: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addReviewsDispatch(comment, rating, currentOffer, callback) {
    dispatch(addReviews(comment, rating, currentOffer, callback));
  },
  getReviewsDispatch(currentOffer) {
    dispatch(getReviews(currentOffer));
  }
});

const mapStateToProps = (state) => {
  return {
    reviews: state.Review.reviews,
    user: state.User
  };
};


export {ReviewContainer};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);
