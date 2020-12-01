import React from "react";
import {Provider} from "react-redux";
import {
  MemoryRouter
} from 'react-router-dom';

import {mockStore} from "../../mocks-for-tests/store";
import FavoritesScreen from "./favorites-screen";
import renderer from "react-test-renderer";


describe(`FavoriteScreen`, () => {

  let headerScreenComponent = null;

  beforeEach(() => {

    mockStore.dispatch = jest.fn();

    headerScreenComponent = renderer.create(
        <MemoryRouter>
          <Provider store={mockStore}>
            <FavoritesScreen />
          </Provider>
        </MemoryRouter>
    );
  });

  it(`Should render correctly`, () => {
    expect(headerScreenComponent.toJSON()).toMatchSnapshot();
  });

});
