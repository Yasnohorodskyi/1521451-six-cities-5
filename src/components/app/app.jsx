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
  const {rentCount, offers, reviews} = props;
  
  return (
    <Router>
      <Switch>
          <Route
                exact
                path="/login"
                render={()=>{
                  return <SignIn />
                }}
          />
          <Route exact
                 path="/favorites"
                 render={()=>{
                  return <Favorites />
                }}
          />
          <Route
            exact
            path='/offer/:id'
            render={(props)=>{
              return <Room
                        offers={offers}
                        rentCount={rentCount}
                        reviews={reviews}
                        history={props.history}
                        match={props.match}
                      />
            }}
          />
          <Route
            exact
            path="/"
            render={()=>{
              return <Main
                        offers={offers}
                        rentCount={rentCount}
                      />
            }}
          />
        </Switch>
    </Router>
  );
};

App.propTypes = {
  rentCount: PropTypes.number.isRequired,
};

export default App;
