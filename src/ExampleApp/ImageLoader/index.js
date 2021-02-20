import React, { useState, useCallback } from 'react';

import './style.css';
import ReactShimmer  from '../../ReactShimmer'
import CodeBlock from '../../CodeBlock';


const codeBlock = `
import ReactShimmer  from '../../ReactShimmer';

const ImageLoader = ({src}) => {
  const [isLoading, changeLoadingState] = useState(true)

  const onImageLoad = useCallback((e) => {
    changeLoadingState(false)
  }, [])

  return (
    <div>
      <ReactShimmer width={500} height={281}/>
      <img src={src} onLoad={onImageLoad} />
    </div>
  );
}
`

const ImageLoader = ({src}) => {
  const [isLoading, changeLoadingState] = useState(true)

  const onImageLoad = useCallback((e) => {
    changeLoadingState(false)
  }, [])

  return (
    <div className="image--wrapper">
      <h3 className="appendBottom20">Image Example</h3>
      <div className="makeFlex">
        <div className="image--box">
          {isLoading ? (<ReactShimmer cssClass={"image--shimmer"} width={500} height={281}/>) : null}
          <img src={src} onLoad={onImageLoad} />
        </div>
        <CodeBlock code={codeBlock}/>
      </div>
    </div>
  );
}







export default ImageLoader;
