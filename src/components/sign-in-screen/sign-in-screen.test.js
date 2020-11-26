import React from "react";

import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import SignInScreen from "./sign-in-screen";
import {cities} from "../../mocks-for-tests/mocks";



it(`Should replay button be pressed`, () => {



  const mockStore = configureStore([]);
  let store = null;

  beforeEach(() => {

    store = mockStore({});

    store.dispatch = jest.fn();

    const SignInScreenTest = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
        <SignInScreen currentCity={cities[0]} error={null}/>
        </Provider>
      </BrowserRouter>
      ).toJSON();

    expect(SignInScreenTest).toMatchSnapshot();

  });


});
