//import React from "react";
//import ShallowRenderer from "react-test-renderer/shallow";
//import AuthHeader from "./auth-header";

/*
import {user} from "../../../mocks-for-tests/mocks";

const UserData = {
  data: user.data,
  authorizationStatus: user.authorizationStatus
};
it(`Favorites is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <AuthHeader user={UserData}/>
  );
  expect(tree).toMatchSnapshot();
});
*/

import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {
  BrowserRouter
} from 'react-router-dom';

import {mockStore} from "../../../mocks-for-tests/store";

import {user} from "../../../mocks-for-tests/mocks";
import AuthHeader from "./auth-header";


  //let authHeaderRenderer = null;

    /*
    beforeEach(() => {
      mockStore.dispatch = jest.fn();

      authHeaderRenderer = renderer
      .create(
         <AuthHeader user={mockStore.user}/>

      );
      });
    */

  it(`Should authHeaderRenderer connected to store render correctly`, () => {
    expect(
      renderer
      .create(
        <BrowserRouter>
          <AuthHeader user={user}/>
        </BrowserRouter>
      ).toJSON()).toMatchSnapshot();
  });

