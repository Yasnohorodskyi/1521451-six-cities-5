import React from 'react';
import PropTypes from 'prop-types';

const Comments = (props) => {
  const formRef = React.createRef();
  const handleSubmit = (event) =>{
    event.preventDefault();

    const data = {
      id: formRef.current['review'].value,
      offers: props.component.state.room.id,
      user: {
        name: `Пользователь`,
        ava: `https://www.urbanus.ru/storage/public/persons/420/SzrKhYGmIaN1VLMWDbRgkSJT3WPUXKfmsrYWQo5M.png`
      },
      text: formRef.current['review'].value,
      rating: ''
    };

    let listInputs = formRef.current.querySelectorAll('input[type=radio]');
    Object.keys(listInputs).forEach(function(index){
      if(listInputs[index].checked == true){
        data.rating = 5-index;
      }
    })

    props.component.state.reviews.push(data);

    props.component.setState(
      ({
        reviews: props.component.state.reviews ,
        refrash: props.component.state.reviews.length
      })
    )


  }
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

Comments.propTypes = {
    component: PropTypes.shape({
      props: PropTypes.shape({
        offers: PropTypes.array.isRequired,
        rentCount: PropTypes.number.isRequired ,
        reviews: PropTypes.array.isRequired
      })
    })
};

export default Comments;
