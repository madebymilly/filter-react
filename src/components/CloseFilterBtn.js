import React from 'react'

// Functional component & Presentational component:
const CloseFilterBtn = ({close}) => (
  <>
    <a href="#" className="close-filter js-close-filter"
      onClick={(e) => close(e)}>X</a>
  </>
);

export default CloseFilterBtn;
