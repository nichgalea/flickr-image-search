import { connect } from "react-redux";

import { setQuery } from "src/redux/search";

import Search from "./search.component";

export default connect(
  state => ({ query: state.search.query }),
  { setQuery }
)(Search);
