import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {offerItem} from '../../../shapes/offer-item';


const enhanceWithClickOutside = require('react-click-outside');

class Filter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      select: ``
    }

    this.filterDOM = React.createRef();
    this.filterToggle = this.filterToggle.bind(this);
    this.filterChange = this.filterChange.bind(this);
  }
  filterChange(event) {
    const {currentOffers} = this.props;
    filterOffer(
        event.target.innerText,
        currentOffers
    );
  }
  handleClickOutside() {
    this.filterToggle();
  }
  filterToggle() {
    (this.state.select == `--opened`) ? this.setState({
      select: ``
    }) : this.setState({
      select: `--opened`
    })
  }
  render() {
    return (
      <React.Fragment>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" onClick={this.filterToggle} tabIndex="0">
            {this.props.baseFilter}
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul ref={this.filterDOM} className={`places__options places__options--custom places__options`+this.state.select}>
            <li onClick={this.filterChange} className="places__option places__option--active" tabIndex="0">Popular</li>
            <li onClick={this.filterChange} className="places__option" tabIndex="0">Price: low to high</li>
            <li onClick={this.filterChange} className="places__option" tabIndex="0">Price: high to low</li>
            <li onClick={this.filterChange} className="places__option" tabIndex="0">Top rated first</li>
          </ul>
          <select defaultValue={`Popular`} className="places__sorting-type" id="places-sorting">
            <option className="places__option" value="popular">Popular</option>
            <option className="places__option" value="to-high">Price: low to high</option>
            <option className="places__option" value="to-low">Price: high to low</option>
            <option className="places__option" value="top-rated">Top rated first</option>
          </select>
        </form>
      </React.Fragment>
    );
  }
}

Filter.propTypes = {
  filterOffer: PropTypes.func,
  baseFilter: PropTypes.string,
  currentOffers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
};

export default enhanceWithClickOutside(Filter);
