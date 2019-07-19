import React, { Component } from 'react'
import CloseFilterBtn from './CloseFilterBtn'
import ResetFilterBtn from './ResetFilterBtn'
import FilterGroups from './FilterGroups'
import ShowResultsBtn from './ShowResultsBtn'

const FILTERITEMS = [
  {
    group: 'group1',
    label: 'genre',
    items: [
      'Dans', 'Kunst & Design', 'Muziek', 'Theater'
    ]
  },
  {
    group: 'group2',
    label: 'doelgroep',
    items: [
      'Allerkleinsten', 'Kinderen', 'Jongeren', 'Volwassenen', 'Senioren'
    ]
  },
  {
    group: 'group3',
    label: 'dag',
    items: [
      'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'
    ]
  },
  {
    group: 'group4',
    label: 'locatie',
    items: [
      'Dordrect', 'Papendrecht', 'Ridderkerk', 'Zwijndrecht'
    ]
  },
];



class Filter extends React.Component {
  render() {

    return(
      <div className={`filter js-filter ${this.props.shown ? 'is-open' : ''}`}>
        <h1>{this.props.shown ? 'true' : 'false'}</h1>
      	<div className="filter-top">
          <CloseFilterBtn close={this.props.close} />
          <ResetFilterBtn />
      	</div>

      	<div className="filter-scroll">
      		<div className="filter-inner">
            <FilterGroups groups={FILTERITEMS} activateFilterItem={this.props.activateFilterItem}/>
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
