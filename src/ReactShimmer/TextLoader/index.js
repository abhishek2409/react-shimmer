import React from 'react';
import PropTypes from 'prop-types';

import './style.css'

let TextLoader = (props) => {
  const { wrapperStyle, isLoading } = props
  return (
    <div style={wrapperStyle} className={`shimmer--text-wrapper ${isLoading ? "shimming" : ""}`}></div>
  );
}

TextLoader.propTypes = {
  wrapperStyle:PropTypes.object,
  isLoading:PropTypes.bool
};
TextLoader.defaultProps = {
  wrapperStyle:{},
  isLoading:false
}

export default TextLoader;
