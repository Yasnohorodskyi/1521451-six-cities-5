import React from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainScreen from '../main-screen/main-screen';
//import SignIn from '../sign-in/sign-in.jsx';
//import Favorites from '../favorites/favorites.jsx';
import RoomScreen from '../room-screen/room-screen';
//import {offerItem} from '../../shapes/offer-item';
//import {reviewsItem} from '../../shapes/reviews-item';
//import {ListCities} from '../list-cities/list-cities';






const App = () => {


  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/login"
          render={() => {
            return '<SignIn />';
          }}
        />
        <Route exact
          path="/favorites"
          render={() => {
            return '<Favorites />';
          }}
        />
        <Route
          exact
          path='/offer/:id'
          render={({match}) => {
            return (<RoomScreen
              currentRoom={match.params.id}
            />);
          }}
        />
        <Route
          path="/:city?"
          render={({match}) => {
            return (
              <MainScreen param={match.params.city}/>
            );
          }}
        />
      </Switch>
    </Router>
  );
};

/*
App.propTypes = {
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
*/



export  default App;
//export default connect(mapStateToProps, mapDispatchToProps)(App);

