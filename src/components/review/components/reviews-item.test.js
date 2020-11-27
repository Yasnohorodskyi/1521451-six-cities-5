import React from "react";
import renderer from "react-test-renderer";

import ReviewsItem from "./reviews-item";
import {Reviews} from "../../../mocks-for-tests/mocks";

describe(`Render ReviewsItem`, () => {

  it(`Render ReviewsItem`, () => {
    const ReviewsItemTest = renderer.create(
        <ReviewsItem review={Reviews[0]}/>
    ).toJSON();
    expect(ReviewsItemTest).toMatchSnapshot();
  });

});
