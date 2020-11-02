import React, {PureComponent} from 'react';
import ReviewsItem from "./reviews-item.jsx";
import AddFormComment from "./add-form-comment.jsx";
import {reviewsItem} from '../../../shapes/reviews-item';
import PropTypes from 'prop-types';

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {reviews, currentOffer} = this.props;
    const filterReviews = reviews.filter((review) => review.offer === currentOffer);

    return (
      <React.Fragment>
        <h2 className="reviews__title">
          Reviews &middot;
          <span className="reviews__amount">
            {filterReviews.length}
          </span>
        </h2>
        <ul className="reviews__list">
          {filterReviews.map((review) => (
            <ReviewsItem key={review.id} review={review} />
          ))}
        </ul>
        <AddFormComment/>
      </React.Fragment>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      reviewsItem
  ),
  currentOffer: PropTypes.number
};

export default ReviewsList;
