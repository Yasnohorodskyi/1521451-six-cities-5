import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import MapContainer from "../map-container";

import {offers, currentCity} from "./mocks";

describe(`Render MapContainer`, () => {

  it(`Render MapContainer`, () => {

  const mockStore = configureStore([]);
  let store = null;

  beforeEach(() => {

    store = mockStore({
      offers: offers,
      currentCity: currentCity
    });

    store.dispatch = jest.fn();

    const mapComponent = renderer.create(
        <Provider store={store}>
          <MapContainer />
        </Provider>
      ).toJSON();

      expect(mapComponent).toMatchSnapshot();
  });
})
})
