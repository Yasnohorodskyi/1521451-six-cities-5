import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";

import rootReducer from "./store/reducers/root-reducer";

import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";

import {fetch, checkAuth} from "./store/api-action";
import {redirect} from "./store/middlewares/redirect";

import {AuthorizationStatus} from "./store/const";

import {requireAuthorization} from "./store/action";


const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(checkAuth(api)),
  store.dispatch(fetch()),
]).then(() => {

  ReactDOM.render(
      <Provider store={store}>
        <App store={store}/>
      </Provider>,
      document.querySelector(`#root`)
  );

});
