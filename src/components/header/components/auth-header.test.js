import React from "react";
import renderer from "react-test-renderer";
import {
  BrowserRouter
} from 'react-router-dom';

import {user} from "../../../mocks-for-tests/mocks";
import AuthHeader from "./auth-header";


it(`Should authHeaderRenderer connected to store render correctly`, () => {
  expect(
      renderer
        .create(
            <BrowserRouter>
              <AuthHeader user={user} />
            </BrowserRouter>
        ).toJSON()).toMatchSnapshot();
});

