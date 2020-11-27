import React from "react";
import OffersEmpty from "./offers-empty";
import renderer from "react-test-renderer";

it(`Tests OffersEmpty`, () => {

  const tree = renderer
    .create(
        <OffersEmpty />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();

});
