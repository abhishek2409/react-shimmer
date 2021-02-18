import React, { lazy, Suspense  } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ImageLoader = lazy(() => import('./ImageLoader'))
const TextLoader = lazy(() => import('./TextLoader'))



let ReactShimmer = (props) => {

  const { entireSectionLoader, onlyImageLoader, onlyTextLoader, isLoading } = props

  const imageLoaderProps = {
    isLoading,
    wrapperStyle:{
      width:"300px",
      height:"300px",
      marginBottom:"20px"
    }
  }
  const textLoader1Props = {
    isLoading,
    wrapperStyle:{
      width:"300px",
      marginBottom:"10px"
    }
  }
  const textLoader2Props = {
    isLoading,
    wrapperStyle:{
      width:"250px",
      marginBottom:"10px"
    }
  }
  const textLoader3Props = {
    isLoading,
    wrapperStyle:{
      width:"250px"
    }
  }

  return (
    <div className="shimmer--wrapper">
      <Suspense fallback={<></>}>
        <ImageLoader {...imageLoaderProps} />
        <TextLoader {...textLoader1Props} />
        <TextLoader {...textLoader2Props} />
        <TextLoader {...textLoader3Props} />
      </Suspense>
    </div>
  );
}

ReactShimmer.propTypes = {
  entireSectionLoader:PropTypes.bool,
  onlyImageLoader:PropTypes.bool,
  onlyTextLoader:PropTypes.bool,
  isLoading:PropTypes.bool
}

ReactShimmer.defaultProps = {
  entireSectionLoader:true,
  onlyTextLoader:false,
  onlyImageLoader:false,
  isLoading:true
}

export default ReactShimmer;
