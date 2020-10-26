import React, {PureComponent} from 'react';
import {calcRating} from '../../helpers/calc-rating';
import {formatterData} from '../../helpers/formatter-data';
import {reviewsItem} from '../../shapes/reviews-item';

class ReviewsItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {review} = this.props;

    return (
      <li key={review.id} className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={review.user.ava} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {review.user.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span className="rating__stars__value" style={calcRating(review.rating)}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.text}
          </p>
          <time className="reviews__time" dateTime={formatterData(review.timestamp, `YearMonthDay`)}>
            {formatterData(review.timestamp, `DayMonth`)}
          </time>
        </div>
      </li>
    );
  }
}

ReviewsItem.propTypes = {
  review: reviewsItem
};

export default ReviewsItem;
