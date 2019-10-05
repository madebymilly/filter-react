import React, { Component } from 'react'
import CloseFilterBtn from './CloseFilterBtn'
import ResetFilterBtn from './ResetFilterBtn'
import FilterItem from './FilterItem'
import ShowResultsBtn from './ShowResultsBtn'

class Filter extends React.Component {
  render() {

    const groups = this.props.filterItems,
      resultNumber = this.props.resultNumber;

    return(
      <div className={`filter js-filter ${this.props.shown ? 'is-open' : ''}`}>
        <h1>{this.props.shown ? 'true' : 'false'}</h1>
      	<div className="filter-top">
          <CloseFilterBtn close={this.props.close} />
          <ResetFilterBtn reset={this.props.reset} />
      	</div>

      	<div className="filter-scroll">
      		<div className="filter-inner">
            {groups.map(
              (group, i) =>
                <div key={i} className="filter-block js-filter-block">
                  <h6><span>{group.label}</span> <a href="#" className="icon open-filter-block js-open-filter-block">&gt;</a></h6>
                  <div className="filter-items">
                    {group.items.map(
                      (item, j) =>
                        <FilterItem key={`${i}${j}`} value={item.value} group={group.group} active={item.active} activateItem={this.props.activateFilterItem} />
                    )}
                  </div>
                </div>
            )}
      		</div>
      	</div>

      	<div className="filter-bottom">
      		<ShowResultsBtn resultNumber={resultNumber} close={this.props.close} />
      	</div>

      </div>
    )
  }
}

// <FilterGroups groups={FILTERITEMS} activateFilterItem={this.props.activateFilterItem}/>
// <FilterItem key={i} item={item} group={group.group} activateFilterItem={this.props.activateFilterItem}/>

export default Filter;
