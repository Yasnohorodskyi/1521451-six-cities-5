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
//import Room from '../room/room.jsx';
//import {offerItem} from '../../shapes/offer-item';
//import {reviewsItem} from '../../shapes/reviews-item';
//import {ListCities} from '../list-cities/list-cities';






const App = (props) => {
  

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
            return ('offer')(/*<Room
              id={match.params.id}
              reviews={reviews}
            />);
          }}
        />*/)}} />
        <Route
          path="/:city?"
          render={({match}) => {
            return (
              <MainScreen/>
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

const mapStateToProps = (state) => ({
  currentCity : state.currentCity,
  offers: state.offers,
  cities: state.cities,
  reviews: state.reviews
});

const mapDispatchToProps = (dispatch) => ({
  changeCityStore(titleCity, cb) {
    dispatch(ActionCreator.changeCity(titleCity, cb));
  },
});

export  {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

