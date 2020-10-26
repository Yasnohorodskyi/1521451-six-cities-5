import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const state = {
  rentCount: 101
};

ReactDOM.render(
    <App offers={offers} reviews={reviews} rentCount={state.rentCount} />,
    document.querySelector(`#root`)
);
