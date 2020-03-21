import React, { Component } from 'react'

const ResetFilterBtn = ({ reset }) => (
  <>
    <a href="#" className="reset-filter js-reset-filter"
      onClick={(e) => reset(e)}>wis alle filters</a>
  </>
);

export default ResetFilterBtn;
