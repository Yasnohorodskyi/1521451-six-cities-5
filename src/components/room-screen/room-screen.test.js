import ShallowRenderer from "react-test-renderer/shallow";
import React from "react";

import {RoomScreen} from "./room-screen";
import {offers} from "../../mocks-for-tests/mocks";


it(`RoomScreen`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <RoomScreen offer={offers[0]} />
  );
  expect(tree).toMatchSnapshot();
});

