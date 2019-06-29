import React, { Component } from 'react'
import Filter from './Filter'
import ResultNumber from './ResultNumber'
import OpenFilterBtn from './OpenFilterBtn'
import FilterableCourses from './FilterableCourses'
import ResetFilterBtn from './ResetFilterBtn'

class CoursesArchive extends React.Component {
  render() {
    return(
      <div>
        <div className="results">
    			<div className="center">
    				<ResultNumber />
    				<OpenFilterBtn />
    			</div>
    		</div>
        <div className="center">
    			<div className="filter-extra">
    				<a href="#">Dans</a>
    				<a href="#">Dordrecht</a>
    				<a href="#">Modern</a>
    				<a href="#">Dansfit</a>
    				<a href="#">Volwassenen</a>
    				<a href="#">Middag</a>
    				<ResetFilterBtn />
    			</div>
    		</div>
        <Filter />
        <div className="center">
    			<div className="filter-loader js-filter-loader lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <FilterableCourses />
    		</div>
      </div>
    )
  }
}

export default CoursesArchive;
