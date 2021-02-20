import React, { useState, useEffect } from 'react';

import './style.css'
import TextLoader from './';
import useLoading from '../useLoading';

const TextLoaderExample = () => {

  const [isVisible, setVisibility] = useState(false)
  const isLoading = useLoading()

  const data = {
    title:"TEXT Loader Example",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }

  const shimmerDimensions = {
    title:{
      width:200,
      height:30
    },
    paragraph:{
      width:1000,
      height:10
    },
    lastLine:{
      width:850,
      height:10
    }
  }



  return (
    <div className="text--wrapper">
    {isVisible ? (
      <TextLoader isLoading={isLoading} data={data} shimmerDimensions={shimmerDimensions} />
    ) : (
      <button className="btn" onClick={e => setVisibility(true)}>
        Load Text Section
      </button>
    )}

    </div>
  );
}



export default TextLoaderExample;
