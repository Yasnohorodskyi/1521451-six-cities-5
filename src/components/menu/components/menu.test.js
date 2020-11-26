
import React from "react";
import renderer from "react-test-renderer";

import Menu from "./menu";
import {cities} from "../../../mocks-for-tests/mocks";

describe(`Render Menu`, () => {

  it(`Render Menu`, () => {
      const MenuTest = renderer.create(
        <Menu
          activeItem={`--active`}
          cities={cities}
          currentCity={cities['Cologne']}
        />
        ).toJSON();

      expect(MenuTest).toMatchSnapshot();

  })


})
