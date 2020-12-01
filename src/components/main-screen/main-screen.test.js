import ShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import {MainScreen} from "./main-screen";
import {offers, baseFilter, cities, user} from "../../mocks-for-tests/mocks";
import {BrowserRouter} from "react-router-dom";

const noop = () => {};

it(`MainScreen`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <BrowserRouter>
        <MainScreen
          offers={offers}
          filterOfferDispatch={noop}
          user={user}
          currentCity={cities[`Brussels`]}
          authorizationStatus={user[`authorizationStatus`]}
          baseFilter={baseFilter}
          cities={cities}
        />
      </BrowserRouter>
  );
  expect(tree).toMatchSnapshot();
});
