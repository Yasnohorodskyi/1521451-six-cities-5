import {Offers} from "./offers";
import {
  OffersType,
} from "../../const";

import {offers, cities} from "../../../mocks-for-tests/mocks";

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
