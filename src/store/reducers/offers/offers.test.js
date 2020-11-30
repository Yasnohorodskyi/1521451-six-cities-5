import {Offers} from "./offers";


import {offers, cities} from "../../../mocks-for-tests/mocks";

import MockAdapter from "axios-mock-adapter";
import {APIRoute, OffersType} from "../../const";
import {fetchOffers} from "../../actions/offers/offers";

import {createAPI} from "../../../services/api";

const api = createAPI(() => {});


it(`Reducer without additional parameters should return initial state`, () => {
  expect(Offers(void 0, {})).toEqual({
    baseFilter: `Popular`,
    currentCity: null,
    favorites: null,
    nearby: [],
    offer: null,
    offers: []
  });
});






it(`Reducer should update offers by load offers`, () => {
  expect(Offers({
    data: offers,
    listCities: cities,
    baseFilter: ``,
    currentCity: null
  }, {
    type: OffersType.GET_OFFERS,
    payload: [{
      bedrooms: 3,
      city: {name: `Brussels`, location: {latitude: 50.839557, longitude: 4.346697, zoom: 16}},
      description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
      goods: [`Towels`, `Baby seat`, `Laptop friendly workspace`],
      host: {id: `25`, name: `Angelina`, isPro: true, avatarUrl: `img/avatar-angelina.jpg`},
      id: `4`,
      images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`],
      isFavorite: false,
      isPremium: false,
      location: {latitude: 50.839557, longitude: 4.346697, zoom: 16},
      maxAdults: 8,
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      price: 300,
      rating: 4.0,
      title: `Amazing and Extremely Central Flat`,
      type: `apartment`,
    },
    {
      bedrooms: 4,
      city: {name: `Paris`, location: {latitude: 50.839557, longitude: 4.346697, zoom: 16}},
      description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
      goods: [`Towels`, `Baby seat`, `Laptop friendly workspace`],
      host: {id: `25`, name: `Angelina`, isPro: true, avatarUrl: `img/avatar-angelina.jpg`},
      id: `5`,
      images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`],
      isFavorite: false,
      isPremium: false,
      location: {latitude: 50.839557, longitude: 4.346697, zoom: 16},
      maxAdults: 8,
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      price: 301,
      rating: 4.2,
      title: `Amazing and Extremely Central Flat`,
      type: `apartment`,
    }]
  })).toEqual({
    baseFilter: `Popular`,
    currentCity: cities[`Hamburg`],
    data: [{
      bedrooms: 3,
      city: {name: `Brussels`, location: {latitude: 50.839557, longitude: 4.346697, zoom: 16}},
      description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
      goods: [`Towels`, `Baby seat`, `Laptop friendly workspace`],
      host: {id: `25`, name: `Angelina`, isPro: true, avatarUrl: `img/avatar-angelina.jpg`},
      id: `4`,
      images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`],
      isFavorite: false,
      isPremium: false,
      location: {latitude: 50.839557, longitude: 4.346697, zoom: 16},
      maxAdults: 8,
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      price: 300,
      rating: 4.0,
      title: `Amazing and Extremely Central Flat`,
      type: `apartment`,
    },
    {
      bedrooms: 4,
      city: {name: `Paris`, location: {latitude: 50.839557, longitude: 4.346697, zoom: 16}},
      description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
      goods: [`Towels`, `Baby seat`, `Laptop friendly workspace`],
      host: {id: `25`, name: `Angelina`, isPro: true, avatarUrl: `img/avatar-angelina.jpg`},
      id: `5`,
      images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`],
      isFavorite: false,
      isPremium: false,
      location: {latitude: 50.839557, longitude: 4.346697, zoom: 16},
      maxAdults: 8,
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      price: 301,
      rating: 4.2,
      title: `Amazing and Extremely Central Flat`,
      type: `apartment`,
    }],
    listCities: cities,
    currentCity: cities[`Brussels`]
  });
})



describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: OffersType.GET_OFFERS,
          payload: [{fake: true}],
        });
      });
    });
});










/*
it(`Change city`, () => {
  expect(
      new Offers(
          {
            currentCity: cities[`Cologne`]
          },
          {
            type: OffersType.CHANGE_CITY,
            payload: offers
          }
      )).not.toBe(null);
});

it(`Reducer get offers`, () => {
  expect(
      new Offers(
          {},
          {
            type: OffersType.GET_OFFERS,
            payload: offers
          }
      )).not.toBe(null);
});

it(`Reducer get favorites`, () => {
  expect(
      new Offers(
          {},
          {
            type: OffersType.GET_FAVORITES,
            payload: offers
          }
      )).not.toBe(null);
});

it(`Reducer set favorites`, () => {
  expect(
      new Offers(
          {},
          {
            type: OffersType.SET_FAVORITES,
            payload: {
              isFavorite: 1
            }
          }
      )).toEqual({});
});

it(`Reducer get offer with id 1`, () => {
  expect(
      new Offers(
          {},
          {
            type: OffersType.GET_OFFER,
            payload: {
              offer: {
                id: 1
              }
            }
          }
      )).toEqual({
    offer: {
      id: 1
    }
  });
});
*/
