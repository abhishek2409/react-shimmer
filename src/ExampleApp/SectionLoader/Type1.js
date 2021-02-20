import React, { useState, useCallback, Fragment, useEffect } from 'react';

import ReactShimmer from '../../ReactShimmer'
import ImageLoader  from '../ImageLoader'
import TextLoader from '../TextLoader';
import useLoading from '../useLoading';

const SectionLoader1 = ({data}) => {

  const isLoading = useLoading()

  return (
    <div className="makeFlex section--wrapper">
      <div className="image--box appendRight20">
        <ImageLoader src={data?.imageSrc} width={500} height={281} />
      </div>
      <div className="text--section">
        <TextLoader isLoading={isLoading} data={data} />
      </div>
    </div>
  );
}

export default SectionLoader1;
