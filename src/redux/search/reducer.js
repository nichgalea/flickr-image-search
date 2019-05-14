import { SearchActionTypes } from "./actions";

const initialSearchState = { query: "" };

export function searchReducer(state = initialSearchState, action) {
  switch (action.type) {
    case SearchActionTypes.SET_QUERY: {
      return {
        query: action.query
      };
    }

    default:
      return state;
  }
}
