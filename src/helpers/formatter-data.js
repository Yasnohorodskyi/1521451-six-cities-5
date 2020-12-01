import PropTypes from 'prop-types';


const formatYearMonthDay = (time) => {

  const timestamp = new Date(time).getTime();

  let options = {
    year: `numeric`,
    month: `numeric`,
    day: `numeric`
  };

  const formatter = new Intl.DateTimeFormat(`en-EN`, options).format(timestamp);
  return formatter.toString().replace(/\//g, `-`);

};

const formatMonthYear = (time) => {
  const options = {month: `long`, year: `numeric`};
  const date = new Date(time);
  return new Intl.DateTimeFormat(`en-EN`, options).format(date);
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
