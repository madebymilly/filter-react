import React from 'react'

// Functional component & Presentational component:
const Course = ({course}) => (
  <>
    <a href={course.url} className="course-item">
      <div className="load-image">
        <img src={course.image} alt={course.image_alt} />
      </div>
      <div className="course-item-content">
        <span className="arrow">&gt;</span>
        <h2>{course.title}</h2>
        <span className="temp">
          {course.groups.group2.map(
            (group, i) =>
              <span key={i}>{(i ? ', ' : '') + group}</span>
          )}
          <br />
          {course.groups.group3.map(
            (group, i) =>
              <span key={i}>{(i ? ', ' : '') + group}</span>
          )}
          <br />
          {course.groups.group4.map(
            (group, i) =>
              <span key={i}>{(i ? ', ' : '') + group}</span>
          )}
        </span>
        <span className="genre">
          {course.groups.group1.map(
            (group, i) =>
              <span key={i}>{(i ? ', ' : '') + group}</span>
          )}
        </span>
      </div>
    </a>
  </>
);

export default Course;
