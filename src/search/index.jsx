import React, { Component } from "react";
import cx from "classnames";

import styles from "./styles.scss";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.changeSearch = this.changeSearch.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  render() {
    const isSearching = this.state.query.length > 0;

    return (
      <div className={cx(styles.search, isSearching && styles.searching)}>
        <div className={styles.placeholder}>Type to start searching Flickr...</div>

        <input
          ref={e => (this.input = e)}
          type="search"
          className={styles.input}
          value={this.state.query}
          onChange={this.changeSearch}
        />
      </div>
    );
  }

  changeSearch(e) {
    this.setState({ query: e.currentTarget.value });
  }
}
