import onClickOutside from "react-onclickoutside";
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {offerItem} from '../shapes/offer-item';

const withOpenSelect = (Component) => {
  class WithOpenSelect extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        select: ``,
        optionList: [
          `Popular`,
          `Price: low to high`,
          `Price: high to low`,
          `Top rated first`
        ]
      };

      this.filterOpen = this.filterOpen.bind(this);
      this.filterChange = this.filterChange.bind(this);
      this.onClick = this.onClick.bind(this);
    }
    onClick(event) {
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
        currentOffers,
        filterOffer
      } = this.props;

      filterOffer(
          event.target.innerText,
          currentOffers
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
      const {select, optionList} = this.state;
      const onClick = this.onClick;

      return (
        <Component
          {...this.props}
          select={select}
          optionList={optionList}
          click={onClick}
        />
      );
    }
  }

  WithOpenSelect.propTypes = {
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
    click: PropTypes.func,
    select: PropTypes.string,
  };

  return onClickOutside(WithOpenSelect);
};

export default withOpenSelect;
