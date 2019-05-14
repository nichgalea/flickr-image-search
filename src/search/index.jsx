import React, { Component } from "react";
import { debounce } from "lodash";
import cx from "classnames";

import styles from "./styles.scss";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.changeSearchValue = this.changeSearchValue.bind(this);
    this.search = this.search.bind(this);
    this.search = debounce(this.search, 350);
    this.handleFocus = this.handleFocus.bind(this);
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
          onChange={this.changeSearchValue}
          onFocus={this.handleFocus}
        />
      </div>
    );
  }

  handleFocus() {
    this.input.select();
  }

  changeSearchValue(e) {
    this.setState({ query: e.currentTarget.value });
    this.search(e.currentTarget.value);
  }

  search(query) {
    this.props.onSearch(query);
  }
}
