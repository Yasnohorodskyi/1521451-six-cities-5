import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import OffersNoempty from "./offers-noempty";
import {offers, cities} from "../../../mocks-for-tests/mocks";
import {offersAdapter} from "../../../helpers/offers-adapter";

it(`OffersNoempty is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <OffersNoempty
        offers={offersAdapter(offers)}
        currentCity={cities[`Brussels`]}
      />
  );
  expect(tree).toMatchSnapshot();
});
