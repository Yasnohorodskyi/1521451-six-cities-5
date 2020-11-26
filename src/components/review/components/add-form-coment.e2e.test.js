import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";

import AddFormComment from "./add-form-comment";
import {titleInputs} from "../../../mocks-for-tests/mocks";

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => {};

it(`Should replay button be pressed`, () => {

 const mockStore = configureStore([]);
 const handleReplayButtonClick = jest.fn();

      let store = null;

      beforeEach(() => {

        store = mockStore({});

        store.dispatch = jest.fn();

        const wrapper = shallow(
          <AddFormComment
            inputRating={noop}
            titleInputs={titleInputs}
            currentOffer={1}
            addReviews={handleReplayButtonClick}
          />
          ).toJSON();

          wrapper.find('button').simulate('click');
          console.log(wrapper);

      });
});
