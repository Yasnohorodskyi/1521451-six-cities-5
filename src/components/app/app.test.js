import React from "react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {
  BrowserRouter
} from 'react-router-dom';

import App from "./app";

it(`APP test`, () => {

  const mockStore = configureStore([]);
  let store = null;

  beforeEach(() => {

    store = mockStore({});
    store.dispatch = jest.fn();

    const AppTest = renderer.create(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
    ).toJSON();

    expect(AppTest).toMatchSnapshot();

  });

});
