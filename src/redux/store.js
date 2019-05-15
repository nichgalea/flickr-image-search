import { createStore, combineReducers, compose as reduxCompose } from "redux";

import { searchReducer } from "./search";
import { loadingReducer } from "./loading";

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose;

export default previousState => {
  return createStore(combineReducers({ search: searchReducer, loading: loadingReducer }), previousState, compose());
};
