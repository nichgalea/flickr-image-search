import { createStore, combineReducers } from "redux";

import { searchReducer } from "./search";

export default previousState => {
  return createStore(
    combineReducers({ search: searchReducer }),
    previousState,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
};
