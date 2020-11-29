import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import OfferList from "./offer-list";
import {offers} from "../../../mocks-for-tests/mocks";

it(`Offer is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <OfferList offers={offers} />
  );
  expect(tree).toMatchSnapshot();
});
