import React, { Component } from "react";
import cx from "classnames";

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
      error: false,
      isVisible: false
    };

    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    this.intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.setState({ isVisible: true });
          this.intersectionObserver.disconnect();
        }
      },
      { threshold: [0, 1] }
    );

    this.intersectionObserver.observe(this.element);
  }

  render() {
    if (this.state.error) {
      return null;
    }

    return (
      <img
        ref={e => (this.element = e)}
        className={cx(styles.image)}
        src={this.state.isVisible ? this.src : null}
        onError={this.handleError}
      />
    );
  }

  handleError() {
    this.setState({ error: true });
  }
}
