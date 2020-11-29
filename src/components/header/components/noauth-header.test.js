
import React from "react";
import renderer from "react-test-renderer";
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import NotAuthHeader from "./noauth-header";

describe(`Render NotAuthHeader`, () => {


  it(`Render NotAuthHeader without store`, () => {

    const NotAuthHeaderTest = renderer.create(
        <Router>
          <NotAuthHeader/>
        </Router>
    ).toJSON();

    expect(NotAuthHeaderTest).toMatchSnapshot();

  });


});
