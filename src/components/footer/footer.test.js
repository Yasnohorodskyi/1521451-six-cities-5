import React from "react";
import renderer from "react-test-renderer";
import {
  BrowserRouter
} from 'react-router-dom';

import {Footer} from "./footer";

describe(`Render Footer`, () => {

  it(`Render Footer`, () => {
    const FooterItemTest = renderer.create(
        <BrowserRouter>
          <Footer/>
        </BrowserRouter>
    ).toJSON();
    expect(FooterItemTest).toMatchSnapshot();
  });

});
