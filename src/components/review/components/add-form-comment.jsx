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
      ratingField,
      textField,
      refText,
      refRating
    } = this.props;

    return (
      <form disabled onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {titleInputs.map((item, index) => (
            <React.Fragment key={item}>
              {inputRating(index, item, titleInputs, refRating, handleChange)}
            </React.Fragment>
          ))}
        </div>
        <textarea ref={refText} data-type="comment" onInput={(e) => handleChange(e)} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
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
            disabled={!(ratingField && textField)}
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
  refText: PropTypes.object,
  refRating: PropTypes.object,
};

export default AddFormComment;
