import {createSelector} from "reselect";

const selectAllFavorites = (state) => state;

const cities = {
  Cologne: [],
  Brussels: [],
  Amsterdam: [],
  Hamburg: [],
  Dusseldorf: [],
  Paris: [],
};
export const selectFavorites = createSelector(
    selectAllFavorites,
    (state) => {
      state.forEach((element) => {
        if (cities[element.city.name]) {
          cities[element.city.name].push(element);
        }
      });
      return cities;
    }
);
