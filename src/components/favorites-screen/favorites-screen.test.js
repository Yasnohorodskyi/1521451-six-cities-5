import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {FavoritesScreen} from "./favorites-screen";
import {Users, offers} from "../../mocks-for-tests/mocks";

it(`Favorites is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <FavoritesScreen user={Users} offers={offers} favorites={offers} />
  );
  expect(tree).toMatchSnapshot();
});
