import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const CodeBlock = ({code}) => {
  return (
    <div className="codeblock--wrapper">
      <div className="appendBottom20">
      <h4>Usage:</h4>
      <pre><code>{`
        import ReactShimmer from '../ReactShimmer';

        const example = (props) => {
          return(
            <div>
              <ReactShimmer />
            </div>
          )
        }
      `}</code></pre>
      </div>
      <h4 className="appendBottom20">Options</h4>
      <table className="codeblock--table">
        <thead>
          <tr>
             <th>Property</th>
             <th>Data type</th>
             <th>Default value</th>
          </tr>
        </thead>
       <tbody>
          <tr>
             <td>wrapperStyle</td>
             <td>Object</td>
             <td>{`{}`}</td>
          </tr>
          <tr>
             <td>width</td>
             <td>Number</td>
             <td>400</td>
          </tr>
          <tr>
             <td>height</td>
             <td>Number</td>
             <td>400</td>
          </tr>
          <tr>
             <td>duration</td>
             <td>Number</td>
             <td>1600</td>
          </tr>
          <tr>
             <td>cssClass</td>
             <td>String</td>
             <td>""</td>
          </tr>
       </tbody>
    </table>
    </div>
  );
}

CodeBlock.propTypes = {
  code: PropTypes.string
};

export default CodeBlock;
