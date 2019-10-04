import React, { Component } from 'react'

class ResetFilterBtn extends React.Component {
  render() {
    return(
      <a href="#" className="reset-filter js-reset-filter" onClick={ ( e ) => this.props.reset( e ) }>wis alle filters</a>
    )
  }
}

export default ResetFilterBtn;
