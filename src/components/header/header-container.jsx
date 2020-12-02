import React from 'react';
import {connect} from "react-redux";
import {UserType} from '../../store/const';
import {appUser} from "../../shapes/app-user";
import AuthHeader from "./components/auth-header";
import NotAuthHeader from "./components/noauth-header";

const HeaderContainer = (props) => {
  const {user} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-linkheader__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {(user.authorizationStatus === UserType.NO_AUTH) ? <NotAuthHeader /> : <AuthHeader user={user} />}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


HeaderContainer.propTypes = {
  user: appUser
};


const mapStateToProps = (state) => {
  return {
    user: state.User
  };
};

export {HeaderContainer};
export default connect(mapStateToProps)(HeaderContainer);
