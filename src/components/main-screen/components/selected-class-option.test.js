import React from "react";
import renderer from "react-test-renderer";

import SelectedClassOption from "./selected-class-option";
import withOpenSelect from '../../../hocs/with-open-select';

const SelectedClassOptionWithClickOutside = withOpenSelect(SelectedClassOption);

it(`Render SelectedClassOption`, () => {
  const tree = renderer
    .create(
        <SelectedClassOptionWithClickOutside />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
