import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {
  BrowserRouter
} from "react-router-dom";

import OfferItem from "../components/offer-item";
import OfferList from "../components/offer-list";

import {Offer, Offers} from "./mocks";



describe(`Render Offer`, () => {

  it(`Render OfferItem`, () => {
      const mockStore = configureStore([]);
      let store = null;

      beforeEach(() => {

        store = mockStore({});

        store.dispatch = jest.fn();

        const OfferItemTest = renderer.create(
          <BrowserRouter>
            <Provider store={store}>
              <OfferItem location={null} offer={Offer}/>
            </Provider>
          </BrowserRouter>

          ).toJSON();

        expect(OfferItemTest).toMatchSnapshot();

      });

  })

  it(`Render OfferList`, () => {

    const mockStore = configureStore([]);
      let store = null;

      beforeEach(() => {

        store = mockStore({});

        store.dispatch = jest.fn();

        const OfferListTest = renderer.create(
          <BrowserRouter>
            <Provider store={store}>
              <OfferList offers={Offers}/>
            </Provider>
          </BrowserRouter>
          ).toJSON();

        expect(OfferListTest).toMatchSnapshot();

      });

})

})
