import React, { useState, useEffect } from 'react';


const useLoading = () => {
  const [isLoading, changeLoadingState] = useState(true)

  //Mock Text Data async Call
  useEffect(()=>{
    const timer = setTimeout(()=> {
      changeLoadingState(false)
    }, 10000);
    return () => clearTimeout(timer)
  }, [])

  return isLoading;
}

export default useLoading
