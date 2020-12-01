
import React from "react";
import renderer from "react-test-renderer";
import {
  MemoryRouter as Router,
} from 'react-router-dom';

import Menu from "./menu";
import {cities} from "../../../mocks-for-tests/mocks";

describe(`Menu tests`, () => {
  it(`Render Menu`, () => {
    const tree = renderer
      .create(
          <Router>
            <Menu
              currentCity={cities[`Brussels`]}
              cities={cities}
            />
          </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
