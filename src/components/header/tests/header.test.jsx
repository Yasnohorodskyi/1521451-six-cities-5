import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import HeaderContainer from "../header-container";
import {authHeader} from "../components/auth-header";
import {notAuthHeader} from "../components/noauth-header";;

import {userData} from "./mocks";


describe(`Render Header`, () => {

  it(`Render authHeader`, () => {
    const mockStore = configureStore([]);
    let authHeaderRenderer = null;
    let store = null;

    beforeEach(() => {
      store = mockStore({
        user: {
          data: userData,
          authorizationStatus: `AUTH`
        }
      });

      store.dispatch = jest.fn();

      authHeaderRenderer = renderer
      .create(
        <Provider store={store}>
          <authHeader />
        </Provider>
      )
      .toJSON();
      });

  })


  it(`Render notAuthHeader`, () => {
    const mockStore = configureStore([]);
    let notAuthHeaderRenderer = null;
    let store = null;

    beforeEach(() => {
      store = mockStore({
        user: {
          data: userData,
          authorizationStatus: `AUTH`
        }
      });

      store.dispatch = jest.fn();

      notAuthHeaderRenderer = renderer
      .create(
        <Provider store={store}>
          <notAuthHeader />
        </Provider>
      )
      .toJSON();
      });


  })


})
