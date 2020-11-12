import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {currentCityShape} from '../shapes/current-city';

const withActiveItem = (ComponentOutside) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: `--active`,
      };
    }
    render() {
      const {activeItem} = this.state;

      return <ComponentOutside
        {...this.props}
        activeItem={activeItem}
      />;
    }
  }

  WithActiveItem.propTypes = {
    currentCity: currentCityShape,
    baseFilter: PropTypes.string,
  };

  return WithActiveItem;
};


export default withActiveItem;
