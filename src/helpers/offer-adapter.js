export const offerAdapter = (data) => {

  const newOffer = JSON.parse(JSON.stringify(data));
  newOffer.isFavorite = data.isFavorite ? data.isFavorite : data.is_favorite;
  return newOffer;
  /*
  const newOffer = {
    ...data,
    isFavorite: data.isFavorite ? data.isFavorite : data.is_favorite
  };

  return newOffer;
  */
};
