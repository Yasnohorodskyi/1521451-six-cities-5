import PropTypes from 'prop-types';
import {reviewUser} from './review-user';

const reviewsItem = PropTypes.shape({
  id: PropTypes.string,
  offers: PropTypes.number,
  rating: PropTypes.number,
  text: PropTypes.string,
  user: reviewUser,
});

export {reviewsItem};
