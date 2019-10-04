import React, { Component } from 'react'
import CloseFilterBtn from './CloseFilterBtn'
import ResetFilterBtn from './ResetFilterBtn'
import FilterItem from './FilterItem'
import ShowResultsBtn from './ShowResultsBtn'

const FILTERITEMS = [ // TODO: uit wordpress halen
  { group: 'group1', label: 'genre', value: 'Dans', active: false, },
  { group: 'group1', label: 'genre', value: 'Kunst & Design', active: false, },
  { group: 'group1', label: 'genre', value: 'Muziek', active: false, },
  { group: 'group1', label: 'genre', value: 'Theater', active: false, },
  { group: 'group2', label: 'doelgroep', value: 'Allerkleinsten', active: false, },
  { group: 'group2', label: 'doelgroep', value: 'Kinderen', active: false, },
  { group: 'group2', label: 'doelgroep', value: 'Jongeren', active: false, },
  { group: 'group2', label: 'doelgroep', value: 'Volwassenen', active: false, },
  { group: 'group2', label: 'doelgroep', value: 'Senioren', active: false, },
  { group: 'group3', label: 'dag', value: 'Maandag', active: false, },
  { group: 'group3', label: 'dag', value: 'Dinsdag', active: false, },
  { group: 'group3', label: 'dag', value: 'Woensdag', active: false, },
  { group: 'group3', label: 'dag', value: 'Donderdag', active: false, },
  { group: 'group3', label: 'dag', value: 'Vrijdag', active: false, },
  { group: 'group3', label: 'dag', value: 'Zaterdag', active: false, },
  { group: 'group3', label: 'dag', value: 'Zondag', active: false, },
  { group: 'group4', label: 'locatie', value: 'Dordrecht', active: false, },
  { group: 'group4', label: 'locatie', value: 'Papendrecht', active: false, },
  { group: 'group4', label: 'locatie', value: 'Ridderkerk', active: false, },
  { group: 'group4', label: 'locatie', value: 'Zwijndrecht', active: false, },
];

class Filter extends React.Component {
  render() {

    const filterItems = FILTERITEMS,
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
            <div className="filter-items">
            {filterItems.map(
              (item, i) => 
                <FilterItem key={i} label={item.label} group={item.group} value={item.value} active={item.active}/>
            )}
            </div>
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

// {groups.map(
//   (group, i) =>
//     <div key={i} className="filter-block js-filter-block">
//       <h6><span>{group.label}</span> <a href="#" className="icon open-filter-block js-open-filter-block">&gt;</a></h6>
//       <div className="filter-items">
//         {group.items.map(
//           (item, i) =>
//             <FilterItem key={i} item={item} group={group.group} activateFilterItem={this.props.activateFilterItem} />
//         )}
//       </div>
//     </div>
// )}

export default Filter;
