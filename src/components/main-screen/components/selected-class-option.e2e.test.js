import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {SelectedClassOption} from "./selected-class-option";
import {optionList, baseFilter} from "../../../mocks-for-tests/mocks";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`SelectedClassOption click filter`, () => {

      beforeEach(() => {
        const handleChangeFilter = jest.fn();
        const wrapper = shallow(
          <SelectedClassOption
              optionList={optionList}
              baseFilter={baseFilter}
              click={handleChangeFilter}
            />
          ).toJSON();

          wrapper.find('.places__option').simulate('click');
          expect(handleChangeCityButton).toHaveBeenCalledTimes(1);
      });
});
