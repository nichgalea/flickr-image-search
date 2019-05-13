import React, { Component } from "react";

import flickr from "src/flickr.service";

import styles from "./styles.scss";
import data from "./mockData.json";

export default class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.resultsGallery}>
        {data.map(i => {
          const url = flickr.getImageUrl(i);
          return <img className={styles.resultImage} key={i.id} src={url} onError={this.handleImageError} />;
        })}
      </div>
    );
  }

  handleImageError(e) {
    e.target.style.display = "none";
  }
}
