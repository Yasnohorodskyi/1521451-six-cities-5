/*import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {FavoritesScreen} from "./favorites-screen";
import {Users, offers} from "../../mocks-for-tests/mocks";

it(`Favorites is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <FavoritesScreen user={Users} offers={offers} favorites={offers} />
  );
  expect(tree).toMatchSnapshot();
});*/


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
