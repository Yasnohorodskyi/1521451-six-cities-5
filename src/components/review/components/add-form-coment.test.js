import React from "react";
import renderer from "react-test-renderer";


import AddFormComment from "./add-form-comment";
import {titleInputs} from "../../../mocks-for-tests/mocks";

const noop = () => {}

describe(`Render AddFormComment`, () => {

  it(`Render AddFormComment`, () => {


      const AddFormCommentTest = renderer.create(
        <AddFormComment inputRating={noop} titleInputs={titleInputs} currentOffer={1}/>
        ).toJSON();

      expect(AddFormCommentTest).toMatchSnapshot();


  })



})
