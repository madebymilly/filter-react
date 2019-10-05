import React, { Component } from 'react'

class FilterItem extends React.Component {
  render() {
    return(
      <div
        className={`filter-item js-filter-item ${this.props.active ? 'is-active' : ''}` }
        data-filter={this.props.value}
        data-filtergroup={this.props.group}
        onClick={ ( e ) => this.props.activateItem( e, this ) }>
        <label>
          <span className="checkbox"><span className="check"></span></span>
          <span className="text">{this.props.value}  <em></em></span>
        </label>
      </div>
    )
  }
}

export default FilterItem;
