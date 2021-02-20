import React, { useState, useCallback, Fragment } from 'react';

import './style.css';
import ReactShimmer  from '../../ReactShimmer'
import CodeBlock from '../../CodeBlock';


const codeBlock = ``

const SectionLoader = ({data}) => {
  const [isLoading, changeLoadingState] = useState(true)

  const onImageLoad = useCallback((e) => {
    changeLoadingState(false)
  }, [])

  const renderTypeOneSection = () => (
    <div className="section--wrapper">
      <h3 className="appendBottom20">Section 1 Example</h3>
      <div className="makeFlex">
        <div className="image--box appendRight20">
          {isLoading ? (<ReactShimmer cssClass={"image--shimmer"} width={500} height={281}/>): null}
          <img src={data?.imageSrc} onLoad={onImageLoad} />
        </div>
        <div className="text--section">
          {isLoading ? (
            <Fragment>
              <ReactShimmer cssClass={"title--shimmer"} width={200} height={30}/>
              {
                [0, 1, 2, 3, 4].map((item, i) => {
                  return(
                    <ReactShimmer cssClass={"text--shimmer"} width={500} height={10} key={i}/>
                  )
                })
              }
              <ReactShimmer cssClass={"text--shimmer"} width={450} height={10}/>
              <ReactShimmer width={350} height={10}/>
            </Fragment>
          ) : (
            <Fragment>
              <h2 className="appendBottom20">{data?.title}</h2>
              <p>{data?.text}</p>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  )

  const renderTypeTwoSection = () => (
    <div className="section--wrapper">
      <h3 className="appendBottom20">Section 2 Example</h3>
      <div className="makeFlex">
        <div className="text--section appendRight20">
          {isLoading ? (
            <Fragment>
              <ReactShimmer cssClass={"title--shimmer"} width={200} height={30}/>
              {
                [0, 1, 2, 3, 4].map((item, i) => {
                  return(
                    <ReactShimmer cssClass={"text--shimmer"} width={500} height={10} key={i}/>
                  )
                })
              }
              <ReactShimmer cssClass={"text--shimmer"} width={450} height={10}/>
              <ReactShimmer width={350} height={10}/>
            </Fragment>
          ) : (
            <Fragment>
              <h2 className="appendBottom20">{data?.title}</h2>
              <p>{data?.text}</p>
            </Fragment>
          )}
        </div>
        <div className="image--box">
          {isLoading ? (<ReactShimmer cssClass={"image--shimmer"} width={500} height={281}/>): null}
          <img src={data?.imageSrc} onLoad={onImageLoad} />
        </div>
      </div>
    </div>
  )

  const renderTypeThreeSection = () => (
    <div className="section--wrapper three">
      <h3 className="appendBottom20">Section 3 Example</h3>
      <div className="makeFlex flexColumn">
        <div className="image--box">
          {isLoading ? (<ReactShimmer cssClass={"image--shimmer"} width={500} height={281}/>): null}
          <img src={data?.imageSrc} onLoad={onImageLoad} />
        </div>
        <div className="text--section">
          {isLoading ? (
            <Fragment>
              <ReactShimmer cssClass={"title--shimmer"} width={500} height={30}/>
              {
                [0, 1, 2, 3, 4].map((item, i) => {
                  return(
                    <ReactShimmer cssClass={"text--shimmer"} width={850} height={10} key={i}/>
                  )
                })
              }
              <ReactShimmer cssClass={"text--shimmer"} width={750} height={10}/>
              <ReactShimmer width={650} height={10}/>
            </Fragment>
          ) : (
            <Fragment>
              <h2 className="appendBottom20">{data?.title}</h2>
              <p>{data?.text}</p>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  )


  return (
    <Fragment>
      {renderTypeOneSection()}
      {renderTypeTwoSection()}
      {renderTypeThreeSection()}
    </Fragment>
  );
}







export default SectionLoader;
