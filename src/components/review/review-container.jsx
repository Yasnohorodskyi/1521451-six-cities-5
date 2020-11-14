import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import ReviewList from "./components/reviews-list.jsx";
import {reviewsItem} from '../../shapes/reviews-item';
import {selectOfferReviews} from '../../store/selectors/reviews/select-offer-reviews';
import {getReviews, addReviews} from '../../store/actions/reviews/reviews';

class ReviewContainer extends PureComponent {
  constructor(props) {
    super(props);
    const {getReviews, currentOffer} = this.props;
    this.state = {
      update: 0
    }
    getReviews(currentOffer);
  }
  render() {
    const {reviews, user, addReviews, currentOffer} = this.props;
    return (
      <React.Fragment>
        <ReviewList
          reviews={reviews}
          user={user}
          addReviews={addReviews}
          currentOffer={currentOffer}
        />
      </React.Fragment>
    );
  }
}

ReviewContainer.propTypes = {
  reviews: PropTypes.arrayOf(
      reviewsItem
  ),
  currentOffer: PropTypes.number
};

const mapDispatchToProps = (dispatch) => ({
  addReviews(comment, rating, currentOffer) {
     dispatch(addReviews(comment, rating, currentOffer));
  },
  getReviews(currentOffer) {
    dispatch(getReviews(currentOffer));
 }
});

const mapStateToProps = (state, props) => {
  return {
    reviews: state.Review.reviews,
    user: state.User
  };
};


export {ReviewContainer};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);
