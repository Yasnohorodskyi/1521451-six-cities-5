import React from 'react';
import {
  Link,
} from "react-router-dom";

const NotAuthHeader = () => {
  return (
    <div className="header__nav-link header__nav-link--profile">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">
        <Link to='/login'> Sign In </Link>
      </span>
    </div>
  );
};

export {NotAuthHeader};
export default NotAuthHeader;
