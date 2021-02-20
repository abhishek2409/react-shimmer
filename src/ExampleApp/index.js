import React from 'react';

import './style.css';
import ImageLoaderExample from './ImageLoader/example';
import SectionLoaderExample from './SectionLoader';
import TextLoaderExample from './TextLoader/example';
import CodeBock from '../CodeBlock';

let ExampleApp = () => {
  return (
    <div className="exampleapp--wrapper">
      {/* // Example 1. Image Loader */}
      <div className="section__item">
        <ImageLoaderExample />
      </div>

      {/* // Example 2. Image with Text */}
      <div className="section__item">
        <SectionLoaderExample />
      </div>

      {/* // Example 3 Text Loader */}
      <div className="section__item">
        <TextLoaderExample />
      </div>
      {/* // Usage */}
      <div className="section__item">
        <CodeBock />
      </div>
    </div>
  );
}

export default ExampleApp;
