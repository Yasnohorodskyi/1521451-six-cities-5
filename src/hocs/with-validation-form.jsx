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
        rating: 0,
        textField: false,
        ratingField: false
      };

      this.refText = React.createRef();
      this.refRating = React.createRef();

      this.handleSubmit = (event) => {
        const {addReviews, currentOffer} = this.props;

        event.preventDefault();

        this.setState({
          textField: false,
          ratingField: false
        });

        addReviews(
            this.refText.current.value,
            this.refRating.current.value,
            currentOffer,
            () => {
              this.refText.current.value = ``;
              this.refRating.current.value = 0;
            }
        );

      };


      this.handleChange = (event) => {

        switch (event.target.dataset.type) {
          case `comment`:
            this.validateText(
                event.target.value
            );
            break;
          case `rating`:
            this.validateRating(
                event.target.value
            );
            break;
        }
      };
    }
    validateText(text) {
      if (text.length >= 50 && text.length <= 300) {
        this.setState({
          textField: true
        });
      } else {
        this.setState({
          textField: false
        });
      }
    }
    validateRating(rating) {
      return (rating) ?
        this.setState({
          ratingField: true
        })
        : this.setState({
          ratingField: false
        });
    }
    inputRating(number, title, titleInputs, refRating, handleChange) {
      let index = titleInputs.length - number;
      return (
        <React.Fragment>
          <input ref={refRating} className="form__rating-input visually-hidden" data-type="rating" name="rating" value={index} id={`${index}-stars`} type="radio" onChange={handleChange} />
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
        refText={this.refText}
        refRating={this.refRating}
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
