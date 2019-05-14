export const SearchActionTypes = {
  SET_QUERY: "search/query/set"
};

export function setQuery(query) {
  return {
    type: SearchActionTypes.SET_QUERY,
    query
  };
}
