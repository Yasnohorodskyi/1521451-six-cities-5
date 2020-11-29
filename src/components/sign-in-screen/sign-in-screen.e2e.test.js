import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SignInScreen from "./sign-in-screen";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`SignInScreen click`, () => {

  const handleButtonClick = jest.fn();
  beforeEach(() => {

    const wrapper = shallow(
        <SignInScreen
          onSubmit={handleButtonClick}
        />
    ).toJSON();

    wrapper.find(`a`).simulate(`click`);
    expect(handleButtonClick).toHaveBeenCalledTimes(1);

  });
});
