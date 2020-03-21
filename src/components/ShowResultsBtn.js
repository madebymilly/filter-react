import React, { Component } from 'react'

const ShowResultsBtn = ({ close, resultNumber }) => (
  <>
    <a href="#" className="btn btn--big js-close-filter" onClick={(e) => close(e)}>
      Toon <strong>{resultNumber}</strong> resultaten
    </a>
  </>
);

export default ShowResultsBtn;
