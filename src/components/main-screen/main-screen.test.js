
import React from "react";
import MainScreen from "./main-screen";
import {mockStore} from "../../mocks-for-tests/store";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";

describe(`mainScreenComponent`, () => {

let mainScreenComponent = null;

  beforeEach(() => {

    mockStore.dispatch = jest.fn();
    mainScreenComponent = renderer.create(
          <Provider store={mockStore}>
            <MainScreen/>
          </Provider>
    );
  });

  it(`Should mainScreenComponent is rendered correctly `, () => {
    expect(mainScreenComponent.toJSON()).toMatchSnapshot();
  });

});
