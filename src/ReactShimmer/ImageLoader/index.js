import React from 'react';
import PropTypes from 'prop-types';

import './style.css'

let ImageLoader = (props) => {
  const { wrapperStyle, isLoading } = props
  return (
    <div style={wrapperStyle} className={`shimmer--image-wrapper ${isLoading ? "shimming" : ""}`}></div>
  );
}

ImageLoader.propTypes = {
  wrapperStyle:PropTypes.object,
  isLoading:PropTypes.bool
};
ImageLoader.defaultProps = {
  wrapperStyle:{},
  isLoading:false
}

export default ImageLoader;
