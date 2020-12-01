import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AddFormComment from "./add-form-comment";
import {titleInputs} from "../../../mocks-for-tests/mocks";

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => { };

it(`Add forn comment click`, () => {

  const handleReplayButtonClick = jest.fn();
  beforeEach(() => {

    const handlePlayButtonClick = jest.fn();
    const wrapper = shallow(
        <AddFormComment
          inputRating={noop}
          titleInputs={titleInputs}
          currentOffer={1}
          addReviews={handleReplayButtonClick}
        />
    ).toJSON();

    wrapper.find(`button`).simulate(`click`);
    expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);

  });
});
