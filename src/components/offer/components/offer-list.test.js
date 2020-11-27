import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {
  BrowserRouter
} from "react-router-dom";

import OfferList from "./offer-list";
import {Offers} from "../../../mocks-for-tests/mocks";

describe(`Render Offer`, () => {

  it(`Render OfferList`, () => {
    const mockStore = configureStore([]);

    let store = null;
    beforeEach(() => {
      store = mockStore({});
      store.dispatch = jest.fn();

      const OfferListTest = renderer.create(
          <BrowserRouter>
            <Provider store={store}>
              <OfferList offers={Offers} />
            </Provider>
          </BrowserRouter>
      ).toJSON();

      expect(OfferListTest).toMatchSnapshot();

    });

  });

});
