const data = {
  index: 0
};
const filterOffers = (currentOffer, maxElements, id) => {
  if (!maxElements) {
    return `main`;
  } else if (maxElements && data.index < maxElements) {
    if (Number(id) !== Number(currentOffer)) {
      data.index++;
      return `other`;
    }
  }
  return null;
};

export {filterOffers};
