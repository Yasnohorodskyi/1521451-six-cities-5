import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import withValidationForm from "./with-validation-form";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import {mockStore} from "../mocks-for-tests/store";


const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};


const MockComponentWrapped = withValidationForm(MockComponent);

it(`withValidationForm is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Provider store={mockStore}>
        <MockComponentWrapped>
          <React.Fragment />
        </MockComponentWrapped>
      </Provider>
  );

  expect(tree).toMatchSnapshot();
});
