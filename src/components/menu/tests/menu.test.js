import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import Menu from "../components/menu";
import MenuContainer from "../menu-container";

import {cities, currentCity} from "./mocks";

const noop = () => {}
const location = {
  "latitude": 50.938362,
  "longitude": 6.959974,
  "zoom": 13
}
describe(`Render Menu`, () => {

  it(`Render MenuContainer`, () => {
      const mockStore = configureStore([]);
      let store = null;

      beforeEach(() => {

        store = mockStore({});

        store.dispatch = jest.fn();

        const MenuContainerTest = renderer.create(
            <Provider store={store}>
              <MenuContainer location={location} currentCity={currentCity} cities={cities} />
            </Provider>
          ).toJSON();

        expect(MenuContainerTest).toMatchSnapshot();

      });

  })

  it(`Render MenuComponent`, () => {

    const MenuComponent = renderer
      .create(
          <Menu
            location={location}
            cities={cities}
            currentCity={currentCity}
          />
      )
      .toJSON();

    expect(MenuComponent).toMatchSnapshot();

})

})
