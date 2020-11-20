export const offerAdapter = (data) => {

  const newOffer = {
    ...data,
    isFavorite: data.isFavorite ? data.isFavorite : data.is_favorite
  };

  return newOffer;
};
