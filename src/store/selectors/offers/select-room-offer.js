import {createSelector} from "reselect";

const selectAllOffers = (data) => data;

export const selectRoomOffer = createSelector(
    selectAllOffers,
    ({state, props}) => {
      return state.Offers[`data`].filter(
          (offer) => Number(offer.id) === Number(props.currentRoom) && Number(offer.id) !== props.currentRoom
      );
    }
);
