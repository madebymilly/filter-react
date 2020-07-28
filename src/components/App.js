
import React, { Component } from 'react';
// const { Component, render, useState } = wp.element;
import Filter from './Filter';
import ResultNumber from './ResultNumber';
import OpenFilterBtn from './OpenFilterBtn';
import Course from './Course';
import ResetFilterBtn from './ResetFilterBtn';
import Pagination from './Pagination';

import { filterItems } from '../../data/filterItems.js';

let scrollTop = 0;
let activeItems = {};

const container = document.querySelector( '.js-container' ),
  numberOfGroups = 4; // TODO: ophalen.

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      allCourses: [], // lijkt geen state, lijkt onveranderd, MAAR: zie componentDidMount
      isFilterOpen: false,
      filteredCourses: [],
      filterItems: filterItems, // 'active' state
      isLoading: false,
      // pagination:
      currentPage: 1,
      currentCourses: [],
      totalPages: 0
    };
    this.toggleFilter = this.toggleFilter.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.reset = this.reset.bind(this);
    this.getActivatedFilterItems = this.getActivatedFilterItems.bind(this);
    this.activateFilterItem = this.activateFilterItem.bind(this);
    this.getShowGroups = this.getShowGroups.bind(this);
    this.getResultNumber = this.getResultNumber.bind(this);
    this.updateCourses = this.updateCourses.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
		fetch( '../data/courses.json' )
			.then( data => data.json() )
      .then( result => {
        const allCourses = result.map( course => {
          return course;
        });
        this.setState({
          allCourses: allCourses,
          filteredCourses: allCourses,
          isLoading: false
        });
      });
	}

  toggleFilter() {
    this.setState( prevState => ({
      isFilterOpen: ! prevState.isFilterOpen
    }) );
	}

  open(e) {
    e.preventDefault();
    this.toggleFilter();

    scrollTop = window.pageYOffset;

    document.body.classList.add('fixed');
    container.classList.add('fixed');
    container.style.top = -Math.abs(scrollTop) + 'px';
  }

  close(e) {
    e.preventDefault();
    this.toggleFilter();

    document.body.classList.remove( 'fixed' );
    container.classList.remove( 'fixed' );
    container.style.top = '0px';
  }

  reset(e) {
    e.preventDefault();

    const tempFilterItems = this.state.filterItems;
    for ( let group in tempFilterItems ) { // TODO: map & arrow function gebruiken
      for ( let item in tempFilterItems[group].items ) {
        tempFilterItems[group].items[item].active = false;
      }
    }
    this.updateCourses( activeItems = {}, tempFilterItems );
  }

  getResultNumber() {
    return parseInt(this.state.filteredCourses.length);
  }

  getActivatedFilterItems( item, group, activeState ) {
    if ( activeState ) {
      if ( activeItems[group] == undefined ) {
        activeItems[group] = [];
      }
      activeItems[group].push( item );
    } else {
      const index = activeItems[group].indexOf( item );
      if ( -1 < index ) {
        activeItems[group].splice( index, 1 );
      }
    }
    return activeItems;
  }

  activateFilterItem( itemValue, itemGroup ) {
    const tempFilterItems = this.state.filterItems;

    for ( let group in tempFilterItems ) { // TODO: map & arrow function gebruiken
      for ( let item in tempFilterItems[group].items ) {
        if ( tempFilterItems[group].group == itemGroup ) {
          if ( tempFilterItems[group].items[item].value == itemValue ) {

            // add to or remove from 'activeItems':
            // TODO: deze functionaliteit kan ook in updateCourses komen. dan hoef je niet 2x 'activeItems' door te geven.
            activeItems = this.getActivatedFilterItems( itemValue, itemGroup, ! tempFilterItems[group].items[item].active );

            // change state:
            tempFilterItems[group].items[item].active = ! tempFilterItems[group].items[item].active;

            // update courses:
            this.updateCourses( activeItems, tempFilterItems );
          }
        }
      }
    }
  }

  getShowGroups( course, group, activeItems ) {
    var showGroup = false;
    activeItems[ group ].forEach( function( item ) {
      if ( course.groups[ group ].includes( item ) ) {
        if ( ! showGroup ) {
          showGroup = course.groups[ group ].includes( item );
        }
      }
      });
      return showGroup;
  }

  updateCourses( activeItems, tempFilterItems ) {

    // alleen deze functie mag state updaten ivm met asyncronous state changes.
    // (geldt alleen voor states waar verdere berekeningen / statussen mee gemaakt worden)

    const _this = this;
    const allCourses = this.state.allCourses;

    let tempFilteredCourses = [];
    let countResults = 0;

    this.setState({ isLoading: true });

    // === if noFilters are selected ===
    let noFilters = 0 === Object.entries( activeItems ).length;

    if ( noFilters ) {

      allCourses.forEach( function( course ) {
        tempFilteredCourses.push( course );
        countResults++;
      });

    // === if filters are selected ===
    } else {

      allCourses.forEach( function( course ) {

        let showGroups = [];
        var i;

        for ( i = 1; i <= numberOfGroups; i++ ) {

          let showGroup = true;
          let group = 'group' + i;

          if ( course.groups[group] && 0 < course.groups[group].length && activeItems[group] && 0 < activeItems[group].length ) {
            showGroup = _this.getShowGroups( course, group, activeItems );
          }
          showGroups.push( showGroup );
        }

        let itemShouldBeShown = showGroups.every( el => true === el );

        if ( itemShouldBeShown ) {
          tempFilteredCourses.push( course );
          countResults++;
        }

      });

    }

    this.setState({
      filteredCourses: tempFilteredCourses,
      isLoading: false,
      filterItems: tempFilterItems
    });

  }

  // Pagination:
  onPageChanged = data => {
    const tempAllCourses = this.state.filteredCourses;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentCourses = tempAllCourses.slice(offset, offset + pageLimit);

    console.log(currentPage, currentCourses, totalPages);

    this.setState(prevState => ({ // werk met prevState, zodat het asyncroon werkt.
      currentPage: currentPage,
      currentCourses: currentCourses,
      totalPages: totalPages,
    }));
  }

  render() {

    const resultNumber = this.getResultNumber();

    let { open, close, reset, activateFilterItem } = this;
    let { filteredCourses: courses, filterItems: items, isFilterOpen, isLoading, currentCourses, currentPage } = this.state;

    // Conditional rendering:
    let filter;
    if (isFilterOpen) {
      filter = <Filter close={close} reset={reset} activateFilterItem={activateFilterItem} filterItems={items} resultNumber={resultNumber} />
    }

    return (
      <>
        <div className="results">
          <div className="center">
            <ResultNumber number={resultNumber} />
            <OpenFilterBtn open={open} />
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
            <ResetFilterBtn reset={reset} />
          </div>
        </div>
        {filter}
        <div className="center">
          <Pagination
            totalRecords={resultNumber}
            pageLimit={8}
            pageNeighbours={1}
            onPageChanged={this.onPageChanged}
            currentPage={currentPage}
          />
        </div>
        <div className="center">
          <div className={`filter-loader js-filter-loader lds-spinner ${isLoading ? '' : 'is-hidden'}`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <p className={`no-results ${0 !== resultNumber ? 'is-hidden' : ''}`}>Er zijn geen resultaten gevonden.</p>
          <div className="course-items">
            {currentCourses.map(
              ( course, i ) =>
                <Course key={i} course={course} />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;
