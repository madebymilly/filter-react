import React, { Component } from 'react'

class OpenFilterBtn extends React.Component {
  render() {
    return(
      <button href="#" className="btn open-filter js-open-filter"
        onClick={ ( e ) => this.props.open( e ) }>
        Filteren
      </button>
    )
  }
}

export default OpenFilterBtn;
