import React from "react";
import renderer from "react-test-renderer";

import {PremiumTemplate} from "./premium-template";

describe(`PremiumTemplate tests`, () => {
  it(`Render PremiumTemplate`, () => {
    const tree = renderer
      .create(
          <PremiumTemplate />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
