import {createSelector} from "reselect";

const selectAllCity = (data) => data;
const selectOneCity = (data) => data;

export const selectCityList = createSelector(
    selectAllCity,
    ({state, props}) => {
      //console.log(state.Offers.data);
      //console.log(props);
      const listCity = {};
      state.Offers.data.map((offer) => offer.city)
        .filter((city) => {
          listCity[city.name] = city;
        });
      return listCity;
      /*
      return state.Offers[`data`].filter(
          (offer) => Number(offer.id) === Number(props.currentRoom) && Number(offer.id) !== props.currentRoom
      );
      */
    }
);

export const selectFirstCity = createSelector(
  selectOneCity,
  ({state, props}) => {
    console.log(state.Offers.data[0].city);
    console.log(props);
    return state.Offers.data[0].city
/*
    const listCity = {};
    state.Offers.data.map((offer) => offer.city)
      .filter((city) => {
        listCity[city.name] = city;
      });
    return listCity;

    return state.Offers[`data`].filter(
        (offer) => Number(offer.id) === Number(props.currentRoom) && Number(offer.id) !== props.currentRoom
    );
    */
  }
);
