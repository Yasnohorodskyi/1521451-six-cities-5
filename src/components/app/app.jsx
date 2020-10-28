import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Favorites from '../favorites/favorites.jsx';
import Room from '../room/room.jsx';
import {offerItem} from '../../shapes/offer-item';
import {reviewsItem} from '../../shapes/reviews-item';
import {ListCities} from '../list-cities/list-cities';

import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



const App = (props) => {
  const {offers, reviews, changeCityStore} = props;

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
              reviews={reviews}
              history={prop.history}
              match={prop.match}
            />);
          }}
        />
        <Route
          path="/:city?"
          render={(prop) => {

            let currentCity = (prop.match.params.city) ? prop.match.params.city : 'Amserdam';

            return (
              <Main
              currentCity={currentCity}
              offers={prop.offers}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
};

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


const mapStateToProps = (state) => ({
  currentCity: state.town,
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  getOffers() {
    dispatch(ActionCreator.getOffers());
  },
  changeCityStore(titleCity, cb) {
    dispatch(ActionCreator.changeCity(titleCity, cb));
  },
});

export  {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

