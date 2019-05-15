import React from "react";
import { connect } from "react-redux";

import styles from "./styles.scss";

export default connect(state => ({ isLoading: state.loading }))(function Loading({ isLoading }) {
  return isLoading ? <div className={styles.loading} /> : null;
});
