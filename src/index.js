import "./index.less";
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, browserHistory } from 'react-router-dom'

import App from './components/App'
import Test from './components/Test'

// if (document.getElementById('courses-archive') !== null) {

// 	ReactDOM.render(
// 		<App />,
// 		document.getElementById('courses-archive')
// 	);

// }

const routing = (
	<Router>
	<ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
		<li>
          <Link to="/test/3">Test</Link>
        </li>
      </ul>
	  <div>
		<Route exact path="/" component={App} />
		<Route exact path="/test" component={Test} />
		<Route exact path="/test/:page" component={Test} />
	  </div>
	</Router>
  )


  ReactDOM.render(routing, document.getElementById('courses-archive'))
