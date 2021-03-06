import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import OfferList from "./components/offer-list";
import {offerItem} from '../../shapes/offer-item';
import {currentCityShape} from '../../shapes/current-city';
import {setFavorite} from '../../store/actions/offers/offers';

const OfferContainer = (props) => {
  const {offers, currentCity, authorizationStatus, setFavoriteDispatch} = props;

  return (
    <div className="near-places__list places__list">
      <OfferList
        offers={offers}
        currentCity={currentCity}
        authorizationStatus={authorizationStatus}
        setFavoriteDispatch={setFavoriteDispatch}
      />
    </div>
  );
};

OfferContainer.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
  max: PropTypes.number,
  currentCityRoom: PropTypes.string,
  currentCity: currentCityShape,
  cityId: PropTypes.string,
  currentOffer: PropTypes.number,
  currentRoomCity: PropTypes.string,
  authorizationStatus: PropTypes.string,
  setFavoriteDispatch: PropTypes.func,
  getOffer: PropTypes.func
};
const mapDispatchToProps = (dispatch) => ({
  setFavoriteDispatch(id, currentStatus) {
    dispatch(setFavorite(id, currentStatus));
  }
});
const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.User.authorizationStatus
  };
};

export {OfferContainer};
export default connect(mapStateToProps, mapDispatchToProps)(OfferContainer);
