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
    delete offerObject[`is_favorite`];
    delete offerObject[`is_premium`];
    delete offerObject[`max_adults`];

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

  delete offerObject[`is_favorite`];
  delete offerObject[`is_premium`];
  delete offerObject[`max_adults`];
  delete offerObject[`preview_image`];

  return offerObject;
};
