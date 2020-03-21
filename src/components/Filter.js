import React from 'react'
import CloseFilterBtn from './CloseFilterBtn'
import ResetFilterBtn from './ResetFilterBtn'
import FilterItem from './FilterItem'
import ShowResultsBtn from './ShowResultsBtn'

// Functional component & Presentational component:
const Filter = (props) => (
  <>
    <div className={`filter js-filter ${props.shown ? 'is-open' : ''}`}>
      <h1>{props.shown ? 'true' : 'false'}</h1>
      <div className="filter-top">
        <CloseFilterBtn close={props.close} />
        <ResetFilterBtn reset={props.reset} />
      </div>

      <div className="filter-scroll">
        <div className="filter-inner">
          {props.filterItems.map(
            (group, i) =>
              <div key={i} className="filter-block js-filter-block">
                <h6><span>{group.label}</span> <a href="#" className="icon open-filter-block js-open-filter-block">&gt;</a></h6>
                <div className="filter-items">
                  {group.items.map(
                    (item, j) =>
                      <FilterItem key={`${i}${j}`} value={item.value} group={group.group} active={item.active} activateItem={props.activateFilterItem} />
                  )}
                </div>
              </div>
          )}
        </div>
      </div>

      <div className="filter-bottom">
        <ShowResultsBtn resultNumber={props.resultNumber} close={props.close} />
      </div>

    </div>
  </>
);

export default Filter;
