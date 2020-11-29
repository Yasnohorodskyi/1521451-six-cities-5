
import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";

import configureStore from "redux-mock-store";

import Menu from "./menu";
import withActiveItem from '../../../hocs/with-active-item';
const MenuWithActiveItem = withActiveItem(Menu);

import {cities} from "../../../mocks-for-tests/mocks";

describe(`Render Menu`, () => {

  const mockStore = configureStore([]);
  let store = null;
  let MenuComponent = null;
  beforeEach(() => {
    store = mockStore({
      activeItem: `--active`,
      cities,
      currentCity: cities[`Cologne`]
    });

    store.dispatch = jest.fn();

    MenuComponent = renderer.create(
        <Provider store={store}>
          <MenuWithActiveItem/>
        </Provider>
    );
  });

  it(`Should MenuComponent connected to store render correctly`, () => {
    expect(MenuComponent.toJSON()).toMatchSnapshot();
  });

});
