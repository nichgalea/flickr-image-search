import { connect } from "react-redux";

import { setLoading } from "src/redux/loading";

import App from "./app.component";

export default connect(
  state => ({ query: state.search.query }),
  { setLoading }
)(App);
