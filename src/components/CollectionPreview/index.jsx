import React from 'react';
import './style.scss';

import CollectionItem from './../ColletionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      {<h1 className="title">{title.toUpperCase()}</h1>}
      <div className="preview">
        {items
          .filter((item, id) => id < 4)
          .map((item) => {
            return <CollectionItem key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
