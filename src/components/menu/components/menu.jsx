import React from 'react';
import {
  Link
} from "react-router-dom";
import {currentCityShape} from '../../../shapes/current-city';
import PropTypes from 'prop-types';

const Menu = ({cities, activeItem, changeCity, currentCity}) => {
  const createElementMenu = () => {
    const itemsMenu = [];
    for (let city in cities) {
      if (cities.hasOwnProperty(city)) {
        itemsMenu.push(
            <li key={city} className="locations__item">
              <Link onClick={
                () => changeCity(cities[city])
              }
              className={`locations__item-link tabs__item${(city === currentCity.name) ? activeItem : ``}`}
              to={city}
              >
                <span>{city}</span>
              </Link>
            </li>
        );
      }
    }
    return itemsMenu;
  };

  return (
    <ul className="locations__list tabs__list">
      {createElementMenu()}
    </ul>
  );
};


Menu.propTypes = {
  currentCity: currentCityShape,
  changeCity: PropTypes.func,
  activeItem: PropTypes.string,
  cities: currentCityShape
};


export default Menu;
