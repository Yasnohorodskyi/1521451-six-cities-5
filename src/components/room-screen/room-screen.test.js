import ShallowRenderer from "react-test-renderer/shallow";
import React from "react";

import {RoomScreen} from "./room-screen";
import {offers} from "../../mocks-for-tests/mocks";

import {mockStore} from "../../mocks-for-tests/store";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {
  MemoryRouter
} from 'react-router-dom';


/*
it(`RoomScreen is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <RoomScreen offer={offers[0]} />
  );
  expect(tree).toMatchSnapshot();
});
*/

describe(`Render connected to store component`, () => {


let headerScreenComponent = null;

  beforeEach(() => {

    mockStore.dispatch = jest.fn();


    headerScreenComponent = renderer.create(
        <MemoryRouter>
          <Provider store={mockStore}>
            <RoomScreen offer={offers[0]} offers={offers}/>
          </Provider>
        </MemoryRouter>
    );
  });

  it(`Should Favorites is rendered correctly `, () => {
    expect(headerScreenComponent.toJSON()).toMatchSnapshot();
  });

});
