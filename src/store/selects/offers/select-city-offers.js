import {createSelector} from "reselect";

const selectAllState = (state) => state.Offers;

export const selectCityOffers = createSelector(
    selectAllState,
    (state) => {
      switch (state.baseFilter) {
        case `Top rated first`:
          return state.data.filter(
              (offer) => (offer.city.name === state.currentCity[`name`])
          ).sort(
              function (a, b) {
                return b.rating - a.rating;
              }
          );
        case `Price: low to high`:
          return state.data.filter(
              (offer) => (offer.city.name === state.currentCity[`name`])
          ).sort(
              function (a, b) {
                return a.price - b.price;
              }
          );
        case `Price: high to low`:
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
