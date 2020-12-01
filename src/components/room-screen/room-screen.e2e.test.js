import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {RoomScreen} from "./room-screen";
import {offers} from "../../mocks-for-tests/mocks";

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => { };

it(`RoomScreen click button`, () => {

  const handleReplayButtonClick = jest.fn();


  beforeEach(() => {
    const handlePlayButtonClick = jest.fn();
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
    expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  });
});
