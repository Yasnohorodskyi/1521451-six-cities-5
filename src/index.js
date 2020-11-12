import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";

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

Promise.all([
  store.dispatch(fetch())
]).then(() => {

  ReactDOM.render(
      <Provider store={store}>
        <App store={store}/>
      </Provider>,
      document.querySelector(`#root`)
  );

});
