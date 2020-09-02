import React from 'react'
import { Switch, Route, Link, BrowserRouter as Router, browserHistory, useParams, useLocation } from 'react-router-dom'

const Test2 = (props, match) => {

  let { pageno } = useParams();
  console.log(pageno)

    return (
      <>
        <h1>Test</h1>
        <p>Pagina: {pageno}</p>
      </>
    )

}
export default Test2
