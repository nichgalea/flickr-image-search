import React, { Component } from "react";

import flickr from "src/flickr.service";
import Image from "src/image";

import styles from "./styles.scss";
import data from "./mockData.json";

export default class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.resultsGallery}>
        {data.map(i => (
          <Image key={i.id} image={i} />
        ))}
      </div>
    );
  }
}
