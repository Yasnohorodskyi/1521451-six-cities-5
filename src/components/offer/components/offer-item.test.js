
import React from "react";
import renderer from "react-test-renderer";

import OfferItem from "./offer-item";
import {offers} from "../../../mocks-for-tests/mocks";

describe(`Render OfferItem`, () => {

  it(`Render OfferItem`, () => {
    const OffersItemTest = renderer.create(
        <OfferItem offer={offers[0]} />
    ).toJSON();

    expect(OffersItemTest).toMatchSnapshot();

  });

});
