import React, { Component } from "react";

import Search from "src/search";
import Results from "src/results";
import flickrService from "src/flickr.service";

import styles from "./styles.scss";

const RESULTS_PER_PAGE = 50;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      results: []
    };

    this.search = this.search.bind(this);
  }

  render() {
    return (
      <>
        <Search onSearch={this.search} />

        <div className={styles.mainContent}>
          <Results list={this.state.results} />
        </div>
      </>
    );
  }

  search(query) {
    query = query.trim();

    if (query.length === 0) {
      this.setState({ results: [] });
    } else {
      flickrService.searchImages(query.trim(), this.state.currentPage, RESULTS_PER_PAGE).then(r => {
        if (this.state.currentPage === 0) {
          this.setState({ results: r.photos.photo });
        } else {
          this.setState({ results: [...this.state.results, ...r.photos.photo] });
        }
      });
    }
  }
}
