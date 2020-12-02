import React from 'react';
import PropTypes from 'prop-types';

const PremiumTemplate = (className) => {
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
};

PremiumTemplate.propTypes = {
  className: PropTypes.string.isRequired,
};

export {PremiumTemplate};
export default PremiumTemplate;
