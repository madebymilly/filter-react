import React, { Component } from 'react'
import Filter from './Filter'
import ResultNumber from './ResultNumber'
import OpenFilterBtn from './OpenFilterBtn'
// import FilterableCourses from './FilterableCourses'
import Course from './Course'
import ResetFilterBtn from './ResetFilterBtn'

let scrollTop = 0;
let activeItems = {}; // Geen state, want kan berekend worden op basis van filterItem state.

const container = document.querySelector( '.js-container' ),
  numberOfGroups = 4; // TODO: ophalen

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isFilterOpen: false,
      //scrollTop: 0,
      allCourses: [], // is dit wel state? even zo laten ivm met fetch in componentDidMount
      filteredCourses: [],
      isLoading: false,
      // resultNumber is geen state, want kan berekend worden met state.filteredCourses.length
    }

    this.toggleFilter = this.toggleFilter.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.reset = this.reset.bind(this)
    this.handleActivatedFilterItems = this.handleActivatedFilterItems.bind(this)
    this.getShowGroups = this.getShowGroups.bind(this)
    this.getResultNumber = this.getResultNumber.bind(this)
    this.updateCourses = this.updateCourses.bind(this)
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
          filteredCourses: allCourses,
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

  reset( e ) {
    e.preventDefault();
    this.updateCourses( activeItems = {} )
  }

  handleActivatedFilterItems( item, group, activeState ) {
    if ( activeState ) {
      if ( activeItems[group] == undefined ) {
    		activeItems[group] = [];
    	}
    	activeItems[group].push( item );

    } else {
      var index = activeItems[group].indexOf( item );
      if ( index > -1 ) {
        activeItems[group].splice(index, 1);
      }
    }
    this.updateCourses( activeItems )
  }

  getShowGroups( course, group, activeItems ) {
  	var show_group = false;
  	activeItems[ group ].forEach( function( item ) {
  		if (course.groups[ group ].includes( item )) {
  			if (!show_group) {
  				show_group = course.groups[ group ].includes( item );
  			}
  		}
  	} );
  	return show_group;
  }

  getResultNumber() {
    return this.state.filteredCourses.length
  }

  updateCourses( activeItems ) {

    // alleen deze functie mag state updaten ivm met asyncronous state changes.
    // (geldt alleen voor states waar verdere berekeningen / statussen mee gemaakt worden)

    const this_app = this;
    const allCourses = this.state.allCourses;

    let tempFilteredCourses = [];
    let count_results = 0;

    this.setState({ isLoading: true });

    // === if noFilters are selected ===
  	let noFilters = Object.entries( activeItems ).length === 0;

    if ( noFilters ) {

      allCourses.forEach( function( course ) {
        tempFilteredCourses.push( course )
        count_results++;
      } );

    // === if filters are selected ===
    } else {

      allCourses.forEach( function( course ) {

        let show_groups = [];

    		for ( var i = 1; i <= numberOfGroups; i ++ ) {

          let show_group = true;
    		  let group = 'group' + i;

    			if (course.groups[group] && course.groups[group].length > 0 && activeItems[group] && activeItems[group].length > 0) {
    				show_group = this_app.getShowGroups( course, group, activeItems );
    			}
    			show_groups.push(show_group);
        }

        let itemShouldBeShown = show_groups.every( el => el === true );

  			if ( itemShouldBeShown ) {
          tempFilteredCourses.push( course )
  				count_results++;
  			}

      } );

    }

    this.setState({
      filteredCourses: tempFilteredCourses,
      isLoading: false
    })

  }

  render() {

    const courses = this.state.filteredCourses,
      resultNumber = this.getResultNumber();

    return(
      <div>
        <div className="results">
    			<div className="center">
    				<ResultNumber number={resultNumber} />
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
    				<ResetFilterBtn reset={this.reset} />
    			</div>
    		</div>
        <Filter close={this.close} shown={this.state.isFilterOpen} reset={this.reset} activateFilterItem={this.handleActivatedFilterItems} resultNumber={resultNumber} />
        <div className="center">
    			<div className={`filter-loader js-filter-loader lds-spinner ${this.state.isLoading ? '' : 'is-hidden'}`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <p className={`no-results ${resultNumber !== 0 ? 'is-hidden' : ''}`}>Er zijn geen resultaten gevonden.</p>
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

export default App;
