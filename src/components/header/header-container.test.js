
import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {
  BrowserRouter
} from 'react-router-dom';

import {mockStore} from "../../mocks-for-tests/store";
import HeaderContainer from "./header-container";


describe(`Should HeaderContainer render correctly`, () => {


  let headerScreenComponent = null;

  beforeEach(() => {

    mockStore.dispatch = jest.fn();

    headerScreenComponent = renderer.create(
        <BrowserRouter>
          <Provider store={mockStore}>
            <HeaderContainer/>
          </Provider>
        </BrowserRouter>
    );
  });

  it(`Should headerScreenComponent connected to store render correctly`, () => {
    expect(headerScreenComponent.toJSON()).toMatchSnapshot();
  });

});
