import "./index.less";
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

if (document.getElementById('courses-archive') !== null) {

	ReactDOM.render(
		<App />,
		document.getElementById('courses-archive')
	);

}
