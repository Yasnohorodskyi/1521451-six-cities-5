import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Favorites from '../favorites/favorites.jsx';
import Room from '../room/room.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = (props) => {
  const {rentCount} = props;

  return (
    <Router>
      <Switch>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path='/offer/:id' component={Room}>
          </Route>
          <Route exact path="/">
            <Main rentCount={rentCount} />
          </Route>
        </Switch>
    </Router>
  );
};

App.propTypes = {
  rentCount: PropTypes.number.isRequired,
};

export default App;
