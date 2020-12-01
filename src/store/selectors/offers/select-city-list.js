import {createSelector} from "reselect";

const selectAllCity = (data) => data;
const selectOneCity = (data) => data;

export const selectCityList = createSelector(
    selectAllCity,
    ({state}) => {
      const listCity = {};
      state.Offers.data.map((offer) => offer.city)
        .filter((city) => {
          listCity[city.name] = city;
        });
      return listCity;
    }
);

export const selectFirstCity = createSelector(
    selectOneCity,
    ({state}) => {
      return state.Offers.data[0].city;
    }
);
