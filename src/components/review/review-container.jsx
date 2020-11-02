import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import ReviewList from "./components/reviews-list.jsx";
import {reviewsItem} from '../../shapes/reviews-item';

const ReviewContainer = (props) => {
  const {reviews, currentOffer} = props;

  return (
    <React.Fragment>
      <ReviewList
        reviews={reviews}
        currentOffer={currentOffer}
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


const mapStateToProps = (state) => ({
  reviews: state.reviews
});


export {ReviewContainer};
export default connect(mapStateToProps)(ReviewContainer);
