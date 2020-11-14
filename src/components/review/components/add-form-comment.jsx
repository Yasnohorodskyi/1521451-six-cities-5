import React, {PureComponent} from 'react';

class AddFormComment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      titleInputs: [`terribly`, `badly`, `not bad`, `good`, `perfect`],
      room: ``,
      reviews: [],
      rating: 0
    };

    this.handleSubmit = (event) => {
      const {addReviews, currentOffer, uppReviews} = this.props;

      event.preventDefault();
      let comment = new FormData(event.currentTarget).get(`review`);

      addReviews(
          comment,
          this.state.rating,
          currentOffer
      );

    };
    this.handleChange = (event) => {
      this.state.rating = event.currentTarget.value;
    };
  }
  inputRating(number, title) {
    let index = this.state.titleInputs.length - number;
    return (
      <React.Fragment>
        <input className="form__rating-input visually-hidden" name="rating" value={index} id={`${index}-stars`} type="radio" onChange={this.handleChange} />
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
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
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
          <button className="reviews__submit form__submit button" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}


export default AddFormComment;
