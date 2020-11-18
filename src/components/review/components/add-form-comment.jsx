import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AddFormComment extends PureComponent {
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
      //let comment = new FormData(event.currentTarget).get(`review`);

      addReviews(
          this.refText.current.value,
          this.refRating.current.value,
          currentOffer
      );

    };
    this.handleChange = (event) => {
      this.state.rating = this.validateRating(event.currentTarget.value);
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

    }

  }
  validateText(text){
    if(text.length >= 50 && text.length <= 300){
      this.setState({
        textField: true
      })
    }else{
      this.setState({
        textField: false
      })
    }
  }
  validateRating(rating){
    return (rating) ?
      this.setState({
        ratingField: true
      })
     : this.setState({
      ratingField: false
    })
  }
  inputRating(number, title) {
    let index = this.state.titleInputs.length - number;
    return (
      <React.Fragment>
        <input ref={this.refRating} className="form__rating-input visually-hidden" data-type="rating" name="rating" value={index} id={`${index}-stars`} type="radio" onChange={this.handleChange} />
        <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </React.Fragment>
    );
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {this.state.titleInputs.map((item, index) => (
            <React.Fragment key={item}>
              {this.inputRating(index, item)}
            </React.Fragment>
          ))}
        </div>
        <textarea ref={this.refText} data-type="comment" onInput={(e) => this.handleChange(e)} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
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
            disabled={!(this.state.ratingField && this.state.textField)}
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
};

export default AddFormComment;
