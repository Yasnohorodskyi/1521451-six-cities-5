
import React from "react";
import renderer from "react-test-renderer";

import NoauthHeader from "./noauth-header";

describe(`Render NoauthHeader`, () => {

  it(`Render NoauthHeader`, () => {
    const NoauthHeaderTest = renderer.create(
        <NoauthHeader />
    ).toJSON();

    expect(NoauthHeaderTest).toMatchSnapshot();

  });

});
