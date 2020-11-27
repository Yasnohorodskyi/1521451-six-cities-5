import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AddFormComment extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {

    const {
      titleInputs,
      handleSubmit,
      handleChange,
      inputRating,
      selectedOption,
      textarea
    } = this.props;


    const isBlockedSubmitButton = (selectedOption && textarea.length >= 50 && textarea.length <= 300);

    return (
      <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {titleInputs.map((item, index) => (
            <React.Fragment key={item}>
              {inputRating(index, item, titleInputs, handleChange, selectedOption)}
            </React.Fragment>
          ))}
        </div>
        <textarea
          value={textarea}
          onChange={ (event)=> handleChange(event, `textarea`) }
          className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set
            <span className="reviews__star">
              rating
            </span>
            and describe your stay with at least
            <b className="reviews__text-amount">
              50 characters
            </b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            disabled={!isBlockedSubmitButton}
            type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

AddFormComment.propTypes = {
  addReviews: PropTypes.func,
  currentOffer: PropTypes.number,
  titleInputs: PropTypes.arrayOf(
      PropTypes.string
  ),
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  inputRating: PropTypes.func,
  ratingField: PropTypes.bool,
  textField: PropTypes.bool,
  selectedOption: PropTypes.string,
  textarea: PropTypes.string,
};

export default AddFormComment;
