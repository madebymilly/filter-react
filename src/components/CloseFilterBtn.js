import React, { Component } from 'react'

class CloseFilterBtn extends React.Component {
  render() {
    return(
      <a href="#" className="close-filter js-close-filter"
        onClick={ ( e ) => this.props.close( e ) }>X</a>
    )
  }
}

export default CloseFilterBtn;
