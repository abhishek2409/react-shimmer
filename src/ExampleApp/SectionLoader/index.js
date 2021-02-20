import React, { useState, useCallback, Fragment } from 'react';

import './style.css';
import SectionLoader1 from './Type1';
import SectionLoader2 from './Type2';
import SectionLoader3 from './Type3';

import { data1, data2, data3 }  from '../data'

const SectionLoader = ({data}) => {

  const [activeSections, setActiveSections] = useState([])

  const isSectionVisible = (index) => {
    return activeSections.indexOf(index) > -1
  }

  const clickHandler = (index) => {
    let state = [...activeSections]
    state.push(index)
    setActiveSections(state)
  }

  return (
    <Fragment>
      {/* Section Type1 Example*/}
      {isSectionVisible(1) ? (
        <SectionLoader1 data={data1} />
      ) : (
        <button className="btn appendRight20" onClick={e => clickHandler(1)}>
          Load Section 1 Example
        </button>
      )}
      {/* Section Type2 Example*/}
      {isSectionVisible(2) ? (
        <SectionLoader2 data={data2} />
      ) : (
        <button className="btn appendRight20" onClick={e => clickHandler(2)}>
          Load Section 2 Example
        </button>
      )}
      {/* Section Type3 Example*/}
      {isSectionVisible(3) ? (
        <SectionLoader3 data={data3} />
      ) : (
        <button className="btn" onClick={e => clickHandler(3)}>
          Load Section 3 Example
        </button>
      )}
    </Fragment>
  );
}







export default SectionLoader;
