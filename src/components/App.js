import React, { Component } from 'react'
import Filter from './Filter'
import ResultNumber from './ResultNumber'
import OpenFilterBtn from './OpenFilterBtn'
// import FilterableCourses from './FilterableCourses'
import Course from './Course'
import ResetFilterBtn from './ResetFilterBtn'


let scrollTop = 0;

const container = document.querySelector( '.js-container' ),
  numberOfGroups = 4; // TO DO ophalen

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isFilterOpen: false,
      scrollTop: 0,
      activeItems: {},
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

  handleActivatedFilterItems( item, group ) {
    let tempActiveItems = this.state.activeItems;
      if (tempActiveItems[group] == undefined ) {
  		tempActiveItems[group] = [];
  	}
  	tempActiveItems[group].push( item );

    this.updateCourses( tempActiveItems )
  }

  updateCourses( activeItems ) {
    // alleen deze mag state updaten ivm met asyncronous state changes.
    // geldt alleen voor states waar verdere berekeningen / statussen mee gemaakt worden.


    this.setState({
      activeItems: tempObject
    })


  }

  // getShowGroups( data, group ) {
  // 	var show_group = false;
  // 	// forEach is synchronous!, return will work AFTER forEach is done.
  // 	chosenFilters[ group ].forEach( function( item ) {
  // 		//console.log(item);
  // 		if (data.groups[ group ].includes( item )) {
  // 			if (!show_group) {
  // 				// TODO: kan includes handiger?
  // 				show_group = data.groups[ group ].includes( item );
  // 			}
  // 		}
  // 	} );
  // 	//console.log('done?');
  // 	return show_group;
  // }

  // updateCourses() {
  //   console.log(this.state.activeItems)
  //
  //   // this.state.allCourses.forEach( function( item ) {
  //   //   let show_groups = [];
  //   //
  // 	// 	for ( var i = 1; i <= numberOfGroups; i ++ ) {
  // 	// 		let show_group = true;
  // 	// 		let group = 'group' + i;
  //   //
  // 	// 		if (item.groups[group] && item.groups[group].length > 0 && this.state.activeItems[group] && this.state.activeItems[group].length > 0) {
  // 	// 			show_group = getShowGroups( data, group );
  // 	// 		}
  // 	// 		show_groups.push(show_group);
  // 	// 	}
  //   // } );
  //
  //
  //
  // }

  render() {

    const courses = this.state.allCourses,
      number = courses.length;

    return(
      <div>
        <div className="results">
    			<div className="center">
    				<ResultNumber number={number} />
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
