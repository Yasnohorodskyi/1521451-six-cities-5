
import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {MainScreen} from "./main-screen";
import {offers, user, baseFilter, cities} from "../../mocks-for-tests/mocks";

it(`MainScreen is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <MainScreen
        offers={offers}
        authorizationStatus={user.authorizationStatus}
        cities={cities}
        currentCity={cities[`Cologne`]}
        baseFilter={baseFilter}
        user={user}
      />
  );
  expect(tree).toMatchSnapshot();
});
