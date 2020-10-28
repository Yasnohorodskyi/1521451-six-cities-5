import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from '../reviews-item/reviews-item';
import AddFormComment from '../add-form-comment/add-form-comment';
import {reviewsItem} from '../../shapes/reviews-item';

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {reviews, addComment, countComments} = this.props;

    return (
      <React.Fragment>
        <h2 className="reviews__title">
          Reviews &middot;
          <span className="reviews__amount">
            {countComments}
          </span>
        </h2>
        <ul className="reviews__list">
          {reviews.map((review) => (
            <ReviewsItem key={review.id} review={review} />
          ))}
        </ul>
        <AddFormComment addComment={addComment} />
      </React.Fragment>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        reviewsItem
      })
  ),
  addComment: PropTypes.func,
  countComments: PropTypes.number,
};

export default ReviewsList;
