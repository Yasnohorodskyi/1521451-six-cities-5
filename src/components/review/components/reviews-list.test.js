import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";


import ReviewsList from "./reviews-list";


import {Reviews, Users} from "../../../mocks-for-tests/mocks";



describe(`Render ReviewsList`, () => {

  it(`Render ReviewsList`, () => {


      const ReviewsListTest = renderer.create(
        <ReviewsList currentOffer={2} maxReviews={3} reviews={Reviews} user={Users}/>
        ).toJSON();

      expect(ReviewsListTest).toMatchSnapshot();

      
  })



})
