import {createSelector} from "reselect";

const selectAllComments = (data) => data;

export const selectOfferReviews = createSelector(
    selectAllComments,
    (data) => {
      return data.state[`Rewiew`].reviews.filter(
          (review) => (review.offer === data.props[`currentOffer`])
      );
    }
);
