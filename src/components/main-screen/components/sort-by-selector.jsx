import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {offerItem} from '../../../shapes/offer-item';


const enhanceWithClickOutside = require(`react-click-outside`);

class SortBySelector extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      select: ``
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
    return (
      <React.Fragment>
        <form onClick={this.onClick} className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" data-action="open" tabIndex="0">
            {this.props.baseFilter}
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className={`places__options places__options--custom places__options${this.state.select}`}>
            <li data-action="change" className="places__option places__option--active" tabIndex="0">Popular</li>
            <li data-action="change" className="places__option" tabIndex="0">Price: low to high</li>
            <li data-action="change" className="places__option" tabIndex="0">Price: high to low</li>
            <li data-action="change" className="places__option" tabIndex="0">Top rated first</li>
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

SortBySelector.propTypes = {
  filterOffer: PropTypes.func,
  baseFilter: PropTypes.string,
  currentOffers: PropTypes.arrayOf(
      PropTypes.shape({
        offerItem
      })
  ),
};

export default enhanceWithClickOutside(SortBySelector);
