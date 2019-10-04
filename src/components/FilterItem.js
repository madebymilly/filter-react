import React, { Component } from 'react'

class FilterItem extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isActive: false,
  //   }
  //   this.activateItem = this.activateItem.bind(this);
  // }
  //
  // toggleIsActive() {
  //   this.setState( prevState => ({
  //     isActive: !prevState.isActive
  //   }))
	// }
  //
  // activateItem( e ) {
  //   e.preventDefault();
  //   const item = e.currentTarget;
  //   this.toggleIsActive();
  //   this.props.activateFilterItem( item.dataset.filter, item.dataset.filtergroup, !this.state.isActive );
  // }

  render() {

    const item = this.props.item

    return(
      <div
        className={`filter-item js-filter-item ${this.props.active ? 'is-active' : ''}` }
        data-filter={this.props.value}
        data-filtergroup={this.props.group}
        onClick={this.activateItem}>
        <label>
          <span className="checkbox"><span className="check"></span></span>
          <span className="text">{this.props.value}  <em></em></span>
        </label>
      </div>
    )
  }
}

export default FilterItem;
