import React, { useState, useEffect } from 'react';

import './style.css'
import TextLoader from './';
import { data } from '../data'

const TextLoaderExample = () => {

  const [isVisible, setVisibility] = useState(false)
  const [isLoading, changeLoadingState] = useState(true)

  //Mock Text Data async Call
  useEffect(()=>{
    let timer = null
    if(isVisible){
      const timer = setTimeout(()=> {
        changeLoadingState(false)
      }, 5000);
    }

    return () => {
      if(timer) clearTimeout(timer)
    }
  }, [isVisible])


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
