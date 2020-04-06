import React from 'react'
import CloseFilterBtn from './CloseFilterBtn'
import ResetFilterBtn from './ResetFilterBtn'
import FilterItem from './FilterItem'
import ShowResultsBtn from './ShowResultsBtn'

// Functional component & Presentational component:
const Filter = (props) => {
  // Destrucuting assignments:
  let { filterItems: items, activateFilterItem: activated, resultNumber, close, shown, reset } = props;
  return (
    <>

      <div className={`filter js-filter ${shown ? 'is-open' : ''}`}>
        <div className="filter-top">
          <CloseFilterBtn close={close} />
          <ResetFilterBtn reset={reset} />
        </div>

        <div className="filter-scroll">
          <div className="filter-inner">
            {items.map(
              (group, i) =>
                <div key={i} className="filter-block js-filter-block">
                  <h6><span>{group.label}</span> <a href="#" className="icon open-filter-block js-open-filter-block">&gt;</a></h6>
                  <div className="filter-items">
                    {group.items.map(
                      (item, j) =>
                        <FilterItem key={`${i}${j}`} value={item.value} group={group.group} active={item.active} activateItem={activated} />
                    )}
                  </div>
                </div>
            )}
          </div>
        </div>

        <div className="filter-bottom">
          <ShowResultsBtn resultNumber={resultNumber} close={close} />
        </div>

      </div>
    </>
  )
};

export default Filter;
