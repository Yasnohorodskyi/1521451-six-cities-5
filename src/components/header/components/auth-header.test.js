import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import AuthHeader from "./auth-header";
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
