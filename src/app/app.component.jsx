import React, { Component } from "react";

import Search from "src/search";
import Results from "src/results";
import flickrService from "src/flickr.service";

import styles from "./styles.scss";

const RESULTS_PER_PAGE = 45;

export default class App extends Component {
  currentPage = 0;
  lastSearchedQuery = null;

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      totalResultCount: 0
    };

    this.search = this.search.bind(this);
  }

  render() {
    return (
      <>
        <Search onSearch={this.search} />

        <div className={styles.mainContent}>
          <Results list={this.state.results} onLoadMore={this.search} totalResultCount={this.state.totalResultCount} />
        </div>
      </>
    );
  }

  search() {
    const query = this.props.query.trim();

    if (query.length > 0) {
      this.currentPage = this.lastSearchedQuery === query ? this.currentPage + 1 : 0;
      this.lastSearchedQuery = this.props.query.trim();

      return flickrService.searchImages(query.trim(), this.currentPage, RESULTS_PER_PAGE).then(r => {
        if (this.currentPage === 0) {
          this.setState({ results: r.photos.photo, totalResultCount: Number(r.photos.total) });
        } else {
          this.setState({ results: [...this.state.results, ...r.photos.photo] });
        }
      });
    } else {
      this.setState({ results: [], totalResultCount: 0 });
    }

    return Promise.resolve();
  }
}
