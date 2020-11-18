import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import ReviewsItem from "./reviews-item.jsx";
import AddFormComment from "./add-form-comment.jsx";
import {reviewsItem} from '../../../shapes/reviews-item';
import {AuthorizationStatus} from '../../../store/const';
import {appUser} from '../../../shapes/app-user';

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {reviews, user, addReviews, currentOffer, uppReviews, maxReviews} = this.props;
    const reviewsRevert = reviews.reverse();
    return (
      <React.Fragment>
        <h2 className="reviews__title">
          Reviews &middot;
          <span className="reviews__amount">
            {reviews.length}
          </span>
        </h2>
        <ul className="reviews__list">
          {reviewsRevert.map((review , index) => {
            if(index < maxReviews){
              return (<ReviewsItem key={review.id} review={review} />)
            }
          })}
        </ul>
        { (user.authorizationStatus !== AuthorizationStatus.NO_AUTH) && <AddFormComment uppReviews={uppReviews} currentOffer={currentOffer} addReviews={addReviews}/> }
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
  uppReviews: PropTypes.func
};

export default ReviewsList;
