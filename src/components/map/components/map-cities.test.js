
import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import {MapCities} from "./map-cities";
import {cities, offers} from "../../../mocks-for-tests/mocks";

describe(`Render MapCities`, () => {

  it(`Render MapCities`, () => {

    const mockStore = configureStore([]);
    let MapCitiesTest = null;
    let store = null;

    beforeEach(() => {
      store = mockStore({
        offers,
        currentCity: cities[`Cologne`]
      });

      store.dispatch = jest.fn();

      MapCitiesTest = renderer
        .create(
            <Provider store={store}>
              <MapCities />
            </Provider>
        )
        .toJSON();

      expect(MapCitiesTest).toMatchSnapshot();
    });

  });
});
