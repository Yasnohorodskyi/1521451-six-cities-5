
import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {
  BrowserRouter
} from 'react-router-dom';

import {mockStore} from "../../mocks-for-tests/store";
import MenuContainer from "./menu-container";


describe(`Should HeaderContainer render correctly`, () => {

  let menuScreenComponent = null;

  beforeEach(() => {

    mockStore.dispatch = jest.fn();

    menuScreenComponent = renderer.create(
        <BrowserRouter>
          <Provider store={mockStore}>
            <MenuContainer />
          </Provider>
        </BrowserRouter>
    );
  });

  it(`Should menuScreenComponent connected to store render correctly`, () => {
    expect(menuScreenComponent.toJSON()).toMatchSnapshot();
  });

});
