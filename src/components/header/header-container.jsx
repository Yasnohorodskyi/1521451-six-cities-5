import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { AuthorizationStatus } from '../../store/const';
import { connect } from "react-redux";
//import {connect} from "react-redux";
//import ReviewList from "./components/reviews-list.jsx";
//import {reviewsItem} from '../../shapes/reviews-item';
//import {selectOfferReviews} from '../../store/selectors/reviews/select-offer-reviews';
//import {getReviews} from '../../store/actions/reviews/reviews';
import {
  Link
} from "react-router-dom";

class HeaderContainer extends PureComponent {
  constructor(props) {
    super(props);
  }
  authHeader(user) {
    return (
      <div className="header__nav-link header__nav-link--profile">
        <img className="header__avatar-wrapper" src={user.data.avatar_url} />
        <span className="header__user-name user__name">
          <Link to='/favorites'> {user.data.email} </Link>
        </span>
      </div>
    )
  }
  notAuthHeader() {
    return (
      <div className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">
          <Link to='/login'> Sign In </Link>
        </span>
      </div>
    )
  }
  render() {
    const {user} = this.props;

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
                { (user.authorizationStatus === AuthorizationStatus.NO_AUTH)  ? this.notAuthHeader() : this.authHeader(user)}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
/*




ReviewContainer.propTypes = {
  reviews: PropTypes.arrayOf(
      reviewsItem
  ),
  currentOffer: PropTypes.number
};

const mapDispatchToProps = (dispatch) => ({
  getReviews(id) {
    dispatch(getReviews(id));
  }
});


*/

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.User
  };
};

export { HeaderContainer };
export default connect(mapStateToProps)(HeaderContainer);
