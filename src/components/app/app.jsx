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

  const styles = {
    w80:{
      width: '80%'
    },
    w100:{
      width: '100%'
    }
  };

  const CalcRating = (percent) =>{
    return {
      width: percent * 10 * 2 + '%'
    };
  }

  const PremiumTemplate = (className) =>{
    return (
      <div className={className}>
        <span>Premium</span>
      </div>
    )
  }

  const RenderMap = (frame) =>{
    return {__html: frame};
  }

  return (
    <Router>
      <Switch>
          <Route
                exact
                path="/login"
                render={(props)=>{
                  return <SignIn />
                }}
          />
          <Route exact
                 path="/favorites"
                 render={(props)=>{
                  return <Favorites styles={styles}/>
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
                        CalcRating={CalcRating}
                        PremiumTemplate={PremiumTemplate}
                        RenderMap={RenderMap}
                      />
            }}
          />
          <Route
            exact
            path="/"
            render={(props)=>{
              return <Main
                        offers={offers}
                        rentCount={rentCount}
                        CalcRating={CalcRating}
                        PremiumTemplate={PremiumTemplate}
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
