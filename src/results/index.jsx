import React, { Component } from "react";
import { InfiniteLoader, List, AutoSizer } from "react-virtualized";

import Image from "src/image";

import styles from "./styles.scss";

export default class Results extends Component {
  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      groupedImages: props.list.reduce((acc, curr) => {
        if (acc.length === 0) {
          acc.push([curr]);
        } else if (acc[acc.length - 1].length < 3) {
          acc[acc.length - 1].push(curr);
        } else {
          acc.push([curr]);
        }

        return acc;
      }, [])
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      groupedImages: [],
      loadedRowsMap: {},
      loadingRowCount: 0
    };

    this.isRowLoaded = this.isRowLoaded.bind(this);
    this.rowRenderer = this.rowRenderer.bind(this);
  }

  render() {
    if (this.props.list.length === 0) {
      return null;
    }

    // const remoteRowCount = Math.ceil(this.props.totalResultCount / 3); // 3 images per row

    return (
      <div className={styles.resultsGallery}>
        <InfiniteLoader
          isRowLoaded={this.isRowLoaded}
          loadMoreRows={this.props.onLoadMore}
          rowCount={this.props.totalResultCount}
          minimumBatchSize={45}
          threshold={10}
        >
          {({ onRowsRendered, registerChild }) => (
            <AutoSizer>
              {({ width, height }) => (
                <List
                  height={height}
                  onRowsRendered={onRowsRendered}
                  ref={registerChild}
                  rowCount={this.props.totalResultCount}
                  rowHeight={366}
                  rowRenderer={this.rowRenderer}
                  width={width}
                />
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>
      </div>
    );
  }

  isRowLoaded({ index }) {
    return Boolean(this.props.list[index]);
  }

  rowRenderer({ key, index, style }) {
    return (
      <div key={key} style={style}>
        <Image image={this.props.list[index]} />
      </div>
    );
  }
}
