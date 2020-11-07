import React from 'react';
import {
  Link
} from "react-router-dom";
import {citiesShape} from '../../../shapes/citiesShape';
import PropTypes from 'prop-types';

const Menu = ({currentCity, changeCity, activeItem, sortOffers}) => {

  return (<ul className="locations__list tabs__list">
      {Array.from(sortOffers).map((value) => {
        return(
          <li key={value[0]} className="locations__item">
            <Link onClick={
              () => changeCity(value[0])
            }
            className={`locations__item-link tabs__item${(value[0] === currentCity) ? activeItem : ``}`}
            to={value[0]}
            >
              <span>{value[0]}</span>
            </Link>
          </li>
        )

      })}
    </ul>)
};

Menu.propTypes = {
  currentCity: PropTypes.string,
  changeCity: PropTypes.func,
  activeItem: PropTypes.string,
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        citiesShape
      })
  ),
};

export default Menu;
