import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {currentCityShape} from '../shapes/current-city';

const withValidationForm = (ComponentOutside) => {
  class WithValidationForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        titleInputs: [`terribly`, `badly`, `not bad`, `good`, `perfect`],
        room: ``,
        reviews: [],
        selectedOption: ``,
        textarea: ``
      };

      this.handleSubmit = (event) => {
        const {addReviews, currentOffer} = this.props;
        event.preventDefault();
        addReviews(
            this.state.textarea,
            this.state.selectedOption,
            currentOffer
        );
        this.setState({
          selectedOption: ``,
          textarea: ``
        });

      };
      this.handleChange = (field, value) => {
        this.setState({
          [field]: value.currentTarget.value
        });
      };


    }
    inputRating(number, title, titleInputs, handleChange, selectedOption) {
      let index = titleInputs.length - number;
      return (
        <React.Fragment>
          <input
            checked={Number(selectedOption) === Number(index)}
            className="form__rating-input visually-hidden"
            name="rating"
            value={index}
            id={`${index}-stars`}
            type="radio"
            onChange={handleChange.bind(this, `selectedOption`)}
          />
          <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </React.Fragment>
      );
    }

    render() {
      return <ComponentOutside
        {...this.props}
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        inputRating={this.inputRating}
      />;
    }
  }

  WithValidationForm.propTypes = {
    currentCity: currentCityShape,
    baseFilter: PropTypes.string,
    addReviews: PropTypes.func,
    currentOffer: PropTypes.number,
  };

  return WithValidationForm;
};


export default withValidationForm;
