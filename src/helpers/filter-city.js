const filterCityClass = (offer, current) => {
  if (offer.title === current) {
    return `locations__item-link tabs__item tabs__item--active`;
  } else {
    return `locations__item-link tabs__item tabs__item`;
  }
};
const filterArrCities = (offers, current) => {
  let filteredArr = [];
  offers.map((itemOffer) => {
    if (current === itemOffer.city) {
      filteredArr.push(itemOffer);
    }
  });
  return filteredArr;
};

export {filterCityClass, filterArrCities};
