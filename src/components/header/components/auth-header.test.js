import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import AuthHeader from "./auth-header";
import {Users} from "../../../mocks-for-tests/mocks";


describe(`Render Header`, () => {

  it(`Render authHeader`, () => {
    const mockStore = configureStore([]);
    let authHeaderRenderer = null;
    let store = null;

    beforeEach(() => {
      store = mockStore({
        user: {
          data: Users.data,
          authorizationStatus: Users.authorizationStatus
        }
      });

      store.dispatch = jest.fn();

      authHeaderRenderer = renderer
        .create(
            <Provider store={store}>
              <AuthHeader />
            </Provider>
        )
        .toJSON();
    });
    expect(authHeaderRenderer).toMatchSnapshot();
  });

});
