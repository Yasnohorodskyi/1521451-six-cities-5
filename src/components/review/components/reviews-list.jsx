import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import ReviewsItem from "./reviews-item.jsx";
import AddFormComment from "./add-form-comment.jsx";
import {reviewsItem} from '../../../shapes/reviews-item';
import {AuthorizationStatus} from '../../../store/const';
import {appUser} from '../../../shapes/app-user';
import withValidationForm from '../../../hocs/with-validation-form';

const AddFormCommentWithValidation = withValidationForm(AddFormComment);

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {reviews, user, addReviews, currentOffer, uppReviews, maxReviews} = this.props;

    return (
      <React.Fragment>
        <h2 className="reviews__title">
          Reviews &middot;
          <span className="reviews__amount">
            {reviews.length}
          </span>
        </h2>
        <ul className="reviews__list">
          {reviews.map((review, index) => {
            return index < maxReviews && (<ReviewsItem key={review.id} review={review} />);
          })}
        </ul>
        { (user.authorizationStatus !== AuthorizationStatus.NO_AUTH) && <AddFormCommentWithValidation uppReviews={uppReviews} currentOffer={currentOffer} addReviews={addReviews}/> }
      </React.Fragment>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      reviewsItem
  ),
  currentOffer: PropTypes.number,
  user: appUser,
  addReviews: PropTypes.func,
  uppReviews: PropTypes.func,
  maxReviews: PropTypes.number,
};

export default ReviewsList;
