import React, { useState, useCallback, Fragment, lazy, Suspense } from 'react';

import './style.css';

const ReactShimmer  = lazy(()=>import('../../ReactShimmer'))

const ImageLoader = ({src, width, height, shimmerCssClass}) => {
  const [isLoading, changeLoadingState] = useState(true)

  const onImageLoad = useCallback((e) => {
    changeLoadingState(false)
  }, [])

  return (
    <Suspense fallback={<></>}>
      {isLoading ? (<ReactShimmer cssClass={shimmerCssClass} width={width} height={height}/>) : null}
      <img src={src} onLoad={onImageLoad} />
    </Suspense>
  );
}

ImageLoader.defaultProps = {
  shimmerCssClass:"image--shimmer"
}

export default ImageLoader;
