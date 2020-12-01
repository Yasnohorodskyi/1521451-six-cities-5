import {Offers} from "./offers";

import {fetchOffers} from "../../actions/offers/offers";


import {offers, cities} from "../../../mocks-for-tests/mocks";

import MockAdapter from "axios-mock-adapter";
import {APIRoute, OffersType} from "../../const";


import {createAPI} from "../../../services/api";

const api = createAPI(() => {});

const initialState = {
  currentCity: null,
  baseFilter: `Popular`,
  offers: [],
  offer: null,
  nearby: [],
  favorites: null
};


describe(`Offer reducers`, () => {

  it(`Initial state`, () => {
    expect(Offers(void 0, {})).toEqual(initialState);
  });

  it(`GET OFFERS`, () => {
    expect(Offers(
      initialState,
      {
        type: OffersType.GET_OFFERS,
        payload: offers
      }
      )).toEqual({
        data: offers,
        currentCity: cities['Hamburg'],
        listCities: cities,
        baseFilter: 'Popular',
        //favorites: null,
       // nearby: [],
        //offer: null,
       // offers: offers
    })
  })

/*
  it(`GET OFFERS`, () => {
    expect(Offers(initialState, {
      type: OffersType.GET_OFFERS,
      payload: offers,
    })).toEqual({
      data: offers,
      //offers: offers
     baseFilter: 'Popular',
      currentCity: cities['Hamburg'],
      listCities: cities,
      nearby: [],
      offer: null,
      offers: [],
      favorites: null
    });
  });


  it(`GET OFFER`, () => {
    expect(Offers(initialState, {
      type: OffersType.GET_OFFER,
      payload: offers,
    })).toEqual({
      baseFilter: "Popular",
      currentCity: cities['Hamburg'],
      data: offers,
      favorites: null,
      listCities: cities,
      nearby: offers,
      offer: offers[0],
      offers: []
    });
  });

  it(`GET_FAVORITE`, () => {
    expect(Offers(initialState ,{
      type: OffersType.GET_FAVORITE,
      payload: offers,
    })).toEqual({
        favorites: offers
    });
  });

  it(`SET_FAVORITE`, () => {
    expect(Offers(initialState ,{
      type: OffersType.SET_FAVORITE,
      payload: offers,
    })).toEqual({
        favorites: offers
    });
  });

  it(`CHANGE_CITY`, () => {

    const currentCity = cities['Hamburg'];

    expect(Offers(initialState ,{
      type: OffersType.CHANGE_CITY,
      payload: currentCity,
    })).toEqual({
        currentCity
    });
  });
*/

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
