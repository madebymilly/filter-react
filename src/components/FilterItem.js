import React, { Component } from 'react'

// class FilterItem extends React.Component {
//   render() {
//     return(
//       <div
//         className={`filter-item js-filter-item ${this.props.active ? 'is-active' : ''}` }
//         data-filter={this.props.value}
//         data-filtergroup={this.props.group}
//         onClick={ ( e ) => this.props.activateItem( e ) }>
//         <label>
//           <span className="checkbox"><span className="check"></span></span>
//           <span className="text">{this.props.value}  <em></em></span>
//         </label>
//       </div>
//     )
//   }
// }

const FilterItem = (props) => {
  let { value, group, active, activateItem } = props;
  return (
    <div
      className={`filter-item js-filter-item ${active ? 'is-active' : ''}`}
      data-filter={value}
      data-filtergroup={group}
      onClick={(e) => activateItem(value, group)}>
      <label>
        <span className="checkbox"><span className="check"></span></span>
        <span className="text">{value}  <em></em></span>
      </label>
    </div>
  )
};

export default FilterItem;
