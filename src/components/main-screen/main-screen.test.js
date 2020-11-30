
import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import MainScreen from "./main-screen";
import {offers, user, baseFilter, cities} from "../../mocks-for-tests/mocks";
import {mockStore} from "../../mocks-for-tests/store";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";

/*it(`MainScreen is rendered correctly`, () => {

  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <MainScreen
        offers={offers}
        authorizationStatus={user.authorizationStatus}
        cities={cities}
        currentCity={cities[`Cologne`]}
        baseFilter={baseFilter}
        user={user}
      />
  );
  expect(tree).toMatchSnapshot();


});*/
describe(`Render connected to store component`, () => {

let mainScreenComponent = null;

  beforeEach(() => {

    mockStore.dispatch = jest.fn();

    mainScreenComponent = renderer.create(
          <Provider store={mockStore}>
            <MainScreen
              offers={offers}
              authorizationStatus={user.authorizationStatus}
              cities={cities}
              currentCity={cities[`Cologne`]}
              baseFilter={baseFilter}
              user={user}
            />
          </Provider>
    );
  });

  it(`Should mainScreenComponent is rendered correctly `, () => {
    expect(mainScreenComponent.toJSON()).toMatchSnapshot();
  });

});
