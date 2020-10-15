import React from 'react';
import PropTypes from 'prop-types';

const premiumTemplate = (className) =>{
    return (
      <div className={className}>
        <span>Premium</span>
      </div>
    )
  }

premiumTemplate.propTypes = {
  className: PropTypes.string.isRequired,
};

export {premiumTemplate};