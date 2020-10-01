import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';


const App = (props) => {
  const {rentCount} = props;

  return (
    <Main rentCount={rentCount} />
  );
};

App.propTypes = {
  rentCount: PropTypes.number.isRequired,
};

export default App;
