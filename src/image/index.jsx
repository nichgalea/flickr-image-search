import React, { Component } from "react";

import styles from "./styles.scss";

export default class LazyImage extends Component {
  get src() {
    return `https://farm${this.props.image.farm}.${CDN_DOMAIN}/${this.props.image.server}/${this.props.image.id}_${
      this.props.image.secret
    }.jpg`;
  }

  constructor(props) {
    super(props);

    this.state = {
      error: false
    };

    this.handleError = this.handleError.bind(this);
  }

  render() {
    if (this.state.error) {
      return null;
    }

    if (!this.props.image) {
      return (
        <div className={styles.loading}>
          <div className={styles.loadingText}>Loading...</div>
        </div>
      );
    }

    return (
      <a href={this.src} target="_blank" title={this.props.image.title}>
        <img ref={e => (this.element = e)} className={styles.image} src={this.src} onError={this.handleError} />
      </a>
    );
  }

  handleError() {
    this.setState({ error: true });
  }
}
