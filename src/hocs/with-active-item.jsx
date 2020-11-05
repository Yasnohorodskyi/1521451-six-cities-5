import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

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
    currentCity: PropTypes.string,
    baseFilter: PropTypes.string,
  };

  return WithActiveItem;
};


export default withActiveItem;
