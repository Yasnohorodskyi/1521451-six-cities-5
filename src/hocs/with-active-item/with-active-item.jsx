import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {currentCityShape} from '../../shapes/current-city';

const withActiveItem = (ComponentOutside) => {
  function WithActiveItem(props) {
    let [activeItem] = useState(`--active`);

    return <ComponentOutside
      {...props}
      activeItem={activeItem}
    />;
  }

  WithActiveItem.propTypes = {
    currentCity: currentCityShape,
    baseFilter: PropTypes.string,
  };

  return WithActiveItem;
};

export default withActiveItem;
