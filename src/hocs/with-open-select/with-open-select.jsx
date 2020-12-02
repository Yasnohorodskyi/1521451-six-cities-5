import onClickOutside from "react-onclickoutside";
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {offerItem} from '../../shapes/offer-item';
import {ActionFilter} from '../../store/const';
import {currentCityShape} from '../../shapes/current-city';

const withOpenSelect = (ComponentOutside) => {
  class WithOpenSelect extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        select: ``,
        optionList: ActionFilter
      };

      this.filterOpen = this.filterOpen.bind(this);
      this.filterChange = this.filterChange.bind(this);
      this.handleChangeFilter = this.handleChangeFilter.bind(this);
    }
    handleChangeFilter(event) {

      switch (event.target.dataset.action) {
        case `open`:
          this.filterOpen();
          break;
        case `change`:
          this.filterChange(event);
          break;
      }
    }
    filterChange(event) {
      const {
        offers,
        filterOffer,
        currentCity
      } = this.props;

      filterOffer(
          event.target.innerText,
          offers,
          currentCity
      );
      this.filterClose();
    }
    handleClickOutside() {
      this.filterClose();
    }
    filterClose() {
      this.setState({
        select: ``
      });
    }
    filterOpen() {

      this.setState({
        select: `--opened`
      });
    }
    render() {
      const {select} = this.state;
      const handleChangeFilter = this.handleChangeFilter;
      return (
        <ComponentOutside
          {...this.props}
          select={select}
          optionList={ActionFilter}
          handleChangeFilter={handleChangeFilter}
        />
      );
    }
  }

  WithOpenSelect.propTypes = {
    currentCity: currentCityShape,
    filterOffer: PropTypes.func,
    baseFilter: PropTypes.string,
    currentOffers: PropTypes.arrayOf(
        PropTypes.shape({
          offerItem
        })
    ),
    optionList: PropTypes.arrayOf(
        PropTypes.string
    ),
    handleChangeFilter: PropTypes.func,
    select: PropTypes.string,
    offers: PropTypes.arrayOf(
        PropTypes.shape({
          offerItem
        })
    ),
  };

  return onClickOutside(WithOpenSelect);
};

export default withOpenSelect;
