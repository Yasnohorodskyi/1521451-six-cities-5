import React , {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Comments from '../comments/comments';

class Room extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      room: '',
      reviews: [],
      refrash: ''
    };
  }
  componentWillMount(){


    for(let room in this.props.offers){
      if(this.props.offers[room].id == this.props.match.params.id){
        this.state.room = this.props.offers[room];
      }
    }
    for(let review in this.props.reviews){
      console.log(review);
      if(this.props.reviews[review].offers == this.props.match.params.id){
        this.state.reviews.push(
          this.props.reviews[review]
        );
      }
    }
    console.log(this.props);
  }
  render() {
    return (
      <div className="page">
       <header className="header">
         <div className="container">
           <div className="header__wrapper">
             <div className="header__left">
               <a className="header__logo-link" href="main.html">
                 <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
               </a>
             </div>
             <nav className="header__nav">
               <ul className="header__nav-list">
                 <li className="header__nav-item user">
                   <a className="header__nav-link header__nav-link--profile" href="#">
                     <div className="header__avatar-wrapper user__avatar-wrapper">
                     </div>
                     <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                   </a>
                 </li>
               </ul>
             </nav>
           </div>
         </div>
       </header>
       <main className="page__main page__main--property">
         <section className="property">
           <div className="property__gallery-container container">
             <div className="property__gallery">
               {this.state.room.gallary.map((picture, index) => (
                 <div key={picture.id} className="property__image-wrapper">
                  <img className="property__image" src={picture.src} alt={picture.alt}/>
                 </div>
               ))}
             </div>
           </div>
           <div className="property__container container">
             <div className="property__wrapper">
               {
                  (this.state.room.premium) ? this.props.PremiumTemplate('property__mark') : ''
               }
               <div className="property__name-wrapper">
                 <h1 className="property__name">
                 {this.state.room.title}
                 </h1>
                 <button className="property__bookmark-button button" type="button">
                   <svg className="property__bookmark-icon" width="31" height="33">
                     <use xlinkHref="#icon-bookmark"></use>
                   </svg>
                   <span className="visually-hidden">To bookmarks</span>
                 </button>
               </div>
               <div className="property__rating rating">
                 <div className="property__stars rating__stars">
                   <span className="rating__stars__value" style={this.props.CalcRating(this.state.room.rating)}></span>
                   <span className="visually-hidden">Rating</span>
                 </div>
                 <span className="property__rating-value rating__value">{this.state.room.rating}</span>
               </div>
               <ul className="property__features">
                 <li className="property__feature property__feature--entire">
                    {this.state.room.propertyFeatures[0].value}
                 </li>
                 <li className="property__feature property__feature--bedrooms">
                  {this.state.room.propertyFeatures[1].value}
                 </li>
                 <li className="property__feature property__feature--adults">
                  {this.state.room.propertyFeatures[2].value}
                 </li>
               </ul>
               <div className="property__price">
                 <b className="property__price-value">{this.state.room.prices[0]}</b>
                 <span className="property__price-text">&nbsp;{this.state.room.prices[1]}</span>
               </div>
               <div className="property__inside">
                 <h2 className="property__inside-title">What&apos;s inside</h2>
                 <ul className="property__inside-list">
                  {Object.keys(this.state.room.insides).map((id, index) => (
                    <li key={id} className="property__inside-item">
                         {this.state.room.insides[id]}
                    </li>
                  ))}
                 </ul>
               </div>
               <div className="property__host">
                 <h2 className="property__host-title">Meet the host</h2>
                 <div className="property__host-user user">
                   <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                     <img className="property__avatar user__avatar" src={this.state.room.meeter.ava} width="74" height="74" alt="Host avatar"/>
                   </div>
                   <span className="property__user-name">
                      {this.state.room.meeter.name}
                   </span>
                 </div>
                 <div className="property__description">
                  {this.state.room.meeter.description.map((text) => (
                    <p className="property__text">
                      {text}
                    </p>
                  ))}
                 </div>
               </div>
               <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{this.state.reviews.length}</span></h2>
                 <ul className="reviews__list">
                   {console.log(this.state.reviews)}
                  {this.state.reviews.map((review) => (
                    <li className="reviews__item">
                     <div className="reviews__user user">
                       <div className="reviews__avatar-wrapper user__avatar-wrapper">
                         <img className="reviews__avatar user__avatar" src={review.user.ava} width="54" height="54" alt="Reviews avatar"/>
                       </div>
                       <span className="reviews__user-name">
                        {review.user.name}
                       </span>
                     </div>
                     <div className="reviews__info">
                       <div className="reviews__rating rating">
                         <div className="reviews__stars rating__stars">
                           <span className="rating__stars__value" style={this.props.CalcRating(review.rating)}></span>
                           <span className="visually-hidden">Rating</span>
                         </div>
                       </div>
                       <p className="reviews__text">
                         {review.text}
                       </p>
                       <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                     </div>
                   </li>
                  ))}
                 </ul>
                 <Comments component={this}/>
               </section>
             </div>
           </div>
           <section
              style={{width: '80%', margin: 'auto'}}
              dangerouslySetInnerHTML={ this.props.RenderMap(this.state.room.map) }
           >
           </section>
          </section>
         <div className="container">
           <section className="near-places places">
             <h2 className="near-places__title">Other places in the neighbourhood</h2>
             <div className="near-places__list places__list">
             { this.props.offers.map((offer) => (
                <article className="near-places__card place-card">
                {
                  (offer.premium) ? this.props.PremiumTemplate('place-card__mark') : ''
                }
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href={'/offer/'+offer.id}>
                    <img className="place-card__image" src={offer.gallary[0].src} width="260" height="200" alt="Place image"/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">{offer.prices[0]}</b>
                      <span className="place-card__price-text">/{offer.prices[1]}</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinhref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span className="rating__stars__value" style={this.props.CalcRating(offer.rating)}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">{offer.title}</a>
                  </h2>
                  <p className="place-card__type">{offer.houseLevel}</p>
                </div>
              </article>
             ))}
             </div>
           </section>
         </div>
       </main>
     </div>
   );
  }
}

Room.propTypes = {
  rentCount: PropTypes.number.isRequired,
};

export default Room;
