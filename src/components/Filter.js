import React, { Component } from 'react'
import CloseFilterBtn from './CloseFilterBtn'
import ResetFilterBtn from './ResetFilterBtn'
import FilterGroups from './FilterGroups'
import ShowResultsBtn from './ShowResultsBtn'

class Filter extends React.Component {
  render() {
    return(
      <div className="filter js-filter">

      	<div className="filter-top">
          <CloseFilterBtn />
          <ResetFilterBtn />
      	</div>

      	<div className="filter-scroll">
      		<div className="filter-inner">
            <FilterGroups />
      		</div>
      	</div>

      	<div className="filter-bottom">
      		<ShowResultsBtn />
      	</div>

      </div>
    )
  }
}

export default Filter;
