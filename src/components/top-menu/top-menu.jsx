import React from 'react';
import {
  Link
} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const TopMenu = ({cities, currentCity, changeCity}) => {
  console.log(currentCity);
  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) => (
                <li key={city.id} className="locations__item">
                  <Link onClick={
                    () => changeCity(city.title)
                  }
                  className={`locations__item-link tabs__item${(city.title == currentCity) ? `--active`: `` }`}
                  to={city.link}
                  >
                    <span>{city.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  getOffers() {
    dispatch(ActionCreator.getOffers());
  },
  changeCity(titleCity) {
    dispatch(ActionCreator.changeCity(titleCity));
  },
});

export {TopMenu};
export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);

