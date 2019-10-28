import React, { Component } from 'react'
import Filter from './Filter'
import ResultNumber from './ResultNumber'
import OpenFilterBtn from './OpenFilterBtn'
import FilterableCourses from './FilterableCourses'
import ResetFilterBtn from './ResetFilterBtn'

const COURSES = [
  {"post_id":40,"title":"Jeugdtoneel Brugklas","url":"http://oscu.test/cursus/jeugdtoneel-brugklas/","image":"/src/images/minion.jpg","image_alt":"","groups":{"group1":["Theater"],"group2":["Jongeren"],"group3":["Woensdag","Vrijdag"],"group4":["Dordrecht","Papendrecht","Ridderkerk","Zwijndrecht"]}},
  {"post_id":38,"title":"Moderne dans voor beginners","url":"http://oscu.test/cursus/moderne-dans-voor-beginners/","image":"/src/images/minion.jpg","image_alt":"","groups":{"group1":["Dans"],"group2":["Kinderen","Jongeren"],"group3":["Maandag","Woensdag","Vrijdag"],"group4":["Dordrecht","Papendrecht","Ridderkerk","Zwijndrecht"]}},
  {"post_id":35,"title":"Schilderen met Bob Ross","url":"http://oscu.test/cursus/schilderen-met-bob-ross/","image":"/src/images/minion.jpg","image_alt":"","groups":{"group1":["Kunst & Design"],"group2":["Jongeren","Volwassenen","Senioren"],"group3":["Woensdag"],"group4":["Dordrecht"]}},
  {"post_id":32,"title":"Basgitaar voor gevordenden","url":"http://oscu.test/cursus/basgitaar-voor-gevordenden/","image":"/src/images/minion.jpg","image_alt":"","groups":{"group1":["Muziek"],"group2":["Volwassenen","Senioren"],"group3":["Maandag","Woensdag"],"group4":["Ridderkerk"]}},
  {"post_id":30,"title":"Acteren","url":"http://oscu.test/cursus/acteren/","image":"/src/images/minion.jpg","image_alt":"","groups":{"group1":["Theater"],"group2":["Jongeren","Volwassenen"],"group3":["Zaterdag"],"group4":["Zwijndrecht"]}}
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
