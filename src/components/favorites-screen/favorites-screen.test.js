import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";


import {FavoritesScreen} from "./favorites-screen";

import {offers} from "../../mocks-for-tests/mocks";


describe(`Favorites tests`, () => {
  it(`Render FavoritesScreen`, () => {
   const mockStore = configureStore([]);
  let store = null;
  let winScreenComponent = null;

  beforeEach(() => {

    store = mockStore({
      user: {
        data: userData,
        authorizationStatus: `AUTH`
      }
    });

    store.dispatch = jest.fn();

    winScreenComponent = renderer.create(
        <Provider store={store}>
          <FavoritesScreen favorites={offers}/>
        </Provider>
      )
  });
  expect(winScreenComponent).toMatchSnapshot();
})
})
