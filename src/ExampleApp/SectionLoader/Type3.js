import React, { useState, useEffect, Fragment } from 'react';

import ReactShimmer from '../../ReactShimmer'
import ImageLoader  from '../ImageLoader'
import TextLoader from '../TextLoader';
import useLoading from '../useLoading';

const SectionLoader3 = ({data}) => {

const isLoading = useLoading()

  return (
    <div className="makeFlex flexColumn section--wrapper three">
      <div className="image--box">
        <ImageLoader src={data?.imageSrc} width={500} height={281} />
      </div>
      <div className="text--section">
        <TextLoader isLoading={isLoading} data={data} />
      </div>
    </div>
  );
}

export default SectionLoader3;
