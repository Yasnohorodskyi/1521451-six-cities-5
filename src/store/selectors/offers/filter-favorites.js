import { array } from "prop-types";
import {createSelector} from "reselect";

const selectAllFavorites = (state) => state;

const cities = {
  Cologne: new Array(),
  Brussels: new Array(),
  Amsterdam: new Array(),
  Hamburg: new Array(),
  Dusseldorf: new Array(),
  Paris: new Array(),
}
export const selectFavorites = createSelector(
    selectAllFavorites,
    (state) => {
      state.forEach(element => {
        if(cities[element.city.name])
          cities[element.city.name].push(element)
      });
      return cities;
    }
);
