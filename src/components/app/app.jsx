import React from 'react';

import {
  Router,
  Switch,
  Route
} from "react-router-dom";

import MainScreen from '../main-screen/main-screen';
import RoomScreen from '../room-screen/room-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';

import browserHistory from "../../browser-history";

import PrivateRoute from "../private-route/private-route";
import { withRouter } from "react-router";

const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact
          path="/login"
          render={(history) => {
            return <SignInScreen />;
          }}
        />
        <PrivateRoute
          exact
          path="/favorites"
          render={() => {
            return <FavoritesScreen />;
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
          render={({match}) => (
              <MainScreen cityId={ match.params.city }/>
            )
          }
        />
      </Switch>
    </Router>
  );
};


export default App;
