import React, { Component } from 'react'

class FilterItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    }
    this.activateItem = this.activateItem.bind(this);
  }

  toggleIsActive() {
    this.setState( prevState => ({
      isActive: !prevState.isActive
    }))
	}

  activateItem( e ) {
    e.preventDefault();
    this.props.activateFilterItem( e.currentTarget );
    this.toggleIsActive();
  }

  render() {

    const item = this.props.item

    return(
      <div
        className={`filter-item js-filter-item ${this.state.isActive ? 'is-active' : ''}` }
        data-filter={item}
        data-filter-group={this.props.group}
        onClick={this.activateItem}>
        <label>
          <span className="checkbox"><span className="check"></span></span>
          <span className="text">{this.props.item}  <em></em></span>
        </label>
      </div>
    )
  }
}

export default FilterItem;
