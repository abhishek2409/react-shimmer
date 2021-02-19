import React, { lazy, Suspense  } from 'react';

const ReactShimmer = lazy(() => import('../ReactShimmer'))

let ExampleApp = (props) => {

  // Example 1. Image Loader
  // Example 2. Image with Text
  // Example 2.1 Left Image with Text
  // Example 2.1 Top Center Image with Text
  // Example 2.1 Right Image with Text
  // Example 3 Text Loader

  return (
    <Suspense fallback={<></>}>
      <ReactShimmer />
    </Suspense>
  );
}

export default ExampleApp;
