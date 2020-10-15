import React from 'react';
import PropTypes from 'prop-types';

const calcRating = (percent) =>{
  return {
    width: percent * 10 * 2 + '%'
  };
}

calcRating.propTypes = {
  percent: PropTypes.number.isRequired,
};

export {calcRating};