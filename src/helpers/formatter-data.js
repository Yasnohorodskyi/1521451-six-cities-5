import PropTypes from 'prop-types';

const namesMonth = {
  1: `January`,
  2: `February`,
  3: `March`,
  4: `April`,
  5: `May`,
  6: `June`,
  7: `July`,
  8: `August`,
  9: `September`,
  10: `October`,
  11: `November`,
  12: `December`
};

const addZero = (numb) => {
  if (numb < 10) {
    return `0${numb}`;
  } else {
    return numb;
  }
};

const formatYearMonthDay = (time) => {
  const timestamp = new Date(time).getTime();
  const year = new Date(time).getFullYear();
  const month = addZero(new Date(timestamp * 1000).getMonth() + 1);
  const day = addZero(new Date(timestamp * 1000).getDay());
  return `${year}-${month}-${day}`;
};

const formatMonthYear = (time) => {
  const month = namesMonth[new Date(time).getMonth() + 1];
  const year = new Date(time).getFullYear();
  return `${month} ${year}`;
};

const formatterData = (time, type) => {
  switch (type) {
    case `MonthDay`:
      return formatMonthYear(time);
    case `YearMonthDay`:
      return formatYearMonthDay(time);
    default:
      return time;
  }
};

formatterData.propTypes = {
  time: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export {formatterData};
