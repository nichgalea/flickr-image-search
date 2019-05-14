import { connect } from "react-redux";

import App from "./app.component";

export default connect(state => ({ query: state.search.query }))(App);
