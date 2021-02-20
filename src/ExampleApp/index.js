import React, { lazy, Suspense } from 'react';

import './style.css';

const ImageLoaderExample = lazy(()=> import('./ImageLoader/example'))
const SectionLoaderExample =  lazy(()=> import('./SectionLoader'))
const TextLoaderExample =  lazy(()=> import('./TextLoader/example'))
const CodeBock =  lazy(()=> import('../CodeBlock'))

let ExampleApp = () => {
  return (
    <Suspense fallback={<></>}>
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
    </Suspense>
  );
}

export default ExampleApp;
