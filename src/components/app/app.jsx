import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainScreen from '../main-screen/main-screen';
import RoomScreen from '../room-screen/room-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';

const App = () => {


  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/login"
          render={() => {
            return <SignInScreen />;
          }}
        />
        <Route exact
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


export default App;
