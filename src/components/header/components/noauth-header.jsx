import React from 'react';
import {
  Link,
  Router
} from "react-router-dom";

import browserHistory from "../../../browser-history";

const NotAuthHeader = () => {
  return (
    <div className="header__nav-link header__nav-link--profile">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">
        <Router history={browserHistory}>
          <Link to='/login'> Sign In </Link>
        </Router>
      </span>
    </div>
  );
};

export default NotAuthHeader;
