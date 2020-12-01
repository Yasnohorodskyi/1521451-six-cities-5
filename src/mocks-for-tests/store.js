import configureStore from "redux-mock-store";
import {offers, cities, reviews, user, baseFilter} from "./mocks";
import {offersAdapter, offerAdapter} from "../helpers/offers-adapter";

const createStore = configureStore();

const mockStore = createStore({
  Offers: {
    currentCity: cities[`Brussels`],
    baseFilter,
    offers: offersAdapter(offers),
    offer: offerAdapter(offers[0]),
    nearby: offersAdapter(offers),
    favorites: offersAdapter(offers),
    data: offersAdapter(offers),
    getFavoriteDispatch: ()=>{}
  },
  Review: {
    reviews
  },
  User: user,
  Offer: offerAdapter(offers[0])
});

export {mockStore};
