import React, { useState, useCallback, Fragment } from 'react';

import './style.css';
import ReactShimmer  from '../../ReactShimmer'

const ImageLoader = ({src, width, height, shimmerCssClass}) => {
  const [isLoading, changeLoadingState] = useState(true)

  const onImageLoad = useCallback((e) => {
    changeLoadingState(false)
  }, [])

  return (
    <Fragment>
      {isLoading ? (<ReactShimmer cssClass={shimmerCssClass} width={width} height={height}/>) : null}
      <img src={src} onLoad={onImageLoad} />
    </Fragment>
  );
}

ImageLoader.defaultProps = {
  shimmerCssClass:"image--shimmer"
}

export default ImageLoader;
