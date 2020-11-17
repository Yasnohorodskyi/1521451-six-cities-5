import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import ReviewList from "./components/reviews-list.jsx";
import {reviewsItem} from '../../shapes/reviews-item';
import {appUser} from '../../shapes/app-user';
import {getReviews, addReviews} from '../../store/actions/reviews/reviews';

class ReviewContainer extends PureComponent {
  constructor(props) {
    super(props);
    const {getReviewsDispatch, currentOffer} = this.props;
    this.state = {
      update: 0
    };
    getReviewsDispatch(currentOffer);
  }
  render() {
    const {reviews, user, addReviewsDispatch, currentOffer} = this.props;
    return (
      <React.Fragment>
        <ReviewList
          reviews={reviews}
          user={user}
          addReviews={addReviewsDispatch}
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
  currentOffer: PropTypes.number,
  user: appUser,
  getReviewsDispatch: PropTypes.func,
  addReviewsDispatch: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addReviewsDispatch(comment, rating, currentOffer) {
    /* Доделать в след. задании: Добавить ограничение на комменты, не более 4ых в одной карточке
    */
    // dispatch(setFavorite(id));
    // dispatch(addReviews(comment, rating, currentOffer));
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
