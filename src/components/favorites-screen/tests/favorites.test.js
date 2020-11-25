import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {FavoritesEmpty} from "../favorites-empty";
import {FavoritesScreen} from "../favorites-screen";

import {testData, userData} from "./mocks";


describe(`Render Favorites`, () => {
  it(`Render FavoritesEmpty`, () => {
    const tree = renderer
      .create(
          <FavoritesEmpty />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
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
          <FavoritesScreen favorites={testData}/>
        </Provider>
      )
  });
  expect(winScreenComponent).toMatchSnapshot();
})
})
