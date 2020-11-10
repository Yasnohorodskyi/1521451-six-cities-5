import onClickOutside from "react-onclickoutside";
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {offerItem} from '../shapes/offer-item';
import {actionFilter} from '../store/reducers/offers/offers';


const withOpenSelect = (ComponentOutside) => {

  class WithOpenSelect extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        select: ``,
        optionList: actionFilter
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
      const onClick = this.onClick;
      return (
        <ComponentOutside
          {...this.props}
          select={select}
          optionList={actionFilter}
          click={onClick}
        />
      );
    }
  }

  WithOpenSelect.propTypes = {
    currentCity: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
      name: PropTypes.string
    }),
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
    offers: PropTypes.arrayOf(
        PropTypes.shape({
          offerItem
        })
    ),
  };

  return onClickOutside(WithOpenSelect);
};

export default withOpenSelect;
