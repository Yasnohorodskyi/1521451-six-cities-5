import React from 'react';
import Filter from './components/filter';
import MenuScreen from '../menu/menu-screen.jsx';
import MapScreen from '../map/map-screen.jsx';

const MainScreen = () => {

  return (
    <div>
      <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-linkheader__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <MenuScreen />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <Filter />
              <div className="cities__places-list places__list tabs__content">

              </div>
            </section>
            <div className="cities__right-section">
              <MapScreen />
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default MainScreen;
