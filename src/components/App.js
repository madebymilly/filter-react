import React, { Component } from 'react'
import Filter from './Filter'
import ResultNumber from './ResultNumber'
import OpenFilterBtn from './OpenFilterBtn'
// import FilterableCourses from './FilterableCourses'
import Course from './Course'
import ResetFilterBtn from './ResetFilterBtn'


let scrollTop = 0;

const container = document.querySelector( '.js-container' )

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isFilterOpen: false,
      scrollTop: 0,
      activeItems: [],
      allCourses: [],
      isLoading: false,
    }
    this.toggleFilter = this.toggleFilter.bind(this)

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.handleActivatedFilterItems = this.handleActivatedFilterItems.bind(this)
  }

  componentDidMount() {
    this.setState({ isLoading: true });
		fetch('../data/courses.json')
			.then(data => data.json())
      .then(result => {
        const allCourses = result.map( course => {
          return course;
        } )
        this.setState( {
          allCourses: allCourses,
          isLoading: false
        } )
      })
	}

  toggleFilter() {
    this.setState( prevState => ({
      isFilterOpen: !prevState.isFilterOpen
    }))
	}

  open( e ) {
    e.preventDefault()
    this.toggleFilter()

    scrollTop = window.pageYOffset;

    document.body.classList.add( 'fixed' );
    container.classList.add( 'fixed' );
    container.style.top = -Math.abs( scrollTop ) + "px";

  }

  close( e ) {
    e.preventDefault()
    this.toggleFilter()

    document.body.classList.remove('fixed');
    container.classList.remove( 'fixed' );
    container.style.top = "0px";
  }

  handleActivatedFilterItems( item ) {
    let tempArray = this.state.activeItems
    tempArray.unshift(item)
    this.setState({
  		activeItems: tempArray,
  	})
  }

  render() {

    const courses = this.state.allCourses;

    return(
      <div>
        <div className="results">
    			<div className="center">
    				<ResultNumber />
    				<OpenFilterBtn open={this.open} />
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
        <Filter close={this.close} shown={this.state.isFilterOpen} activateFilterItem={this.handleActivatedFilterItems} />
        <div className="center">
    			<div className={`filter-loader js-filter-loader lds-spinner ${this.state.isLoading ? '' : 'is-hidden'}`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <div className="course-items">
            {courses.map(
              (course, i) =>
                <Course key={i} course={course} />
            )}
          </div>
    		</div>
      </div>
    )
  }
}

// <FilterableCourses courses={COURSES} />

export default App;
