import React, { Component } from "react";

import Image from "src/image";

import styles from "./styles.scss";

export default class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.resultsGallery}>
        {this.props.list.map(i => (
          <Image key={i.id} image={i} />
        ))}
      </div>
    );
  }
}
