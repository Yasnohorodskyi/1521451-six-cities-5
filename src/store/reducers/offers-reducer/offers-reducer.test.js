import MockAdapter from "axios-mock-adapter";

import {offersReducer} from "./offers-reducer";
import {extend} from "../../../helpers/extend";
import {fetchOffers} from "../../actions/offers/offers";
import {offers, cities, user} from "../../../mocks-for-tests/mocks";
import {APIRoute, OffersType} from "../../const";
import {createAPI} from "../../../services/api";

const api = createAPI(() => { });

const initialState = {
  currentCity: null,
  baseFilter: `Popular`,
  offers: [],
  offer: null,
  nearby: [],
  favorites: null,
  listCities: [],
};


describe(`Offer reducers`, () => {

  it(`Initial state`, () => {
    expect(offersReducer(void 0, {})).toEqual(initialState);
  });


    it(`GET OFFERS`, () => {
      expect(offersReducer({}, {
        type: OffersType.GET_OFFERS,
        payload: offers
      })).toEqual({
        data: offers
      });
    });

/*
    it(`GET OFFER`, () => {
      const offer = offers[0];
      expect(Offers({
        nearby: [],
        offer: null,
      }, {
        type: OffersType.GET_OFFER,
        payload: {
          offer
        },
      })).toEqual({
        nearby: offers,
        offer: extend(offer, {
          isFavorite: offer.is_favorite
        }),
      });
    });
  */
  it(`GET favorites`, () => {
    expect(offersReducer({
      favorites: [],
    }, {
      type: OffersType.GET_FAVORITE,
      payload: {
        favorites: offers
      }
    })).toEqual({
      favorites: offers
    });
  });

  it(`SET favorite`, () => {
    const offer = offers[0];
    expect(offersReducer({
      offer,
    }, {
      type: OffersType.SET_FAVORITE,
      payload: {
        offer: extend(offer, {
          isFavorite: 1
        })
      }
    })).toEqual({
      offer
    });
  });

  it(`CHANGE_CITY`, () => {
    const currentCity = cities[`Hamburg`];
    expect(offersReducer({offers}, {
      type: OffersType.CHANGE_CITY,
      payload: {
        currentCity
      }
    })).toEqual({
      currentCity,
      offers
    });
  });

});


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
