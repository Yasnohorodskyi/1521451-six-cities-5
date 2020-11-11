import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import ReviewList from "./components/reviews-list.jsx";
import {reviewsItem} from '../../shapes/reviews-item';
import {selectOfferReviews} from '../../store/selectors/reviews/select-offer-reviews';

const ReviewContainer = (props) => {
  const {reviews} = props;
  return (
    <React.Fragment>
      <ReviewList
        reviews={reviews}
      />
    </React.Fragment>
  );
};

ReviewContainer.propTypes = {
  reviews: PropTypes.arrayOf(
      reviewsItem
  ),
  currentOffer: PropTypes.number
};


const mapStateToProps = (state, props) => {
  const data = {
    state,
    props
  };
  return {
    reviews: selectOfferReviews(data)
  };
};


export {ReviewContainer};
export default connect(mapStateToProps)(ReviewContainer);
