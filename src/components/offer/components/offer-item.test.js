
import React from "react";
import renderer from "react-test-renderer";
import {
  BrowserRouter
} from 'react-router-dom';

import OfferItem from "./offer-item";
import {offers} from "../../../mocks-for-tests/mocks";

describe(`Render OfferItem`, () => {

  it(`Render OfferItem`, () => {
    const OffersItemTest = renderer.create(
        <BrowserRouter>
          <OfferItem offer={offers[0]} />
        </BrowserRouter>
    ).toJSON();

    expect(OffersItemTest).toMatchSnapshot();

  });

});
