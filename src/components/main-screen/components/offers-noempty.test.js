import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import OffersNoempty from "./offers-noempty";
import {offers, cities} from "../../../mocks-for-tests/mocks";

it(`OffersNoempty is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <OffersNoempty
        offers={offers}
        currentCity={cities[`Brussels`]}
      />
  );
  expect(tree).toMatchSnapshot();
});
