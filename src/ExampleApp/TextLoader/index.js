import React, { Fragment } from 'react';

import ReactShimmer from '../../ReactShimmer';

const TextLoader = ({data, isLoading, shimmerDimensions}) => {
  if(isLoading){
    return(
      <Fragment>
        <ReactShimmer cssClass={"title--shimmer"} width={shimmerDimensions?.title?.width} height={shimmerDimensions?.title?.height}/>
        {
          [0, 1, 2, 3, 4].map((item, i) => {
            return(
              <ReactShimmer cssClass={"text--shimmer"} width={shimmerDimensions?.paragraph?.width} height={shimmerDimensions?.paragraph?.height} key={i}/>
            )
          })
        }
        <ReactShimmer width={shimmerDimensions?.lastLine?.width} height={shimmerDimensions?.lastLine?.height}/>
      </Fragment>
    )
  }else {
    return(
      <Fragment>
        <h2 className="appendBottom20">{data?.title}</h2>
        <p>{data?.text}</p>
      </Fragment>
    )
  }
}

TextLoader.defaultProps = {
  shimmerDimensions:{
    title:{
      width:200,
      height:30
    },
    paragraph:{
      width:500,
      height:10
    },
    lastLine:{
      width:350,
      height:10
    }
  }
}

export default TextLoader;
