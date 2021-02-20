import React, { useState, useCallback, Fragment } from 'react';

import './style.css';
import SectionLoader1 from './Type1';
import SectionLoader2 from './Type2';
import SectionLoader3 from './Type3';

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

  const data1 = {
    imageSrc: "https://source.unsplash.com/5760x3240/?nature",
    title:"Section1 Title",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }

  const data2 = {
    imageSrc: "https://source.unsplash.com/5760x3240/?black",
    title:"Section2 Title",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
  const data3 = {
    imageSrc: "https://source.unsplash.com/5760x3240/?landscape",
    title:"Section3 Title",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
