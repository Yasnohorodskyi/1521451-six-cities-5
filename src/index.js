import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";

//import {reducer} from "./store/reducer";
import rootReducer from "./store/reducers/root-reducer";


import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";

import {fetch} from "./store/api-action";



const api = createAPI(
    () => store.dispatch()
);

const store = createStore(
  rootReducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
  )
);
/*
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);*/

Promise.all([
  store.dispatch(fetch())
]).then(() => {

  ReactDOM.render(
      <Provider store={store}>
        <App offers={offers} store={store} reviews={reviews} />
      </Provider>,
      document.querySelector(`#root`)
  );

})


