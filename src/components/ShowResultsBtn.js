import React, { Component } from 'react'

class ShowResultsBtn extends React.Component {
  render() {
    return(
      <a href="#" className="btn btn--big js-close-filter">Toon <strong>{this.props.resultNumber}</strong> resultaten</a>
    )
  }
}

export default ShowResultsBtn;
