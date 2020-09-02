import "./index.less";
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link, HashRouter as Router, browserHistory, useParams } from 'react-router-dom'
// BrowserRouter in production!!!

import CourseArchive from './components/CourseArchive'
import Test from './components/Test'
import Test2 from './components/Test2'


// TODO uitbreiden met pagination settings
const settings = {
  pagination: true, // set to false if no pagination is needed
}

if (document.getElementById('courses-archive') !== null) {

	const routing = (
		<Router>
			<ul>
				<li><Link to="/">Home </Link></li>
				<li><Link to="/page/3">CourseArchive page 3</Link></li>
				<li><Link to="/page/4">CourseArchive page 4</Link></li>
				<li><Link to="/page/5">CourseArchive page 5</Link></li>
				<li><Link to="/test/4">Test Component </Link></li>
				<li><Link to="/test2/4">Test 2 Component </Link></li>
			</ul>
			<Switch>
				<Route exact path="/" component={() => <CourseArchive settings={settings} />} />
				<Route path="/page/:pagenumber" component={() => <CourseArchive settings={settings} />} />
				<Route path="/test/:pageno" component={Test} />
				<Route path="/test2/:pageno" component={Test2} />
			</Switch>
		</Router>
	);


	ReactDOM.render(
		routing,
		document.getElementById('courses-archive')
	);

}

// const routing = (
// 	<Router>
// 	<ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/test">Test</Link>
//         </li>
// 		<li>
//           <Link to="/test/3">Test</Link>
//         </li>
//       </ul>
// 	  <div>
// 		<Route exact path="/" component={App} />
// 		<Route exact path="/test" component={Test} />
// 		<Route exact path="/test/:page" component={Test} />
// 	  </div>
// 	</Router>
//   )


//   ReactDOM.render(routing, document.getElementById('courses-archive'))
