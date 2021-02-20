import React from 'react';

import './style.css';
import ImageLoader from './';

const ImageLoaderExample = ({}) => {
  const src = "https://source.unsplash.com/5760x3240/?nature,water"
  return (
    <div className="image--wrapper">
      <h3 className="appendBottom20">Image Example</h3>
      <div className="image--box">
        <ImageLoader src={src} width={500} height={281} />
      </div>
    </div>
  );
}







export default ImageLoaderExample;
