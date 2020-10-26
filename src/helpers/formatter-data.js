import PropTypes from 'prop-types';

const addZero = (numb) => {
  if (numb < 10) {
    return `0${numb}`;
  } else {
    return numb;
  }
};
const formatterData = (time, type) => {
  let arr = new Date(time * 1000).toString().split(` `);
  switch (type) {
    case `DayMonth`:
      return `${arr[1]} ${arr[3]}`;
    case `YearMonthDay`:
      const month = addZero(new Date(time * 1000).getMonth() + 1);
      const day = addZero(new Date(time * 1000).getDay());
      return `${arr[3]}-${month}-${day}`;
    default:
      return time;
  }
};

formatterData.propTypes = {
  time: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export {formatterData};
