import React, { useState, useEffect, Fragment } from 'react';

import ReactShimmer from '../../ReactShimmer'
import ImageLoader  from '../ImageLoader'
import TextLoader from '../TextLoader';
import useLoading from '../useLoading';

const SectionLoader2 = ({data}) => {

  const isLoading = useLoading()

  return (
    <div className="makeFlex section--wrapper">
      <div className="text--section appendRight20">
        <TextLoader isLoading={isLoading} data={data} />
      </div>
      <div className="image--box">
        <ImageLoader src={data?.imageSrc} width={500} height={281} />
      </div>
    </div>
  );
}

export default SectionLoader2;
