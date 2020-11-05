import React from 'react';
import PropTypes from 'prop-types';
import {offerItem} from '../../../shapes/offer-item';


const SelectedClassOption = (props) => {
  const {optionList, baseFilter} = props;

  const option = (props, type) => {
    switch(type){
      case `li`:
        return (<li data-action="change"
          key={`option-${props}`}
          className={`places__option ${(baseFilter == props) ? `places__option--active` : ``}`}
          tabIndex="0">
          {props}
        </li>)
       case `option`:
        return (
          <option className="places__option" value="popular">{props}</option>
        )
    }

    }
    const createSelectArray = (object, type) => {
      const array = [];
      for (const property in object) {
          array.push(
            option(object[property], type)
          );
      }
      return array;
    }

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
        {
          createSelectArray(optionList , 'li')
        }
      </ul>
      <select defaultValue={`Popular`} className="places__sorting-type" id="places-sorting">
        {
          createSelectArray(optionList , 'option')
        }
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
