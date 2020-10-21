import PropTypes from 'prop-types';
import {reviewUser} from './review-user';

const reviewsProps = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    offers: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.number.isRequired,
    user: PropTypes.shape(reviewUser),
  }),
};

export {reviewsProps};
