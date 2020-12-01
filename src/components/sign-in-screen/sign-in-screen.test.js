import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import {SignInScreen} from "./sign-in-screen";
import {cities} from "../../mocks-for-tests/mocks";

it(`SignInScreen is rendered correctly with offers`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <SignInScreen
        currentCity={cities[0]}
        error={null}
      />
  );
  expect(tree).toMatchSnapshot();
});
