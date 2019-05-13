import React, { Component } from "react";

import Search from "src/search";
import Results from "src/results";

import styles from "./styles.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Search />
        <div className={styles.mainContent}>
          <Results />
        </div>
      </>
    );
  }
}
