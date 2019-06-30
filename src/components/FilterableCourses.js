import React, { Component } from 'react'
import Course from './Course'

class FilterableCourses extends React.Component {
  render() {

    const courses = this.props.courses;

    return(
      <div id="courses" className="course-items">
        {courses.map(
          (course, i) =>
            <Course key={i} course={course} />
        )}
      </div>
    )
  }
}

export default FilterableCourses;
