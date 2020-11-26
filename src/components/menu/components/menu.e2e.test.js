import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Menu} from "./menu";
import {cities} from "../../../mocks-for-tests/mocks";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Menu click link`, () => {

      beforeEach(() => {
        const handleChangeCityButton = jest.fn();
        const wrapper = shallow(
          <Menu
              changeCity={handleChangeCityButton}
              cities={cities}
              currentCity={cities['Cologne']}
            />
          ).toJSON();

          wrapper.find('a').simulate('click');
          expect(handleChangeCityButton).toHaveBeenCalledTimes(1);
      });
});
