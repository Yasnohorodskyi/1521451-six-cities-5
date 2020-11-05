import React from 'react';
import PropTypes from 'prop-types';
import {offerItem} from '../../../shapes/offer-item';


const SelectedClassOption = (props) => {
  const {optionList} = props;
  return (
    <form onClick={props.click} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" data-action="open" tabIndex="0">
        {props.baseFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={
        `places__options places__options--custom places__options${props.select ? props.select : ``}`
      }
      >
        {optionList.map((select, index) => {
          return (<li data-action="change"
            key={`option-${index}`}
            className={`places__option ${(props.baseFilter === select) ? `places__option--active` : ``}`}
            tabIndex="0">
            {select}
          </li>);
        })}
      </ul>
      <select defaultValue={`Popular`} className="places__sorting-type" id="places-sorting">
        <option className="places__option" value="popular">Popular</option>
        <option className="places__option" value="to-high">Price: low to high</option>
        <option className="places__option" value="to-low">Price: high to low</option>
        <option className="places__option" value="top-rated">Top rated first</option>
      </select>
    </form>
  );
};


SelectedClassOption.propTypes = {
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

export default SelectedClassOption;
