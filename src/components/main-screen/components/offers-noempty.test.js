import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OffersNoempty from "./offers-noempty";
import configureStore from "redux-mock-store";

import {offers} from "../../../mocks-for-tests/mocks";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Tests OffersNoEmpty`, () => {

 const mockStore = configureStore([]);

      let store = null;
      beforeEach(() => {
        store = mockStore({});
        store.dispatch = jest.fn();

        const wrapper = shallow(
          <OffersNoempty
            offers={offers}
            />
          ).toJSON();
          expect(wrapper).toMatchSnapshot();

      });
});
