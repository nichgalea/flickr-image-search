import React, { Component } from "react";

import Search from "src/search";
import Results from "src/results";
import flickrService from "src/flickr.service";

import styles from "./styles.scss";

const RESULTS_PER_PAGE = 45;

export default class App extends Component {
  currentPage = 0;

  constructor(props) {
    super(props);

    this.state = {
      results: []
    };

    this.search = this.search.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      this.currentPage = 0;
    }
  }

  render() {
    return (
      <>
        <Search onSearch={this.search} />

        <div className={styles.mainContent}>
          <Results list={this.state.results} onLoadMore={this.search} />
        </div>
      </>
    );
  }

  search() {
    const query = this.props.query.trim();

    if (query.length === 0) {
      this.setState({ results: [] });
    } else {
      flickrService.searchImages(query.trim(), this.currentPage, RESULTS_PER_PAGE).then(r => {
        if (currentPage++ === 0) {
          this.setState({ results: r.photos.photo });
        } else {
          this.setState({ results: [...this.state.results, ...r.photos.photo] });
        }
      });
    }
  }
}
