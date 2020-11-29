import React from 'react';
import {
  Link,
} from "react-router-dom";
import {appUser} from "../../../shapes/app-user";

const AuthHeader = ({user}) => {
  return (
    <div className="header__nav-link header__nav-link--profile">
      <img className="header__avatar-wrapper" src={user.data.avatarUrl} />
      <span className="header__user-name user__name">
        <Link to='/favorites'> {user.data.email} </Link>
      </span>
    </div>
  );
};

AuthHeader.propTypes = {
  user: appUser
};

export default AuthHeader;
