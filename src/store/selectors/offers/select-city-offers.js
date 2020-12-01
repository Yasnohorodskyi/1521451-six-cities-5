import {createSelector} from "reselect";
import {actionFilter} from "./const";

const selectAllState = (data) => data;

export const selectCityOffers = createSelector(
    selectAllState,
    ({state, props, listCities, currentCity}) => {

      if (listCities && props.cityId) {
        currentCity = listCities[props.cityId];
      } else {
        currentCity = props.cityId ? currentCity : currentCity;
      }

      switch (state.Offers.baseFilter) {
        case actionFilter.FILTER_TOP_RATED_FIRST:
          return state.Offers.data.filter(
              (offer) => (offer.city.name === currentCity[`name`])
          ).sort(
              function (a, b) {
                return b.rating - a.rating;
              }
          );
        case actionFilter.FILTER_PRICE_LOW_TO_HIGH:
          return state.Offers.data.filter(
              (offer) => (offer.city.name === currentCity[`name`])
          ).sort(
              function (a, b) {
                return a.price - b.price;
              }
          );
        case actionFilter.FILTER_PRICE_HIGH_TO_LOW:
          return state.Offers.data.filter(
              (offer) => (offer.city.name === currentCity[`name`])
          ).sort(
              function (a, b) {
                return b.price - a.price;
              }
          );
        default:
          if (currentCity) {
            return state.Offers.data.filter(
                (offer) => (offer.city.name === currentCity[`name`])
            );
          }
      }

      return null;
    });
