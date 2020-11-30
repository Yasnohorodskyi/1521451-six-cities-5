import configureStore from "redux-mock-store";
import {offers, cities, reviews, user, baseFilter} from "./mocks";

const createStore = configureStore();

const mockStore = createStore({
  Offers: {
    currentCity: cities[`Brussels`],
    baseFilter,
    offers,
    offer: offers[0],
    nearby: offers,
    favorites: offers,
    data: offers,
    getFavoriteDispatch: ()=>{}
  },
  Review: {
    reviews
  },
  User: user,
  offer: offers[0]
});

export {mockStore};
