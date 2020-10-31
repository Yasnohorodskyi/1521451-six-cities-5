import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import ReviewList from "./components/reviews-list.jsx";

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
}

/*

{this.props.reviews.map((review) => (
            <ReviewsItem key={review.id} review={review} />
          ))}

          <AddFormComment addComment={addComment} />

OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  max: PropTypes.number,
  currentOffer: PropTypes.number
};
*/

const mapStateToProps = (state) => ({
  reviews: state.reviews
});


export {ReviewContainer};
export default connect(mapStateToProps)(ReviewContainer);
