import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Favorites from '../favorites/favorites.jsx';
import Room from '../room/room.jsx';
import {offerItem} from '../../shapes/offer-item';
import {reviewsItem} from '../../shapes/reviews-item';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = (props) => {
  const {rentCount, offers, reviews} = props;

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/login"
          render={() => {
            return <SignIn />;
          }}
        />
        <Route exact
          path="/favorites"
          render={() => {
            return <Favorites />;
          }}
        />
        <Route
          exact
          path='/offer/:id'
          render={(prop) => {
            return (<Room
              offers={offers}
              rentCount={rentCount}
              reviews={reviews}
              history={prop.history}
              match={prop.match}
            />);
          }}
        />
        <Route
          exact
          path="/"
          render={() => {
            return (<Main
              offers={offers}
              rentCount={rentCount}
            />);
          }}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  rentCount: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        reviewsItem
      })
  ),
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  history: PropTypes.object,
  match: PropTypes.object
};

export default App;
