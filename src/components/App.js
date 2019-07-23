import React, { Component } from 'react'
import Filter from './Filter'
import ResultNumber from './ResultNumber'
import OpenFilterBtn from './OpenFilterBtn'
import FilterableCourses from './FilterableCourses'
import Course from './Course'
import ResetFilterBtn from './ResetFilterBtn'

// const COURSES = [
//   {
//     "post_id":40,
//     "title":"Jeugdtoneel Brugklas",
//     "url":"http://oscu.test/cursus/jeugdtoneel-brugklas/",
//     "image":"http://oscu.test/content/uploads/2019/04/1920x1080-1-300x200.jpg",
//     "image_alt":"",
//     "groups":{
//       "group1":["Theater"],
//       "group2":["Jongeren"],
//       "group3":["Woensdag","Vrijdag"],
//       "group4":["Dordrecht","Papendrecht","Ridderkerk","Zwijndrecht"]
//     }
//   },
//   {
//     "post_id":38,
//     "title":"Moderne dans voor beginners",
//     "url":"http://oscu.test/cursus/moderne-dans-voor-beginners/",
//     "image":"http://oscu.test/content/uploads/2019/04/alex-klaasen-showponies-1-2-300x200.jpg",
//     "image_alt":"",
//     "groups":{
//       "group1":["Dans"],
//       "group2":["Kinderen","Jongeren"],
//       "group3":["Maandag","Woensdag","Vrijdag"],
//       "group4":["Dordrecht","Papendrecht","Ridderkerk","Zwijndrecht"]
//     }
//   }
// ];

// function openFilter() {
// 	if ( ! filter.$this.hasClass( 'is-open' ) ) {
//
//
// 		scrollTop = $( window ).scrollTop();
// 		$( '.js-container' ).css( { 'position': 'fixed', 'margin-top': -Math.abs( scrollTop ) } );
// 		$( 'body' ).addClass( 'fixed' );
// 		filter.$this.css( { 'visibility': 'visible' } );
// 		setTimeout( function() {
// 			filter.$this.addClass( 'is-open' );
// 			filter.$this.icons.init( '.svg-icon' );
// 		}, 300 );
// 	}
// };
//
// function closeFilter() {
// 	if ( filter.$this.hasClass( 'is-open' ) ) {
// 		filter.$this.removeClass( 'is-open' );
// 		$( 'body' ).removeClass( 'fixed' );
// 		$( '.js-container' ).removeAttr( 'style' );
// 		$( window ).scrollTop( scrollTop );
// 		setTimeout( function() {
// 			filter.$this.removeAttr( 'style' );
// 		}, 300 );
// 	}
// };

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isFilterOpen: false,
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
    // ...
  }

  close( e ) {
    e.preventDefault()
    this.toggleFilter()
    // ...
  }

  handleActivatedFilterItems( item ) {
    //console.log(item)
    //console.log(this.state.activeItems)

    // TODO: opsplitsen in add & remove!

    let tempArray = this.state.activeItems
    tempArray.unshift(item)
    this.setState({
  		activeItems: tempArray,
  	})
    console.log(this.state.activeItems)
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
          <FilterableCourses>
            {courses.map(
              (course, i) =>
                <Course key={i} course={course} />
            )}
          </FilterableCourses>
    		</div>
      </div>
    )
  }
}

// <FilterableCourses courses={COURSES} />

export default App;
