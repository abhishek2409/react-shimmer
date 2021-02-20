import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const CodeBlock = ({code}) => {
  return (
    <div className="codeblock--wrapper">
      <h4>Usage:</h4>
      <pre><code>{code}</code></pre>
    </div>
  );
}

CodeBlock.propTypes = {
  code: PropTypes.string
};

export default CodeBlock;
