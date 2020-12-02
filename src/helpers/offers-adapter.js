import {extend} from './extend';

export const offersAdapter = (offers) => {
  let newOfferArray = [];
  offers.forEach(function (offer) {
    let offerObject = extend(offer, {
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      previewImage: offer.preview_image
    });
    newOfferArray.push(offerObject);


  });

  return newOfferArray;
};

export const offerAdapter = (offer) => {

  let offerObject = extend(offer, {
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image
  });


  return offerObject;
};
