import React, { Component } from 'react'
import Filter from './Filter'
import ResultNumber from './ResultNumber'
import OpenFilterBtn from './OpenFilterBtn'
import FilterableCourses from './FilterableCourses'
import ResetFilterBtn from './ResetFilterBtn'

const COURSES = [
  {
    "post_id":40,
    "title":"Jeugdtoneel Brugklas",
    "url":"http://oscu.test/cursus/jeugdtoneel-brugklas/",
    "image":"http://oscu.test/content/uploads/2019/04/1920x1080-1-300x200.jpg",
    "image_alt":"",
    "groups":{
      "group1":["Theater"],
      "group2":["Jongeren"],
      "group3":["Woensdag","Vrijdag"],
      "group4":["Dordrecht","Papendrecht","Ridderkerk","Zwijndrecht"]
    }
  },
  {
    "post_id":38,
    "title":"Moderne dans voor beginners",
    "url":"http://oscu.test/cursus/moderne-dans-voor-beginners/",
    "image":"http://oscu.test/content/uploads/2019/04/alex-klaasen-showponies-1-2-300x200.jpg",
    "image_alt":"",
    "groups":{
      "group1":["Dans"],
      "group2":["Kinderen","Jongeren"],
      "group3":["Maandag","Woensdag","Vrijdag"],
      "group4":["Dordrecht","Papendrecht","Ridderkerk","Zwijndrecht"]
    }
  }
];

class CoursesArchive extends React.Component {
  render() {
    return(
      <div>
        <div className="results">
    			<div className="center">
    				<ResultNumber />
    				<OpenFilterBtn />
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
        <Filter />
        <div className="center">
    			<div className="filter-loader js-filter-loader lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <FilterableCourses courses={COURSES} />
    		</div>
      </div>
    )
  }
}

export default CoursesArchive;
