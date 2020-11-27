import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {RoomScreen} from "./room-screen";
import configureStore from "redux-mock-store";

import {offers} from "../../mocks-for-tests/mocks";

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => { };

it(`Should replay button be pressed`, () => {

  const mockStore = configureStore([]);
  const handleReplayButtonClick = jest.fn();
  let store = null;

  beforeEach(() => {

    store = mockStore({});
    store.dispatch = jest.fn();

    const wrapper = shallow(
        <RoomScreen
          onReplayButtonClick={handleReplayButtonClick}
          setFavoriteDispatch={noop}
          offer={offers[0]}
          offers={offers}
          getOfferDispatch={noop}
        />
    ).toJSON();

    wrapper.find(`button`).simulate(`click`);

  });
});
