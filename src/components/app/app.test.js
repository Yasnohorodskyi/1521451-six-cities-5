import React from "react";

import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import App from "./app";




it(`Should replay button be pressed`, () => {

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
