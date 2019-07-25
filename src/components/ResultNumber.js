import React, { Component } from 'react'

class ResultNumber extends React.Component {
  render() {
    return(
      <span className="result"><em>{this.props.number}</em> cursussen</span>
    )
  }
}

export default ResultNumber;
