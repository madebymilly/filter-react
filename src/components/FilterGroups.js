import React, { Component } from 'react'
import FilterItem from './FilterItem'

class FilterGroups extends React.Component {
  render() {

    const groups = this.props.groups

    return(
      <div>
        {groups.map(
          (group, i) =>
            <div key={i} className="filter-block js-filter-block">
              <h6><span>{group.label}</span> <a href="#" className="icon open-filter-block js-open-filter-block">&gt;</a></h6>
              <div className="filter-items">
                {group.items.map(
                  (item, i) =>
                    <FilterItem key={i} item={item} group={group.group} activateFilterItem={this.props.activateFilterItem}/>
                )}
              </div>
            </div>
        )}
      </div>
    )
  }
}

export default FilterGroups;
