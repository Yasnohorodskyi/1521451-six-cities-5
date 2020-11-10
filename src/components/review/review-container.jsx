import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import ReviewList from "./components/reviews-list.jsx";
import {reviewsItem} from '../../shapes/reviews-item';
import {selectOfferReviews} from '../../store/selects/reviews/select-offer-reviews';

const ReviewContainer = (props) => {
  const {rewiews} = props;
  return (
    <React.Fragment>
      <ReviewList
        reviews={rewiews}
      />
    </React.Fragment>
  );
};

ReviewContainer.propTypes = {
  rewiews: PropTypes.arrayOf(
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
    rewiews: selectOfferReviews(data)
  };
};


export {ReviewContainer};
export default connect(mapStateToProps)(ReviewContainer);
