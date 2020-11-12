import {createSelector} from "reselect";
import {actionFilter} from "./const";

const selectAllState = (state) => state.Offers;

export const selectCityOffers = createSelector(
    selectAllState,
    (state) => {
      switch (state.baseFilter) {
        case actionFilter.FILTER_TOP_RATED_FIRST:
          return state.data.filter(
              (offer) => (offer.city.name === state.currentCity[`name`])
          ).sort(
              function (a, b) {
                return b.rating - a.rating;
              }
          );
        case actionFilter.FILTER_PRICE_LOW_TO_HIGH:
          return state.data.filter(
              (offer) => (offer.city.name === state.currentCity[`name`])
          ).sort(
              function (a, b) {
                return a.price - b.price;
              }
          );
        case actionFilter.FILTER_PRICE_HIGH_TO_LOW:
          return state.data.filter(
              (offer) => (offer.city.name === state.currentCity[`name`])
          ).sort(
              function (a, b) {
                return b.price - a.price;
              }
          );
        default:
          if (state.currentCity) {
            return state.data.filter(
                (offer) => (offer.city.name === state.currentCity[`name`])
            );
          }
      }
      return null;
    });
