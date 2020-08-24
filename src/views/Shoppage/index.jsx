import React, { Component } from 'react';
import data from './../../collectionItems.js';

import CollectionPreview from './../../components/CollectionPreview';

export default class Shoppage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: data,
    };
  }
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}
