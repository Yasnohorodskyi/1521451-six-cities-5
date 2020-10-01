import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const state = {
  rentCount: 101
};

ReactDOM.render(
    <App rentCount={state.rentCount} />,
    document.querySelector(`#root`)
);
