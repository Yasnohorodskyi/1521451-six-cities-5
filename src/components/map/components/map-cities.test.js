import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {MapCities} from "./map-cities";
import {offers, cities} from "../../../mocks-for-tests/mocks";

it(`MapCities is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <MapCities
        offers={offers}
        currentCity={cities[`Brussels`]}
      />
  );
  expect(tree).toMatchSnapshot();
});
