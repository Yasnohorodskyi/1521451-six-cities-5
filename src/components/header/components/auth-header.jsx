import React from 'react';
import {
  Link,
  Router
} from "react-router-dom";
import {appUser} from "../../../shapes/app-user";


import browserHistory from "../../../browser-history";

const AuthHeader = ({user}) => {
  return (
    <div className="header__nav-link header__nav-link--profile">
      <img className="header__avatar-wrapper" src={user.data.avatarUrl} />
      <span className="header__user-name user__name">
        <Router history={browserHistory}>
          <Link to='/favorites'> {user.data.email} </Link>
        </Router>
      </span>
    </div>
  );
};

AuthHeader.propTypes = {
  user: appUser
};

export default AuthHeader;
