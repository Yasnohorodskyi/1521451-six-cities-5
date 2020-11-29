import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {Footer} from "./footer-container";

it(`Footer is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Footer/>
  );
  expect(tree).toMatchSnapshot();
});
