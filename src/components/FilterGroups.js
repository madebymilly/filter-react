import React, { Component } from 'react'
import FilterGroup from './FilterGroup'

class FilterGroups extends React.Component {
  render() {
    return(
      <div>
        <div className="filter-block js-filter-block is-open">
          <h6><span>genre</span> <a href="#" className="icon open-filter-block js-open-filter-block"><i className="svg-icon" data-icon="icon-arrow-2"></i></a></h6>

          <div className="filter-items">
            <div className="filter-item js-filter-item" data-filter="Dans" data-filter-group="group1">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Dans <em></em></span>
              </label>
            </div>

            <div className="filter-item js-filter-item" data-filter="Kunst & Design" data-filter-group="group1">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Kunst & Design <em></em></span>
              </label>
            </div>

            <div className="filter-item js-filter-item" data-filter="Muziek" data-filter-group="group1">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Muziek <em></em></span>
              </label>
            </div>

            <div className="filter-item js-filter-item" data-filter="Theater" data-filter-group="group1">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Theater <em></em></span>
              </label>
            </div>
          </div>

        </div>

        <div className="filter-block js-filter-block is-open">
          <h6><span>doelgroep</span> <a href="#" className="icon open-filter-block js-open-filter-block"><i className="svg-icon" data-icon="icon-arrow-2"></i></a></h6>

          <div className="filter-items">
            <div className="filter-item js-filter-item" data-filter="Allerkleinsten" data-filter-group="group2">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Allerkleinsten <em>0 - 4jr</em></span>
              </label>
            </div>

            <div className="filter-item js-filter-item" data-filter="Kinderen" data-filter-group="group2">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Kinderen <em>4 - 12jr</em></span>
              </label>
            </div>

            <div className="filter-item js-filter-item" data-filter="Jongeren" data-filter-group="group2">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Jongeren <em>13 - 17jr</em></span>
              </label>
            </div>

            <div className="filter-item js-filter-item" data-filter="Volwassenen" data-filter-group="group2">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Volwassenen</span>
              </label>
            </div>

            <div className="filter-item js-filter-item" data-filter="Senioren" data-filter-group="group2">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Senioren <em>va 65+</em></span>
              </label>
            </div>

          </div>

        </div>

        <div className="filter-block js-filter-block is-open">
          <h6><span>dag & tijdstip</span> <a href="#" className="icon open-filter-block js-open-filter-block"><i className="svg-icon" data-icon="icon-arrow-2"></i></a></h6>

          <div className="filter-items">

            <div className="filter-item js-filter-item" data-filter="Maandag" data-filter-group="group3">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Maandag <em></em></span>
              </label>
            </div>

            <div className="filter-item js-filter-item" data-filter="Dinsdag" data-filter-group="group3">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Dinsdag <em></em></span>
              </label>
            </div>

            <div className="filter-item js-filter-item" data-filter="Woensdag" data-filter-group="group3">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Woensdag <em></em></span>
              </label>
            </div>

            <div className="filter-item js-filter-item" data-filter="Donderdag" data-filter-group="group3">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Donderdag <em></em></span>
              </label>
            </div>

            <div className="filter-item js-filter-item" data-filter="Vrijdag" data-filter-group="group3">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Vrijdag <em></em></span>
              </label>
            </div>

            <div className="filter-item js-filter-item" data-filter="Zaterdag" data-filter-group="group3">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Zaterdag <em></em></span>
              </label>
            </div>

            <div className="filter-item js-filter-item" data-filter="Zondag" data-filter-group="group3">
              <label>
                <span className="checkbox"><span className="check"></span></span>
                <span className="text">Zondag <em></em></span>
              </label>
            </div>

          </div>

        </div>

        <div className="filter-block js-filter-block is-open">
          <h6><span>locatie</span> <a href="#" className="icon open-filter-block js-open-filter-block"><i className="svg-icon" data-icon="icon-arrow-2"></i></a></h6>

          <div className="filter-item js-filter-item" data-filter="Dordrecht" data-filter-group="group4">
            <label>
              <span className="checkbox"><span className="check"></span></span>
              <span className="text">Dordrecht <em></em></span>
            </label>
          </div>

          <div className="filter-item js-filter-item" data-filter="Papendrecht" data-filter-group="group4">
            <label>
              <span className="checkbox"><span className="check"></span></span>
              <span className="text">Papendrecht <em></em></span>
            </label>
          </div>

          <div className="filter-item js-filter-item" data-filter="Ridderkerk" data-filter-group="group4">
            <label>
              <span className="checkbox"><span className="check"></span></span>
              <span className="text">Ridderkerk <em></em></span>
            </label>
          </div>

          <div className="filter-item js-filter-item" data-filter="Zwijndrecht" data-filter-group="group4">
            <label>
              <span className="checkbox"><span className="check"></span></span>
              <span className="text">Zwijndrecht <em></em></span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default FilterGroups;
