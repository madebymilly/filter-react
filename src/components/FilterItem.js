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
    const item = e.currentTarget;
    this.props.activateFilterItem( item, item.dataset.filtergroup );
    this.toggleIsActive();
  }

  render() {

    const item = this.props.item

    return(
      <div
        className={`filter-item js-filter-item ${this.state.isActive ? 'is-active' : ''}` }
        data-filter={item}
        data-filtergroup={this.props.group}
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
