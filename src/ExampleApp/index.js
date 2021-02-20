import React from 'react';

import './style.css';
import ImageLoader from './ImageLoader';
import SectionLoader from './SectionLoader';

let ExampleApp = (props) => {
  const data = {
    imageSrc: "https://source.unsplash.com/5760x3240/?alone",
    title:"Section Title",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
  return (
    <div className="exampleapp--wrapper">
      {/* // Example 1. Image Loader */}
      <ImageLoader src="https://source.unsplash.com/5760x3240/?nature,water" />
      {/* // Example 2. Image with Text */}
      <SectionLoader data={data} />
      {/* // Example 3 Text Loader */}
    </div>
  );
}

export default ExampleApp;
