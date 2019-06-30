import React, { Component } from 'react'

class FilterItem extends React.Component {

  render() {

    const item = this.props.item

    return(
      <div className="filter-item js-filter-item" data-filter={item} data-filter-group={this.props.group}>
        <label>
          <span className="checkbox"><span className="check"></span></span>
          <span className="text">{item}  <em></em></span>
        </label>
      </div>
    )
  }
}

export default FilterItem;
